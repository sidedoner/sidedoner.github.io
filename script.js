/**
 * script.js
 * Haupt-JavaScript-Datei für Side Döner Website
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Side Döner P.C. - Seite geladen');
    
    // 1. Links zu Buttons zuweisen
    if (typeof socialLinks !== 'undefined' && typeof serviceLinks !== 'undefined') {
        const linkMapping = {
            'link-location': serviceLinks.googleMaps,
            'link-rating': serviceLinks.rating,
            'link-facebook': socialLinks.facebook,
            'link-instagram': socialLinks.instagram,
            'link-tiktok': socialLinks.tiktok,
            'link-website': serviceLinks.website,
            'link-order': serviceLinks.wolt
        };
        
        Object.keys(linkMapping).forEach(function(id) {
            const element = document.getElementById(id);
            if (!element) {
                console.error('❌ Element not found: #' + id);
                return;
            }
            if (!linkMapping[id]) {
                console.warn('⚠️ Missing link for: ' + id);
                return;
            }
            element.href = linkMapping[id];
        });
    }
    
    // 2. Informationshinweis verwalten
    const infoNotice = document.getElementById('info-notice');
    const closeNoticeBtn = document.getElementById('close-notice');
    
    if (infoNotice && closeNoticeBtn) {
        const hasLocalStorage = (() => {
            try {
                const test = '__test__';
                localStorage.setItem(test, test);
                localStorage.removeItem(test);
                return true;
            } catch (e) {
                return false;
            }
        })();

        const noticeClosed = hasLocalStorage ? localStorage.getItem('infoNoticeClosed') : false;
        
        // Hinweis ausblenden, wenn bereits geschlossen
        if (noticeClosed === 'true') {
            infoNotice.classList.add('hidden');
            document.body.classList.add('no-notice');
        }
        
        // Beim Klick auf Schließen-Button
        closeNoticeBtn.addEventListener('click', function() {
            infoNotice.classList.add('hidden');
            document.body.classList.add('no-notice');
            if (hasLocalStorage) {
                localStorage.setItem('infoNoticeClosed', 'true');
            }
            console.log('✅ Hinweis geschlossen');
        });
        
        // Automatisches Schließen nach 10 Sekunden
        setTimeout(function() {
            if (!infoNotice.classList.contains('hidden')) {
                infoNotice.classList.add('hidden');
                document.body.classList.add('no-notice');
                if (hasLocalStorage) {
                    localStorage.setItem('infoNoticeClosed', 'true');
                }
                console.log('⏰ Hinweis automatisch geschlossen');
            }
        }, 10000);
    }
    
    // 3. Button-Effekte
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(function(btn) {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    console.log('✅ Website bereit');
});
