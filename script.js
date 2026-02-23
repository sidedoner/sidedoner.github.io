/**
 * script.js
 * Haupt-JavaScript-Datei für Side Döner Website
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Side Döner P.C. - Seite geladen');
    
    // 1. Links zu Buttons zuweisen
    if (typeof SOCIAL_LINKS !== 'undefined') {
        const linkMapping = {
            'link-location': SOCIAL_LINKS.location,
            'link-rating': SOCIAL_LINKS.rating,
            'link-facebook': SOCIAL_LINKS.facebook,
            'link-instagram': SOCIAL_LINKS.instagram,
            'link-tiktok': SOCIAL_LINKS.tiktok,
            'link-website': SOCIAL_LINKS.website,
            'link-order': SOCIAL_LINKS.order
        };
        
        Object.keys(linkMapping).forEach(function(id) {
            const element = document.getElementById(id);
            if (element && linkMapping[id]) {
                element.href = linkMapping[id];
            }
        });
    }
    
    // 2. Informationshinweis verwalten
    const infoNotice = document.getElementById('info-notice');
    const closeNoticeBtn = document.getElementById('close-notice');
    
    if (infoNotice && closeNoticeBtn) {
        const noticeClosed = localStorage.getItem('infoNoticeClosed');
        
        // Hinweis ausblenden, wenn bereits geschlossen
        if (noticeClosed === 'true') {
            infoNotice.classList.add('hidden');
            document.body.classList.add('no-notice');
        }
        
        // Beim Klick auf Schließen-Button
        closeNoticeBtn.addEventListener('click', function() {
            infoNotice.classList.add('hidden');
            document.body.classList.add('no-notice');
            localStorage.setItem('infoNoticeClosed', 'true');
            console.log('✅ Hinweis geschlossen');
        });
        
        // Automatisches Schließen nach 10 Sekunden
        setTimeout(function() {
            if (!infoNotice.classList.contains('hidden') && !localStorage.getItem('infoNoticeClosed')) {
                infoNotice.classList.add('hidden');
                document.body.classList.add('no-notice');
                localStorage.setItem('infoNoticeClosed', 'true');
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