// GA4 Consent Mode v2 — must run before any GA script
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 500
});
gtag('js', new Date());
gtag('config', 'G-01TCGPSE78', { anonymize_ip: true });
