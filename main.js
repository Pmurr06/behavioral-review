/* ============================================
   Article Data — single source of truth
   Add new articles at the top of this array
   to make them the newest publication.
   ============================================ */
var ARTICLES = [
    {
        title: 'Growing Without Losing Your Culture: Organizational Lessons from the Bouldering Project',
        author: 'David Kim',
        major: 'Logistics, Materials & Supply Chain Management',
        institution: 'University of Washington Foster School of Business',
        categories: ['Business', 'Organizational Behavior'],
        date: 'June 2026',
        readingTime: '10 min read',
        preview: 'As the Bouldering Project expands nationally, leadership faces a familiar challenge: preserving mission-driven workplace culture while scaling operations. Drawing on interviews with Seattle-area employees, this article examines organizational behavior dynamics and offers practical recommendations for sustaining engagement, trust, and community identity.',
        link: 'articles/growing-without-losing-your-culture.html'
    },
    {
        title: 'The Rule of Reason: Why NCAA v. Alston Changed College Sports',
        author: 'Carson Wais',
        major: 'Business Finance',
        institution: 'Washington State University',
        categories: ['Law & Society', 'Business'],
        date: 'June 2026',
        readingTime: '9 min read',
        preview: 'For decades, the NCAA defended amateurism as the foundation of college athletics. In NCAA v. Alston (2021), the Supreme Court unanimously held that the NCAA\'s restrictions on education-related benefits violated the Sherman Antitrust Act, applying the Rule of Reason to redefine the legal and financial landscape of collegiate sports.',
        link: 'articles/rule-of-reason-ncaa-alston.html'
    },
    {
        title: 'The Value of Boring Banking: Why Financial Stability Matters More Than Speculation',
        author: 'Kelden Littell',
        major: 'Computer Engineering',
        institution: 'University of Utah',
        categories: ['Economics'],
        date: 'June 2026',
        readingTime: '9 min read',
        preview: 'Financial innovation can drive growth, but history shows that long-term prosperity depends on stable banking institutions, prudent risk management, and sustained consumer trust. This article examines the Great Recession, behavioral incentives, and why conservative banking remains essential to economic resilience.',
        link: 'articles/value-of-boring-banking.html'
    },
    {
        title: 'Rethinking Affordable Housing: A Land-Bank Strategy for Bozeman',
        author: 'Radek Janout',
        major: 'Finance',
        institution: 'Montana State University',
        categories: ['Economics', 'Public Policy'],
        date: 'June 2026',
        readingTime: '9 min read',
        preview: 'Bozeman\'s housing crisis reflects more than construction costs; it reflects the rising cost and scarcity of developable land. This article proposes a mandatory land-dedication framework to build a long-term affordable housing land bank while preserving market-based development incentives.',
        link: 'articles/rethinking-affordable-housing-bozeman.html'
    },
    {
        title: 'Profit, Power, and the Climate Crisis: Does Capitalism Prevent Environmental Progress?',
        authorId: 'miller-smith',
        author: 'Miller Smith',
        major: 'Finance & Marketing',
        institution: 'University of Washington Foster School of Business',
        category: 'Economics',
        date: 'June 2026',
        readingTime: '12 min read',
        preview: 'Despite decades of scientific consensus on climate change, global greenhouse gas emissions continue to rise. This article examines whether the modern capitalist system encourages environmental progress or unintentionally prevents it, exploring corporate incentives, lobbying, corporate social responsibility, and the unequal global impacts of climate change.',
        link: 'articles/profit-power-and-the-climate-crisis.html'
    },
    {
        title: 'NCAA v. Alston: The Supreme Court Decision That Changed College Athletics',
        author: 'David Morgan',
        major: 'Business Administration & Management',
        institution: 'Washington State University',
        category: 'Law & Society',
        date: 'June 2026',
        readingTime: '10 min read',
        preview: 'For decades, college athletics operated under a model unlike almost any other industry in the United States. NCAA v. Alston (2021) examined whether NCAA rules restricting education-related benefits to student-athletes violated federal antitrust law, ultimately reshaping the legal relationship between universities, athletic organizations, and the athletes who drive collegiate sports.',
        link: 'articles/ncaa-v-alston.html'
    },
    {
        title: 'Beyond the Straw: Consumer Behavior, Environmental Policy, and the Future of Single-Use Plastics',
        authorId: 'miller-smith',
        author: 'Miller Smith',
        major: 'Finance & Marketing',
        institution: 'University of Washington Foster School of Business',
        category: 'Law & Society',
        date: 'July 2026',
        readingTime: '9–10 min read',
        preview: 'The debate over plastic and paper drinking straws has become a public symbol of the broader challenge of reducing single-use plastics. This editorial examines consumer behavior, environmental policy, corporate responsibility, and why incremental changes can still matter in long-term sustainability efforts.',
        link: 'articles/beyond-the-straw.html'
    },
    {
        title: 'Forex Exchange Markets: The Euro-Dollar Relationship in the Post-COVID Era',
        authorId: 'miller-smith',
        author: 'Miller Smith',
        major: 'Finance & Marketing',
        institution: 'University of Washington Foster School of Business',
        category: 'International Affairs',
        date: 'July 2026',
        readingTime: '15 min read',
        preview: 'The post-COVID era has placed renewed pressure on the international monetary system, particularly the relationship between the U.S. dollar and the euro. This article examines how fiscal policy, monetary divergence, geopolitical shocks, and de-dollarization efforts have shaped the EUR/USD relationship and the broader reserve currency hierarchy.',
        link: 'articles/forex-exchange-markets.html'
    }
];

var EDITORIAL_TEAM = [
    {
        name: 'Paulo Murray',
        role: 'Founder & Managing Editor',
        credentials: 'U.S. Marine | Psychology Student, Penn State World Campus',
        institution: 'Penn State World Campus',
        bio: 'Paulo Murray founded The Behavioral Review to give undergraduate students a publication outlet for behavioral analysis, criminal case commentary, and original research. He is an active-duty U.S. Marine and psychology student pursuing a bachelor\'s degree.',
        imagePath: 'paulomurray.jpeg',
        imageAlt: 'Paulo Murray, Founder and Managing Editor of The Behavioral Review'
    },
    {
        name: 'Nathan Isbell',
        role: 'Copy & Layout Editor',
        credentials: 'U.S. Marine | Writing Student, UMGC',
        institution: 'UMGC',
        bio: 'Nathan Isbell oversees article formatting, citation consistency, editorial presentation, AI-assisted content screening, and publication readiness. He is an active-duty U.S. Marine, Intelligence Specialist, and writing student pursuing a bachelor\'s degree.',
        imagePath: 'nathanisbell.jpeg',
        imageAlt: 'Nathan Isbell, Copy and Layout Editor of The Behavioral Review'
    }
];

var SITE_SETTINGS = {
    averageReviewTime: '2–4 weeks'
};

function formatAuthorInstitution(major, institution) {
    var normalizedInstitution = (institution || '').trim();
    if (!major) return normalizedInstitution;
    if (!normalizedInstitution) return major + ' student';
    var startsUniversityOf = /^university of/i.test(normalizedInstitution);
    var startsWithTheUniversityOf = /^the\s+university of/i.test(normalizedInstitution);
    var needsArticle = startsUniversityOf && !startsWithTheUniversityOf;
    return major + ' student at ' + (needsArticle ? 'the ' : '') + normalizedInstitution;
}

function getArticleAuthorData(article) {
    /* main.js is shared by pages that do not load authors.js, so author helpers must remain optional */
    var profile = article.authorId && typeof window.getAuthorProfile === 'function'
        ? window.getAuthorProfile(article.authorId)
        : null;
    var major = profile ? profile.major : article.major;
    var institution = profile ? profile.institution : article.institution;

    return {
        id: article.authorId || '',
        name: profile ? profile.name : article.author,
        institutionRaw: institution || '',
        institution: formatAuthorInstitution(major, institution),
        profileHref: profile
            ? window.getAuthorProfileHref(article.authorId)
            : ''
    };
}

function normalizeKey(value) {
    return (value || '').trim().replace(/\s+/g, ' ').toLowerCase();
}

function computeHomepageStats() {
    var uniqueAuthors = {};
    var uniqueInstitutions = {};

    ARTICLES.forEach(function (article) {
        var authorData = getArticleAuthorData(article);
        var authorKey = article.authorId || normalizeKey(authorData.name);
        var institutionKey = normalizeKey(authorData.institutionRaw);

        if (authorKey) uniqueAuthors[authorKey] = true;
        if (institutionKey) uniqueInstitutions[institutionKey] = true;
    });

    EDITORIAL_TEAM.forEach(function (editor) {
        var institutionKey = normalizeKey(editor.institution);
        if (institutionKey) uniqueInstitutions[institutionKey] = true;
    });

    return {
        articlesPublished: String(ARTICLES.length),
        studentAuthors: String(Object.keys(uniqueAuthors).length),
        universitiesRepresented: String(Object.keys(uniqueInstitutions).length),
        averageReviewTime: SITE_SETTINGS.averageReviewTime
    };
}

function initHomepageStats() {
    var statsRoot = document.querySelector('[data-glance-stats]');
    if (!statsRoot) return;

    var stats = computeHomepageStats();
    Object.keys(stats).forEach(function (key) {
        statsRoot.querySelectorAll('[data-glance-stat="' + key + '"]').forEach(function (node) {
            node.textContent = stats[key];
        });
    });
}

function initHomepageEditorialBoard() {
    var boardEl = document.querySelector('[data-editorial-board]');
    if (!boardEl) return;

    boardEl.innerHTML = '';
    EDITORIAL_TEAM.forEach(function (editor) {
        var card = document.createElement('div');
        card.className = 'board-member';

        var name = document.createElement('div');
        name.className = 'member-name';
        name.textContent = editor.name;

        var role = document.createElement('div');
        role.className = 'member-role';
        role.textContent = editor.role;

        card.appendChild(name);
        card.appendChild(role);
        boardEl.appendChild(card);
    });
}

function getSiteRoot() {
    var pathname = window.location.pathname;
    if (pathname.indexOf('/articles/') !== -1 || pathname.indexOf('/authors/') !== -1) {
        return '../';
    }
    return '';
}

function initEditorialTeamPage() {
    var editorsEl = document.querySelector('[data-featured-editors]');
    if (!editorsEl) return;

    var siteRoot = getSiteRoot();
    editorsEl.innerHTML = '';

    EDITORIAL_TEAM.forEach(function (editor) {
        var card = document.createElement('div');
        card.className = 'editor-card';

        var headshot = document.createElement('div');
        headshot.className = 'editor-headshot';

        var image = document.createElement('img');
        image.src = siteRoot + editor.imagePath;
        image.alt = editor.imageAlt;
        headshot.appendChild(image);

        var info = document.createElement('div');
        info.className = 'editor-info';

        var name = document.createElement('h3');
        name.textContent = editor.name;

        var title = document.createElement('p');
        title.className = 'editor-title';
        title.textContent = editor.role;

        var credentials = document.createElement('p');
        credentials.className = 'editor-credentials';
        credentials.textContent = editor.credentials;

        var bio = document.createElement('p');
        bio.className = 'editor-bio';
        bio.textContent = editor.bio;

        info.appendChild(name);
        info.appendChild(title);
        info.appendChild(credentials);
        info.appendChild(bio);

        card.appendChild(headshot);
        card.appendChild(info);
        editorsEl.appendChild(card);
    });
}

/* Build one publication card element from an article object */
function buildArticleCard(article) {
    var authorData = getArticleAuthorData(article);
    var articleCategories = Array.isArray(article.categories)
        ? article.categories
        : (article.category ? [article.category] : []);
    var displayCategory = articleCategories.join(' • ');
    var card = document.createElement('article');
    card.className = 'publication-card';
    card.setAttribute('data-category', displayCategory);

    var pill = document.createElement('span');
    pill.className = 'article-category-pill';
    pill.textContent = displayCategory;

    var heading = document.createElement('h3');
    heading.textContent = article.title;

    var meta = document.createElement('div');
    meta.className = 'publication-card-meta';

    var authorSpan = document.createElement('span');
    if (authorData.profileHref) {
        var authorLink = document.createElement('a');
        authorLink.href = authorData.profileHref;
        authorLink.className = 'author-profile-link';
        authorLink.textContent = authorData.name;
        authorSpan.appendChild(authorLink);
    } else {
        authorSpan.textContent = authorData.name;
    }
    meta.appendChild(authorSpan);

    [authorData.institution, article.date, article.readingTime].forEach(function (text) {
        var span = document.createElement('span');
        span.textContent = text;
        meta.appendChild(span);
    });

    var preview = document.createElement('p');
    preview.textContent = article.preview;

    var btn = document.createElement('a');
    btn.href = article.link;
    btn.className = 'btn btn-primary';
    btn.textContent = 'Read Article';

    card.appendChild(pill);
    card.appendChild(heading);
    card.appendChild(meta);
    card.appendChild(preview);
    card.appendChild(btn);

    return card;
}

/* Archive page — render filters and article feed */
function initArchivePage() {
    var filtersEl = document.getElementById('archive-filters');
    var feedEl = document.getElementById('archive-feed');
    if (!filtersEl || !feedEl) return;

    var categories = ['All', 'Psychology', 'Criminal Justice', 'Economics', 'International Affairs', 'Public Policy', 'Law & Society', 'Business', 'Organizational Behavior'];
    var activeCategory = 'All';

    /* Build filter buttons */
    categories.forEach(function (cat) {
        var btn = document.createElement('button');
        btn.className = 'filter-btn' + (cat === 'All' ? ' filter-btn--active' : '');
        btn.textContent = cat;
        btn.setAttribute('data-filter', cat);
        btn.addEventListener('click', function () {
            activeCategory = cat;
            filtersEl.querySelectorAll('.filter-btn').forEach(function (b) {
                b.classList.toggle('filter-btn--active', b.getAttribute('data-filter') === cat);
            });
            renderFeed();
        });
        filtersEl.appendChild(btn);
    });

    /* Render article cards, filtered by activeCategory */
    function renderFeed() {
        feedEl.innerHTML = '';
        var filtered = ARTICLES.filter(function (a) {
            var articleCategories = Array.isArray(a.categories)
                ? a.categories
                : (a.category ? [a.category] : []);
            return activeCategory === 'All' || articleCategories.indexOf(activeCategory) !== -1;
        });
        if (filtered.length === 0) {
            var empty = document.createElement('p');
            empty.className = 'archive-empty';
            empty.textContent = 'No articles in this category yet.';
            feedEl.appendChild(empty);
        } else {
            filtered.forEach(function (a) {
                feedEl.appendChild(buildArticleCard(a));
            });
        }
    }

    renderFeed();
}

/* Recent Articles page — render the newest article */
function initRecentArticlesPage() {
    var feedEl = document.getElementById('recent-feed');
    if (!feedEl || ARTICLES.length === 0) return;
    feedEl.appendChild(buildArticleCard(ARTICLES[0]));
}

/* Author profile page — render linked publications */
function initAuthorProfilePage() {
    var feedEl = document.querySelector('[data-author-articles]');
    if (!feedEl) return;

    var authorId = feedEl.getAttribute('data-author-articles');
    var authoredArticles = ARTICLES.filter(function (article) {
        return article.authorId === authorId;
    });

    if (authoredArticles.length === 0) {
        var empty = document.createElement('p');
        empty.className = 'archive-empty';
        empty.textContent = 'No published articles are available for this author yet.';
        feedEl.appendChild(empty);
        return;
    }

    authoredArticles.forEach(function (article) {
        feedEl.appendChild(buildArticleCard(article));
    });
}

function initArticlePageMetadata() {
    var hero = document.querySelector('.article-hero');
    var affiliation = document.querySelector('.article-affiliation');
    if (!hero || !affiliation) return;

    var explicitLink = hero.getAttribute('data-article-link');
    var currentFile = window.location.pathname.split('/').pop();
    if (!currentFile) return;
    var article = ARTICLES.find(function (entry) {
        if (!entry.link) return false;
        if (explicitLink) return entry.link === explicitLink;
        var linkFile = entry.link.split('/').pop();
        return !!linkFile && linkFile === currentFile;
    });
    if (!article) return;

    var authorData = getArticleAuthorData(article);
    affiliation.textContent = authorData.institution;
}

document.addEventListener('DOMContentLoaded', function () {
    /* Navigation toggle */
    var toggle = document.getElementById('navToggle');
    var navLinks = document.querySelector('.nav-links');
    if (toggle && navLinks) {
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
    }

    initArchivePage();
    initRecentArticlesPage();
    initAuthorProfilePage();
    initArticlePageMetadata();
    initHomepageStats();
    initHomepageEditorialBoard();
    initEditorialTeamPage();
});
