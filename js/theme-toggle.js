// ------------------CONTRAST TOGGLE LOGIC-------------------

document.addEventListener('DOMContentLoaded', () => {
    const contrastBtn = document.getElementById('theme-toggle');
    if (!contrastBtn) return;

    const contrastSpan = contrastBtn.querySelector('.contrast-text');

    function updateContrastText(isLight) {
        if (!contrastSpan) return;

        if (isLight) {
            contrastSpan.textContent = 'Dark Mode';
        } else {
            contrastSpan.textContent = 'Light Mode';
        }
    }

    // 1. BACK TO THE PREVIOUS STATE
    const savedState = localStorage.getItem('portfolio-theme-toggle');
    if (savedState === 'enabled') {
        document.documentElement.classList.add('light-mode');
        document.body.classList.add('light-mode');
    }

    const initialIsLight = document.documentElement.classList.contains('light-mode');
    updateContrastText(initialIsLight);

    // 2. TOGGLE CONTRAST
    contrastBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const isLight = document.documentElement.classList.toggle('light-mode');
        document.body.classList.toggle('light-mode', isLight);

        // Save the state in localStorage
        localStorage.setItem('portfolio-theme-toggle', isLight ? 'enabled' : 'disabled');

        // Update the button text based on the new state
        updateContrastText(isLight);
    });
});