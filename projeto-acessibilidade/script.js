document.addEventListener('DOMContentLoaded', () => {
   
    const panel = document.getElementById('accessibility-panel');
    const togglePanelBtn = document.getElementById('toggle-panel-btn');
    const closePanelBtn = document.getElementById('close-panel-btn');
    const readingGuide = document.getElementById('reading-guide');

    const btnIncreaseFont = document.getElementById('btn-increase-font');
    const btnDecreaseFont = document.getElementById('btn-decrease-font');
    const btnResetFont = document.getElementById('btn-reset-font');
    const btnHighContrast = document.getElementById('btn-high-contrast');
    const btnDarkMode = document.getElementById('btn-dark-mode');
    const btnGrayscale = document.getElementById('btn-grayscale');
    const btnReadableFont = document.getElementById('btn-readable-font');
    const btnHighlightLinks = document.getElementById('btn-highlight-links');
    const btnReadingGuide = document.getElementById('btn-reading-guide');
    const btnSpacing = document.getElementById('btn-spacing');
    const btnResetAll = document.getElementById('btn-reset-all');

   
    let currentFontSize = 16;

    togglePanelBtn.addEventListener('click', () => {
        panel.classList.toggle('hidden');
    });

    closePanelBtn.addEventListener('click', () => {
        panel.classList.add('hidden');
    });

    
    btnIncreaseFont.addEventListener('click', () => {
        if (currentFontSize < 24) {
            currentFontSize += 2;
            document.body.style.fontSize = `${currentFontSize}px`;
        }
    });

    btnDecreaseFont.addEventListener('click', () => {
        if (currentFontSize > 12) {
            currentFontSize -= 2;
            document.body.style.fontSize = `${currentFontSize}px`;
        }
    });

    btnResetFont.addEventListener('click', () => {
        currentFontSize = 16;
        document.body.style.fontSize = '16px';
    });

  
    btnHighContrast.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
        btnHighContrast.classList.toggle('active');
     
        if (document.body.classList.contains('high-contrast')) {
            document.body.classList.remove('dark-mode');
            btnDarkMode.classList.remove('active');
        }
    });

    
    btnDarkMode.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        btnDarkMode.classList.toggle('active');
      
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('high-contrast');
            btnHighContrast.classList.remove('active');
        }
    });

   
    btnGrayscale.addEventListener('click', () => {
        document.body.classList.toggle('grayscale');
        btnGrayscale.classList.toggle('active');
    });

   
    btnReadableFont.addEventListener('click', () => {
        document.body.classList.toggle('readable-font');
        btnReadableFont.classList.toggle('active');
    });

  
    btnHighlightLinks.addEventListener('click', () => {
        document.body.classList.toggle('highlight-links');
        btnHighlightLinks.classList.toggle('active');
    });

    
    btnReadingGuide.addEventListener('click', () => {
        readingGuide.classList.toggle('hidden');
        btnReadingGuide.classList.toggle('active');
    });

   
    document.addEventListener('mousemove', (e) => {
        if (!readingGuide.classList.contains('hidden')) {
            readingGuide.style.top = `${e.clientY}px`;
        }
    });

    btnSpacing.addEventListener('click', () => {
        document.body.classList.toggle('increased-spacing');
        btnSpacing.classList.toggle('active');
    });

    btnResetAll.addEventListener('click', () => {
        currentFontSize = 16;
        document.body.style.fontSize = '16px';
        document.body.className = '';
        readingGuide.classList.add('hidden');

   
        const allToggleBtns = document.querySelectorAll('.panel-btn');
        allToggleBtns.forEach(btn => btn.classList.remove('active'));
    });
});