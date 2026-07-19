(function () {
    var AUTHOR_DIRECTORY = {
        'ryan-trudeau': {
            id: 'ryan-trudeau',
            name: 'Ryan Trudeau',
            major: 'Public Health',
            institution: 'University of Utah',
            bio: 'Ryan Trudeau is an undergraduate student majoring in Public Health at the University of Utah. His academic interests include mental health, substance use, epidemiology, and public health policy. His work explores how emerging public health challenges intersect with evidence-based research and preventative health initiatives.',
            profilePath: 'authors/ryan-trudeau.html'
        },
        'miller-smith': {
            id: 'miller-smith',
            name: 'Miller Smith',
            major: 'Finance & Marketing',
            institution: 'University of Washington Foster School of Business',
            bio: 'Miller Smith is a Finance & Marketing student at the University of Washington Foster School of Business. His academic interests include international finance, behavioral economics, corporate governance, monetary systems, capital markets, environmental policy, and the intersection of economic policy and geopolitical risk.',
            profilePath: 'authors/miller-smith.html'
        }
    };

    function getDisplayInstitutionName(institution, options) {
        /* authors.js executes before main.js on shared pages, so this helper resolves the global normalizer at render time */
        if (options && options.normalizeUniversity && typeof window.normalizeUniversityName === 'function') {
            return window.normalizeUniversityName(institution);
        }
        return (institution || '').trim();
    }

    function formatAuthorInstitution(major, institution, options) {
        var normalizedInstitution = getDisplayInstitutionName(institution, options);
        if (!major) return normalizedInstitution;
        if (!normalizedInstitution) return major + ' student';
        var startsUniversityOf = /^university of/i.test(normalizedInstitution);
        var startsWithTheUniversityOf = /^the\s+university of/i.test(normalizedInstitution);
        var needsArticle = startsUniversityOf && !startsWithTheUniversityOf;
        return major + ' student at ' + (needsArticle ? 'the ' : '') + normalizedInstitution;
    }

    function getSiteRoot() {
        var pathname = window.location.pathname;
        if (pathname.indexOf('/articles/') !== -1 || pathname.indexOf('/authors/') !== -1) {
            return '../';
        }
        return '';
    }

    function buildSitePath(path) {
        return getSiteRoot() + path;
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

        if (author.imagePath) {
            var avatarWrap = document.createElement('div');
            avatarWrap.className = 'author-profile-card__avatar';

            var image = document.createElement('img');
            image.src = buildSitePath(author.imagePath);
            image.alt = author.imageAlt || (author.name + ' profile image');
            avatarWrap.appendChild(image);

            card.appendChild(avatarWrap);
        }

        var content = document.createElement('div');
        content.className = 'author-profile-card__content';

        var name = document.createElement('h3');
        name.className = 'author-profile-card__name';
        name.appendChild(createAuthorLink(authorId, author.name));

        var institution = document.createElement('p');
        institution.className = 'author-profile-card__institution';
        institution.textContent = formatAuthorInstitution(author.major, author.institution, { normalizeUniversity: true });

        var bio = document.createElement('p');
        bio.className = 'author-profile-card__bio';
        bio.textContent = author.bio;

        content.appendChild(name);
        content.appendChild(institution);
        content.appendChild(bio);

        card.appendChild(content);
        return card;
    }

    function hydrateAuthorLinks() {
        document.querySelectorAll('[data-author-link]').forEach(function (node) {
            var authorId = node.getAttribute('data-author-link');
            var author = getAuthorProfile(authorId);
            if (!author) return;
            if (node.children.length === 0) {
                node.textContent = author.name;
            }
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
            if (!author) return;
            node.textContent = formatAuthorInstitution(author.major, author.institution, {
                normalizeUniversity: node.getAttribute('data-author-institution-mode') === 'normalized'
            });
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
