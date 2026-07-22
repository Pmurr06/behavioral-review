(function () {
    var LINKEDIN_ICON_PATH = 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z';
    var AUTHOR_LINKEDIN_DIRECTORY = {
        'harrison-mclain': 'https://www.linkedin.com/in/harrison-mclain-5225741b6/',
        'luke-marshall': 'https://www.linkedin.com/in/luke-marshall-0661a3281/',
        'miller-smith': 'https://www.linkedin.com/in/miller-smithh/',
        'katie-nguyen': 'https://www.linkedin.com/in/katie-nguyen-190b793ba/',
        'ella-roehl': 'https://www.linkedin.com/in/ella-roehl-a8315b254/',
        'alexandra-quist': 'https://www.linkedin.com/in/alexandra-quist-68a0a51b3/',
        'alan-ta': 'https://www.linkedin.com/in/alanqta/',
        'ryan-trudeau': 'https://www.linkedin.com/in/ryan-trudeau-748a5a356/',
        'jackson-pincock': 'https://www.linkedin.com/in/jackson-pincock-5530a43a6/',
        'david-kim': 'https://www.linkedin.com/in/david-kim-47b133352/',
        'david-morgan': 'https://www.linkedin.com/in/david-morgan-16740935b/',
        'carson-wais': 'https://www.linkedin.com/in/carsonwais1/',
        'kelden-littell': 'https://www.linkedin.com/in/kelden-littell-534a21282/',
        'radek-janout': 'https://www.linkedin.com/in/radek-janout-b0b44b338/'
    };

    var AUTHOR_DIRECTORY = {
        'harrison-mclain': {
            id: 'harrison-mclain',
            name: 'Harrison McLain',
            major: 'Computer Science',
            institution: 'Gonzaga University',
            bio: 'Harrison McLain is a Computer Science student at Gonzaga University with interests spanning philosophy, film analysis, and interdisciplinary approaches to human experience. His work explores how cinema can illuminate complex philosophical ideas, particularly phenomenology, embodiment, and perception.',
            profilePath: 'authors/harrison-mclain.html'
        },
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
        },
        'luke-marshall': {
            id: 'luke-marshall',
            name: 'Luke Marshall',
            major: 'Sociology',
            institution: 'University of Oregon',
            bio: 'Luke Marshall is a sociology student at the University of Oregon whose academic interests include social inequality, culture, race and ethnicity, and the sociology of popular media. His work explores how contemporary events and cultural products can be analyzed through classical and modern sociological theory.',
            profilePath: 'authors/luke-marshall.html'
        },
        'katie-nguyen': {
            id: 'katie-nguyen',
            name: 'Katie Nguyen',
            major: 'Health Sciences',
            institution: 'University of South Florida',
            bio: 'Katie Nguyen is a Health Sciences student at the University of South Florida and a contributor to The Behavioral Review.',
            profilePath: 'authors/katie-nguyen.html'
        },
        'ella-roehl': {
            id: 'ella-roehl',
            name: 'Ella Roehl',
            major: 'Human Physiology',
            institution: 'University of Iowa',
            bio: 'Ella Roehl is a Human Physiology student at the University of Iowa and a contributor to The Behavioral Review.',
            profilePath: 'authors/ella-roehl.html'
        },
        'alexandra-quist': {
            id: 'alexandra-quist',
            name: 'Alexandra Quist',
            major: 'Anthropology',
            institution: 'University of Washington',
            bio: 'Alexandra Quist is an Anthropology student at the University of Washington. Her academic interests include philosophy, critical reasoning, behavioral science, and the intersection of individual autonomy and social convention.',
            profilePath: 'authors/alexandra-quist.html'
        },
        'alan-ta': {
            id: 'alan-ta',
            name: 'Alan Ta',
            major: 'Honors Finance and Business Analytics',
            institution: 'Indiana University Kelley School of Business',
            bio: 'Alan Ta is an Honors student studying Finance and Business Analytics at the Indiana University Kelley School of Business. His academic interests include behavioral economics, financial decision-making, literature, ethics, and the psychology of human judgment.',
            profilePath: 'authors/alan-ta.html'
        },
        'jackson-pincock': {
            id: 'jackson-pincock',
            name: 'Jackson Pincock',
            major: 'Business',
            institution: 'University of Utah',
            bio: 'Jackson Pincock is a business student at the University of Utah with interests in business analytics, organizational strategy, sports economics, and data-driven decision making.',
            profilePath: 'authors/jackson-pincock.html'
        },
        'david-kim': {
            id: 'david-kim',
            name: 'David Kim',
            major: 'Logistics, Materials & Supply Chain Management',
            institution: 'University of Washington Foster School of Business',
            bio: 'David Kim is a Logistics, Materials & Supply Chain Management student at the University of Washington Foster School of Business. His academic interests include organizational behavior, supply chain management, leadership, operations management, workplace culture, and organizational strategy.',
            profilePath: 'authors/david-kim.html'
        },
        'david-morgan': {
            id: 'david-morgan',
            name: 'David Morgan',
            major: 'Business Administration & Management',
            institution: 'Washington State University',
            bio: 'David Morgan is a Business Administration & Management student at Washington State University. His writing focuses on business law, collegiate athletics, and the legal issues shaping modern sports.',
            profilePath: 'authors/david-morgan.html'
        },
        'carson-wais': {
            id: 'carson-wais',
            name: 'Carson Wais',
            major: 'Business Finance',
            institution: 'Washington State University',
            bio: 'Carson Wais is a Business Finance student at Washington State University. His academic interests include business law, finance, antitrust law, corporate governance, sports governance, and public policy. His work examines how legal institutions and market regulations influence competition, organizational decision-making, and the business of collegiate athletics.',
            profilePath: 'authors/carson-wais.html'
        },
        'kelden-littell': {
            id: 'kelden-littell',
            name: 'Kelden Littell',
            major: 'Computer Engineering',
            institution: 'University of Utah',
            bio: 'Kelden Littell is a Computer Engineering student at the University of Utah. His academic interests include financial systems, banking regulation, technology, market behavior, and the intersection of engineering, economics, and public policy.',
            profilePath: 'authors/kelden-littell.html'
        },
        'radek-janout': {
            id: 'radek-janout',
            name: 'Radek Janout',
            major: 'Finance',
            institution: 'Montana State University',
            bio: 'Radek Janout is a Finance student at Montana State University. His academic interests include housing economics, public finance, urban development, real estate markets, and public policy. His work examines how economic incentives, financial markets, and institutional decision-making influence long-term community development and housing affordability.',
            profilePath: 'authors/radek-janout.html'
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

    function createLinkedInLink(author) {
        var linkedInUrl = author && author.id ? AUTHOR_LINKEDIN_DIRECTORY[author.id] : '';
        if (!linkedInUrl) return null;

        var link = document.createElement('a');
        link.className = 'follow-us-link linkedin author-profile-linkedin';
        link.href = linkedInUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.setAttribute('aria-label', author.name + ' on LinkedIn (opens in new tab)');

        var icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        icon.setAttribute('viewBox', '0 0 24 24');
        icon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        icon.setAttribute('aria-hidden', 'true');

        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', LINKEDIN_ICON_PATH);
        icon.appendChild(path);

        link.appendChild(icon);
        link.appendChild(document.createTextNode('LinkedIn'));
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

        content.appendChild(name);
        content.appendChild(institution);
        var linkedInLink = createLinkedInLink(author);
        if (linkedInLink) {
            content.appendChild(linkedInLink);
        }

        if (author.bio) {
            var bio = document.createElement('p');
            bio.className = 'author-profile-card__bio';
            bio.textContent = author.bio;
            content.appendChild(bio);
        }

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
