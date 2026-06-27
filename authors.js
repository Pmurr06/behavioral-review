(function () {
    var AUTHOR_DIRECTORY = {
        'miller-smith': {
            id: 'miller-smith',
            name: 'Miller Smith',
            institution: 'University of Washington Foster School of Business',
            bio: 'Miller Smith is a Finance & Marketing student at the University of Washington Foster School of Business. His academic interests include international finance, behavioral economics, corporate governance, monetary systems, capital markets, environmental policy, and the intersection of economic policy and geopolitical risk.',
            profilePath: 'authors/miller-smith.html',
            imagePath: 'miller-smith.svg',
            imageAlt: 'Illustrated author profile image for Miller Smith'
        }
    };

    function getSiteRoot() {
        var pathname = window.location.pathname;
        if (pathname.indexOf('/articles/') !== -1 || pathname.indexOf('/authors/') !== -1) {
            return '../';
        }
        return '';
    }

    function buildSitePath(path) {
        var siteRoot = getSiteRoot();
        return siteRoot ? siteRoot + path : path;
    }

    function getAuthorProfile(authorId) {
        return AUTHOR_DIRECTORY[authorId] || null;
    }

    function getAuthorProfileHref(authorId) {
        var author = getAuthorProfile(authorId);
        return author ? buildSitePath(author.profilePath) : '';
    }

    function createAuthorLink(authorId, text) {
        var author = getAuthorProfile(authorId);
        var link = document.createElement('a');
        link.className = 'author-profile-link';
        link.href = author ? getAuthorProfileHref(authorId) : '#';
        link.textContent = text || (author ? author.name : '');
        return link;
    }

    function buildAuthorProfileCard(authorId, variant) {
        var author = getAuthorProfile(authorId);
        if (!author) return null;

        var card = document.createElement('div');
        card.className = 'author-profile-card' + (variant === 'compact' ? ' author-profile-card--compact' : '');

        var avatarWrap = document.createElement('div');
        avatarWrap.className = 'author-profile-card__avatar';

        var image = document.createElement('img');
        image.src = buildSitePath(author.imagePath);
        image.alt = author.imageAlt;
        avatarWrap.appendChild(image);

        var content = document.createElement('div');
        content.className = 'author-profile-card__content';

        var name = document.createElement('h3');
        name.className = 'author-profile-card__name';
        name.appendChild(createAuthorLink(authorId, author.name));

        var institution = document.createElement('p');
        institution.className = 'author-profile-card__institution';
        institution.textContent = author.institution;

        var bio = document.createElement('p');
        bio.className = 'author-profile-card__bio';
        bio.textContent = author.bio;

        content.appendChild(name);
        content.appendChild(institution);
        content.appendChild(bio);

        card.appendChild(avatarWrap);
        card.appendChild(content);
        return card;
    }

    function hydrateAuthorLinks() {
        document.querySelectorAll('[data-author-link]').forEach(function (node) {
            var authorId = node.getAttribute('data-author-link');
            var author = getAuthorProfile(authorId);
            if (!author) return;
            node.textContent = author.name;
            node.setAttribute('href', getAuthorProfileHref(authorId));
            node.classList.add('author-profile-link');
        });
    }

    function hydrateAuthorText() {
        document.querySelectorAll('[data-author-name]').forEach(function (node) {
            var author = getAuthorProfile(node.getAttribute('data-author-name'));
            if (author) node.textContent = author.name;
        });

        document.querySelectorAll('[data-author-institution]').forEach(function (node) {
            var author = getAuthorProfile(node.getAttribute('data-author-institution'));
            if (author) node.textContent = author.institution;
        });

        document.querySelectorAll('[data-author-bio]').forEach(function (node) {
            var author = getAuthorProfile(node.getAttribute('data-author-bio'));
            if (author) node.textContent = author.bio;
        });
    }

    function hydrateAuthorCards() {
        document.querySelectorAll('[data-author-profile-card]').forEach(function (node) {
            var authorId = node.getAttribute('data-author-profile-card');
            var variant = node.getAttribute('data-author-card-variant') || 'full';
            var card = buildAuthorProfileCard(authorId, variant);
            if (!card) return;
            node.innerHTML = '';
            node.appendChild(card);
        });
    }

    window.AUTHOR_DIRECTORY = AUTHOR_DIRECTORY;
    window.getAuthorProfile = getAuthorProfile;
    window.getAuthorProfileHref = getAuthorProfileHref;
    window.buildAuthorProfileCard = buildAuthorProfileCard;

    document.addEventListener('DOMContentLoaded', function () {
        hydrateAuthorLinks();
        hydrateAuthorText();
        hydrateAuthorCards();
    });
})();
