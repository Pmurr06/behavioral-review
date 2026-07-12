/* ============================================
   Article Data — single source of truth
   Add new articles at the top of this array
   to make them the newest publication.
   ============================================ */
var ARTICLES = [
    {
        title: 'Hidden Costs of Global Seafood: Child and Migrant Labor in Thailand\u2019s Shrimp Industry',
        author: 'Ella Roehl',
        major: 'Human Physiology',
        institution: 'University of Iowa',
        categories: ['Global Affairs', 'Human Rights & International Development'],
        displayCategory: 'Global Affairs',
        date: 'July 2026',
        readingWordCount: 1500,
        preview: 'Ella Roehl examines how rising global demand for shrimp has contributed to labor exploitation in Thailand\u2019s seafood industry, exploring the relationship between international consumer demand, migrant labor from Myanmar, and workplace conditions that have raised concerns about child labor and forced labor within portions of the supply chain.',
        link: 'articles/hidden-costs-global-seafood-child-migrant-labor-thailand-shrimp-industry.html'
    },
    {
        title: 'Navigating the Labyrinth of Gender, Race, and Economic Inequality: A Sociological Perspective',
        author: 'Ella Roehl',
        major: 'Human Physiology',
        institution: 'University of Iowa',
        categories: ['Sociology'],
        date: 'July 2026',
        readingWordCount: 1496,
        preview: 'Ella Roehl examines how gender, race, and economic class shape social inequality, showing how institutions, historical patterns, and intersectionality influence opportunity, mobility, and everyday experience.',
        link: 'articles/navigating-labyrinth-gender-race-economic-inequality-sociological-perspective.html'
    },
    {
        title: 'Artificial Intelligence and Public Perception: A Rhetorical Analysis of Competing Perspectives',
        author: 'Ella Roehl and Christine Byrne',
        authorNames: ['Ella Roehl', 'Christine Byrne'],
        institution: 'University of Iowa',
        categories: ['Public Policy'],
        date: 'July 2026',
        readingWordCount: 1954,
        preview: 'Ella Roehl and Christine Byrne examine how three sources\u2014the Inventiv Foundation, The New York Times, and Liberties\u2014use contrasting rhetorical strategies to frame artificial intelligence as an engine of innovation, a policy challenge requiring regulation, or a societal threat demanding immediate attention.',
        link: 'articles/artificial-intelligence-public-perception-rhetorical-analysis.html'
    },
    {
        title: 'Grieving Before Goodbye: Dementia, Anticipatory Loss, and the Anthropology of Mourning',
        author: 'Alexandra Quist',
        major: 'Anthropology',
        institution: 'University of Washington',
        categories: ['Anthropology'],
        date: 'July 2026',
        readingWordCount: 1643,
        preview: 'This anthropology article examines dementia-related grief through anticipatory grief, disenfranchised grief, the work of mourning, intersubjectivity, and grievability, arguing that dementia transforms mourning into a prolonged and socially unrecognized process that begins long before physical death.',
        link: 'articles/grieving-before-goodbye-dementia-anthropology-of-mourning.html'
    },
    {
        title: 'Beyond Death: Necropower, Colonialism, and the Unmarked Graves of Indigenous Children in Canada',
        author: 'Alexandra Quist',
        major: 'Anthropology',
        institution: 'University of Washington',
        categories: ['Anthropology'],
        date: 'July 2026',
        readingWordCount: 1733,
        preview: 'This anthropology article examines Canada\'s residential school graves through necropower, necroviolence, dehumanization, and disrupted grief, arguing that the burial sites remain enduring symbols of colonial erasure and structural violence.',
        link: 'articles/necropower-colonialism-unmarked-graves-indigenous-children-canada.html'
    },
    {
        title: 'Financial Barriers and Clinical Judgment in the United States Healthcare System',
        author: 'Alexandra Quist',
        institution: 'University of Washington',
        categories: ['Public Policy'],
        date: 'July 2026',
        readingWordCount: 2222,
        preview: 'This qualitative study examines how insurance limitations, medical costs, and healthcare system policies shape clinical judgment, patient decision-making, and access to medically appropriate care within the United States healthcare system.',
        link: 'articles/financial-barriers-clinical-judgment-us-healthcare.html'
    },
    {
        title: 'Reconsidering Christopher McCandless: Autonomy, Critical Thinking, and the Philosophy of Into the Wild',
        author: 'Alexandra Quist',
        major: 'Anthropology',
        institution: 'University of Washington',
        categories: ['Behavioral Science'],
        displayCategory: 'Behavioral Science',
        date: 'July 2026',
        readingTime: '8 min read',
        preview: 'Christopher McCandless is often dismissed as reckless or na\u00efve, yet his story reveals a deliberate effort to live according to carefully examined convictions. Drawing on Lewis Vaughn\u2019s The Power of Critical Thinking, this article argues that McCandless exercised intellectual autonomy and philosophical reasoning\u2014not impulsive idealism\u2014in choosing his unconventional path.',
        link: 'articles/reconsidering-christopher-mccandless.html'
    },
    {
        title: 'Moneyball and Market Inefficiency: How the Oakland Athletics Revolutionized Data-Driven Decision Making',
        author: 'Jackson Pincock',
        major: 'Business',
        institution: 'University of Utah',
        categories: ['Business & Economics', 'Business', 'Economics'],
        displayCategory: 'Business & Economics',
        date: '2026',
        readingTime: '10 min read',
        preview: 'The Oakland Athletics transformed professional baseball by using statistical analysis to identify market inefficiencies and make evidence-based personnel decisions. This article examines Moneyball as a business case study in analytics, organizational strategy, and competitive advantage.',
        link: 'articles/moneyball-market-inefficiency.html'
    },
    {
        title: 'Implicit Personality Theory and Moral Development in War and Peace',
        author: 'Alan Ta',
        major: 'Honors Finance and Business Analytics',
        institution: 'Indiana University Kelley School of Business',
        categories: ['Psychology'],
        date: 'July 2026',
        readingTime: '14 min read',
        preview: 'Leo Tolstoy\'s War and Peace offers a literary framework for examining implicit personality theory\u2014the cognitive tendency to infer stable character traits from minimal evidence. Through the moral development of Pierre Bezukhov and Natasha Rostova, Tolstoy systematically dismantles the superficial judgments of aristocratic society, demonstrating that authentic character emerges through sacrifice, compassion, and sustained moral growth.',
        link: 'articles/implicit-personality-theory-war-and-peace.html'
    },
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
        role: 'Managing & Behavioral Science Editor',
        credentials: 'U.S. Marine | Psychology Student, Penn State World Campus',
        institution: 'Penn State World Campus',
        bio: 'Psychology student at Penn State, active-duty Marine Corps Meteorology and Oceanography specialist, and Crisis Text Line volunteer.',
        imagePath: 'paulomurray.jpeg',
        imageAlt: 'Paulo Murray, Managing and Behavioral Science Editor of The Behavioral Review'
    },
    {
        name: 'Carson Wais',
        role: 'Business & Economics Editor',
        credentials: 'Business Finance Student, Washington State University',
        institution: 'Washington State University',
        bio: 'Business Finance student at Washington State University, VITA and TCE certified, and co-founder of Asnowco LLC.',
        imagePath: 'CarsonWais.JPG',
        imageAlt: 'Carson Wais, Business and Economics Editor of The Behavioral Review'
    },
    {
        name: 'Nathan Isbell',
        role: 'Copy & Layout Editor',
        credentials: 'U.S. Marine | Writing Student, UMGC',
        institution: 'UMGC',
        bio: 'Marine Corps Intelligence Specialist and Writing student at UMGC with experience in data analysis and technical reports.',
        imagePath: 'nathanisbell.jpeg',
        imageAlt: 'Nathan Isbell, Copy and Layout Editor of The Behavioral Review'
    },
    {
        name: 'Brandon Nobrega',
        role: 'Design & Marketing Editor',
        credentials: 'U.S. Air Force Aviation Meteorologist',
        institution: '',
        bio: 'U.S. Air Force aviation meteorologist supporting Army rotary-wing aircraft operations and managing TBR\'s social media.',
        imagePath: 'Brandonnobrega.jpeg',
        imageAlt: 'Brandon Nobrega, Design and Marketing Editor of The Behavioral Review'
    }
];

var SITE_SETTINGS = {
    averageReviewTime: '2–4 weeks'
};

var FALLBACK_EDITOR_IMAGE = 'TBR.png';

function formatAuthorInstitution(major, institution) {
    var normalizedInstitution = (institution || '').trim();
    if (!major) return normalizedInstitution;
    if (!normalizedInstitution) return major + ' student';
    var startsUniversityOf = /^university of/i.test(normalizedInstitution);
    var startsWithTheUniversityOf = /^the\s+university of/i.test(normalizedInstitution);
    var needsArticle = startsUniversityOf && !startsWithTheUniversityOf;
    return major + ' student at ' + (needsArticle ? 'the ' : '') + normalizedInstitution;
}

function getArticleReadingTime(article) {
    if (article && article.readingWordCount) {
        return Math.max(1, Math.ceil(article.readingWordCount / 200)) + ' min read';
    }
    return article && article.readingTime ? article.readingTime : '';
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

function getArticleCategories(article) {
    return Array.isArray(article && article.categories)
        ? article.categories
        : (article && article.category ? [article.category] : []);
}

function normalizeKey(value) {
    return (value || '').trim().replace(/\s+/g, ' ').toLowerCase();
}

function getInstitutionStatsKey(institution) {
    var normalized = normalizeKey(institution);
    if (!normalized) return '';

    if (/^(the\s+)?university of washington(\s|$)/.test(normalized)) {
        return 'university of washington';
    }

    return normalized;
}

function getEditorImageData(editor) {
    var imagePath = editor.imagePath || FALLBACK_EDITOR_IMAGE;
    var imageAlt = editor.imageAlt;
    if (!imageAlt) {
        imageAlt = editor.name
            ? editor.name + ', editor at The Behavioral Review'
            : 'The Behavioral Review editor';
    }
    return {
        imagePath: imagePath,
        imageAlt: imageAlt
    };
}

function computeHomepageStats() {
    var uniqueAuthors = {};
    var uniqueInstitutions = {};

    ARTICLES.forEach(function (article) {
        var authorData = getArticleAuthorData(article);
        var institutionKey = getInstitutionStatsKey(authorData.institutionRaw);

        if (Array.isArray(article.authorNames)) {
            article.authorNames.forEach(function (name) {
                var key = normalizeKey(name);
                if (key) uniqueAuthors[key] = true;
            });
        } else {
            var authorKey = article.authorId || normalizeKey(authorData.name);
            if (authorKey) uniqueAuthors[authorKey] = true;
        }

        if (institutionKey) uniqueInstitutions[institutionKey] = true;
    });

    EDITORIAL_TEAM.forEach(function (editor) {
        var institutionKey = getInstitutionStatsKey(editor.institution);
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

function initHomepageFeaturedEditors() {
    var editorsEl = document.querySelector('[data-home-featured-editors]');
    if (!editorsEl) return;

    var siteRoot = getSiteRoot();
    editorsEl.innerHTML = '';

    EDITORIAL_TEAM.forEach(function (editor) {
        var imageData = getEditorImageData(editor);
        var card = document.createElement('div');
        card.className = 'editor-card';

        var headshot = document.createElement('div');
        headshot.className = 'editor-headshot';

        var image = document.createElement('img');
        image.src = siteRoot + imageData.imagePath;
        image.alt = imageData.imageAlt;
        image.onerror = function () {
            if (this.dataset.fallbackApplied === 'true') return;
            this.dataset.fallbackApplied = 'true';
            this.src = siteRoot + FALLBACK_EDITOR_IMAGE;
            this.alt = 'The Behavioral Review logo';
        };
        headshot.appendChild(image);

        var info = document.createElement('div');
        info.className = 'editor-info';

        var name = document.createElement('h3');
        name.textContent = editor.name;

        var role = document.createElement('p');
        role.className = 'editor-title';
        role.textContent = editor.role;

        info.appendChild(name);
        info.appendChild(role);

        card.appendChild(headshot);
        card.appendChild(info);
        editorsEl.appendChild(card);
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
        var imageData = getEditorImageData(editor);
        var card = document.createElement('div');
        card.className = 'editor-card';

        var headshot = document.createElement('div');
        headshot.className = 'editor-headshot';

        var image = document.createElement('img');
        image.src = siteRoot + imageData.imagePath;
        image.alt = imageData.imageAlt;
        image.onerror = function () {
            if (this.dataset.fallbackApplied === 'true') return;
            this.dataset.fallbackApplied = 'true';
            this.src = siteRoot + FALLBACK_EDITOR_IMAGE;
            this.alt = 'The Behavioral Review logo';
        };
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
    var articleCategories = getArticleCategories(article);
    var displayCategory = article.displayCategory || articleCategories.join(' • ');
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

    [authorData.institution, article.date, getArticleReadingTime(article)].forEach(function (text) {
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

    var categories = ['All', 'Anthropology', 'Behavioral Science', 'Psychology', 'Sociology', 'Criminal Justice', 'Economics', 'Business & Economics', 'Global Affairs', 'International Affairs', 'Public Policy', 'Law & Society', 'Business', 'Organizational Behavior'];
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
            var articleCategories = getArticleCategories(a);
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

function initHomepageLatestArticle() {
    var feedEl = document.getElementById('homepage-latest-feed');
    if (!feedEl || ARTICLES.length === 0) return;
    feedEl.appendChild(buildArticleCard(ARTICLES[0]));
}

function initCategoryPage() {
    var feeds = document.querySelectorAll('[data-category-feed]');
    if (!feeds.length) return;

    feeds.forEach(function (feedEl) {
        var category = feedEl.getAttribute('data-category-feed');
        if (!category) return;

        var filtered = ARTICLES.filter(function (article) {
            var articleCategories = getArticleCategories(article);
            return articleCategories.indexOf(category) !== -1;
        });

        feedEl.innerHTML = '';
        if (filtered.length === 0) {
            var empty = document.createElement('p');
            empty.className = 'archive-empty';
            empty.textContent = 'No articles in this category yet.';
            feedEl.appendChild(empty);
            return;
        }

        filtered.forEach(function (article) {
            feedEl.appendChild(buildArticleCard(article));
        });
    });
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

    var article = getCurrentArticle();
    if (!article) return;

    var authorData = getArticleAuthorData(article);
    if (affiliation.getAttribute('data-static-affiliation') !== 'true') {
        affiliation.textContent = authorData.institution;
    }

    var readingTime = document.querySelector('[data-reading-time]');
    if (readingTime) {
        readingTime.textContent = getArticleReadingTime(article);
    }
}

function getCurrentArticle() {
    var hero = document.querySelector('.article-hero');
    if (!hero) return null;

    var explicitLink = hero.getAttribute('data-article-link');
    var currentFile = window.location.pathname.split('/').pop();
    if (!currentFile) return null;

    return ARTICLES.find(function (entry) {
        if (!entry.link) return false;
        if (explicitLink) return entry.link === explicitLink;
        var linkFile = entry.link.split('/').pop();
        return !!linkFile && linkFile === currentFile;
    }) || null;
}

function initRelatedArticles() {
    var feedEl = document.querySelector('[data-related-articles]');
    if (!feedEl) return;

    var currentArticle = getCurrentArticle();
    if (!currentArticle) return;

    var currentCategories = getArticleCategories(currentArticle);
    var limit = parseInt(feedEl.getAttribute('data-related-articles'), 10) || 3;
    var related = ARTICLES.filter(function (article) {
        return article.link !== currentArticle.link;
    }).sort(function (a, b) {
        var aCategories = getArticleCategories(a);
        var bCategories = getArticleCategories(b);
        var aShared = aCategories.filter(function (category) {
            return currentCategories.indexOf(category) !== -1;
        }).length;
        var bShared = bCategories.filter(function (category) {
            return currentCategories.indexOf(category) !== -1;
        }).length;

        if (aShared !== bShared) return bShared - aShared;
        return ARTICLES.indexOf(a) - ARTICLES.indexOf(b);
    }).slice(0, limit);

    feedEl.innerHTML = '';
    related.forEach(function (article) {
        feedEl.appendChild(buildArticleCard(article));
    });
}

function buildArticlePaginationLink(label, article) {
    if (!article) return null;

    var link = document.createElement('a');
    link.className = 'article-pagination__link';
    link.href = '../' + article.link;

    var eyebrow = document.createElement('span');
    eyebrow.className = 'article-pagination__eyebrow';
    eyebrow.textContent = label;

    var title = document.createElement('span');
    title.className = 'article-pagination__title';
    title.textContent = article.title;

    link.appendChild(eyebrow);
    link.appendChild(title);
    return link;
}

function initArticlePagination() {
    var navEl = document.querySelector('[data-article-pagination]');
    if (!navEl) return;

    var currentArticle = getCurrentArticle();
    if (!currentArticle) return;

    var currentIndex = ARTICLES.findIndex(function (article) {
        return article.link === currentArticle.link;
    });
    if (currentIndex === -1) return;

    var previousArticle = currentIndex > 0 ? ARTICLES[currentIndex - 1] : null;
    var nextArticle = currentIndex < ARTICLES.length - 1 ? ARTICLES[currentIndex + 1] : null;

    navEl.innerHTML = '';

    var previousLink = buildArticlePaginationLink('Previous Article', previousArticle);
    var nextLink = buildArticlePaginationLink('Next Article', nextArticle);

    if (previousLink) navEl.appendChild(previousLink);
    if (nextLink) navEl.appendChild(nextLink);

    if (!navEl.children.length) {
        navEl.remove();
    }
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
    initHomepageLatestArticle();
    initCategoryPage();
    initAuthorProfilePage();
    initArticlePageMetadata();
    initRelatedArticles();
    initArticlePagination();
    initHomepageStats();
    initHomepageFeaturedEditors();
    initEditorialTeamPage();
});
