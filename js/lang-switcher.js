// LANGUAGE SWITCHER FUNCTION

document.addEventListener('DOMContentLoaded', function() {
    
    function switchLanguage(lang) {

        const is_en = () => lang === 'en';
        const is_hu = () => lang === 'hu';
        const is_ro = () => lang === 'ro';

        document.body.classList.remove('lang-en', 'lang-hu', 'lang-ro');
        if (is_en()) {
            document.body.classList.add('lang-en');
        } else if (is_hu()) {
            document.body.classList.add('lang-hu');
        } else if (is_ro()) {
            document.body.classList.add('lang-ro');
        }
        
        document.querySelectorAll('.lang-btn').forEach(function(btn) {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        document.querySelectorAll('input[placeholder]').forEach(function(input) {
            input.placeholder = input.dataset['placeholder' + lang.charAt(0).toUpperCase() + lang.slice(1)];
        });
        document.querySelectorAll('textarea[placeholder]').forEach(function(textarea) {
            textarea.placeholder = textarea.dataset['placeholder' + lang.charAt(0).toUpperCase() + lang.slice(1)];
        });

        localStorage.setItem('preferredLanguage', lang);
    }
    
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
    switchLanguage(preferredLanguage);

    // 3. event listener hozzáadása a gombokhoz
    document.querySelectorAll('.lang-btn').forEach(function(button) {
        button.addEventListener('click', function() {
            const selectedLang = this.dataset.lang;
            switchLanguage(selectedLang);
        });
    });
});