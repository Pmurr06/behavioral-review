/* ============================================
   Article Data — single source of truth
   Add new articles at the top of this array
   to make them the newest publication.
   ============================================ */
var ARTICLES = [
    {
        title: 'Profit, Power, and the Climate Crisis: Does Capitalism Prevent Environmental Progress?',
        authorId: 'miller-smith',
        category: 'Behavioral Economics',
        date: 'June 2026',
        readingTime: '12 min read',
        preview: 'Despite decades of scientific consensus on climate change, global greenhouse gas emissions continue to rise. This article examines whether the modern capitalist system encourages environmental progress or unintentionally prevents it, exploring corporate incentives, lobbying, corporate social responsibility, and the unequal global impacts of climate change.',
        link: 'articles/profit-power-and-the-climate-crisis.html'
    },
    {
        title: 'NCAA v. Alston: The Supreme Court Decision That Changed College Athletics',
        author: 'David Morgan',
        institution: 'Business Administration & Management Student, Washington State University',
        category: 'Law & Society',
        date: 'June 2026',
        readingTime: '10 min read',
        preview: 'For decades, college athletics operated under a model unlike almost any other industry in the United States. NCAA v. Alston (2021) examined whether NCAA rules restricting education-related benefits to student-athletes violated federal antitrust law, ultimately reshaping the legal relationship between universities, athletic organizations, and the athletes who drive collegiate sports.',
        link: 'articles/ncaa-v-alston.html'
    },
    {
        title: 'Beyond the Straw: Consumer Behavior, Environmental Policy, and the Future of Single-Use Plastics',
        authorId: 'miller-smith',
        category: 'Law & Society',
        date: 'July 2026',
        readingTime: '9–10 min read',
        preview: 'The debate over plastic and paper drinking straws has become a public symbol of the broader challenge of reducing single-use plastics. This editorial examines consumer behavior, environmental policy, corporate responsibility, and why incremental changes can still matter in long-term sustainability efforts.',
        link: 'articles/beyond-the-straw.html'
    },
    {
        title: 'Forex Exchange Markets: The Euro-Dollar Relationship in the Post-COVID Era',
        authorId: 'miller-smith',
        category: 'International Affairs',
        date: 'July 2026',
        readingTime: '15 min read',
        preview: 'The post-COVID era has placed renewed pressure on the international monetary system, particularly the relationship between the U.S. dollar and the euro. This article examines how fiscal policy, monetary divergence, geopolitical shocks, and de-dollarization efforts have shaped the EUR/USD relationship and the broader reserve currency hierarchy.',
        link: 'articles/forex-exchange-markets.html'
    }
];

function getArticleAuthorData(article) {
    var profile = article.authorId && typeof window.getAuthorProfile === 'function'
        ? window.getAuthorProfile(article.authorId)
        : null;

    return {
        id: article.authorId || '',
        name: profile ? profile.name : article.author,
        institution: profile ? profile.institution : article.institution,
        profileHref: profile && typeof window.getAuthorProfileHref === 'function'
            ? window.getAuthorProfileHref(article.authorId)
            : ''
    };
}

/* Build one publication card element from an article object */
function buildArticleCard(article) {
    var authorData = getArticleAuthorData(article);
    var card = document.createElement('article');
    card.className = 'publication-card';
    card.setAttribute('data-category', article.category);

    var pill = document.createElement('span');
    pill.className = 'article-category-pill';
    pill.textContent = article.category;

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

    var categories = ['All', 'Psychology', 'Criminal Justice', 'Behavioral Economics', 'International Affairs', 'Public Policy', 'Law & Society'];
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
            return activeCategory === 'All' || a.category === activeCategory;
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
});
