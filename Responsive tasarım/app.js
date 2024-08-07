document.addEventListener("DOMContentLoaded", function() {
    var cookieConsent = document.getElementById('cookieConsent');
    var acceptCookies = document.getElementById('acceptCookies');

    // Eğer daha önce çerezler kabul edilmişse bildirimi gizle
    // if (localStorage.getItem('cookiesAccepted') === 'true') {
    //     cookieConsent.style.display = 'none';
    // }
    // Kabul edilince
    acceptCookies.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieConsent.style.display = 'none';
    });



    var enable = document.getElementById('menu_enable');
    var disable = document.getElementById('menu_disable');
    var hamburgerMenu = document.getElementById('hamburgerMenu');
    var menu_id = document.getElementById('menu_id');

    enable.addEventListener('click', function() {
        hamburgerMenu.style.display = 'block';
        menu_id.style.display = 'none';
        enable.style.display='none';
    });

    disable.addEventListener('click', function() {
        hamburgerMenu.style.display = 'none';
        menu_id.style.display = 'flex';
        enable.style.display='flex';
    });

    
});
