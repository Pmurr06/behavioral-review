document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.getElementById('navToggle');
    var navLinks = document.querySelector('.nav-links');
    if (!toggle || !navLinks) return;

    toggle.addEventListener('click', function () {
        var expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!expanded));
        navLinks.classList.toggle('nav-open');
    });

    navLinks.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
            navLinks.classList.remove('nav-open');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });

    document.addEventListener('click', function (e) {
        if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('nav-open');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });
});
