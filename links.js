// Side Döner P.C. - Links Configuration
const businessInfo = {
    name: "Side Döner P.C.",
    owner: "Mahsum Gülec",
    address: "Paunsdorfer Allee 1, 04329 Leipzig",
    phone: "+49 341 91877384",
    email: "mahsumguelec@gmail.com",
    ustIdNr: "DE405510026"
};

const socialLinks = {
    facebook: "https://www.facebook.com/share/1GRzvUERdf/",       // Offizielle Facebook-Seite (Link wird aktualisiert sobald 25 Follower erreicht)
    instagram: "https://www.instagram.com/sideleipzig_p.c",        // Offizielle Instagram-Seite
    tiktok: "https://www.tiktok.com/@side_doner"                   // Offizielle TikTok-Seite
};

const serviceLinks = {
    googleMaps: "https://maps.app.goo.gl/e7tAMWdscaDBwMCv5",      // Google Maps Standort
    rating: "https://g.page/r/Ce4sF7XVVnGaEBM/review",            // Google Bewertungslink
    website: "https://sidedoener-leipzig.de",                       // Offizielle Website
    wolt: "https://wolt.com/de/deu/leipzig/restaurant/side-doener-paunsdorf-center", // Wolt Bestellplattform
menu: "https://sidedoner.github.io/menu.html" // Speisekarte
};

const legalLinks = {
    impressum: "./impressum.html",    // Impressum-Seite
    datenschutz: "./datenschutz.html" // Datenschutzerklärung-Seite
};

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { businessInfo, socialLinks, serviceLinks, legalLinks };
}
