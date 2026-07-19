/* ============================================
   Article Data — single source of truth
   Add new articles at the top of this array
   to make them the newest publication.
   ============================================ */
var ARTICLES = [
    {
        title: 'Revenue Recognition in the Airline Industry: A Case Study of Delta Air Lines',
        authorId: 'luke-marshall',
        author: 'Luke Marshall',
        major: 'Finance',
        institution: 'University of Oregon',
        categories: ['Economics & Business'],
        displayCategory: 'Business & Economics',
        tags: ['Revenue Recognition', 'Airline Industry', 'Delta Air Lines', 'ASC 606', 'Accounting', 'Finance', 'SkyMiles', 'Deferred Revenue', 'Financial Reporting', 'Business & Economics'],
        date: 'July 2026',
        readingWordCount: 2200,
        preview: 'Luke Marshall examines how Delta Air Lines applies ASC 606 to passenger ticket sales, its SkyMiles loyalty program, and ancillary services, explaining how deferred revenue balances and management estimates shape reported financial results and investor analysis.',
        link: 'articles/revenue-recognition-airline-industry-delta-air-lines.html'
    },
    {
        title: 'When Goodwill Disappears: Lessons from Coty\'s $3.9 Billion Impairment',
        authorId: 'luke-marshall',
        author: 'Luke Marshall',
        major: 'Finance',
        institution: 'University of Oregon',
        categories: ['Economics & Business'],
        displayCategory: 'Business & Economics',
        tags: ['Finance', 'Accounting', 'Corporate Finance', 'Business & Economics', 'Financial Reporting', 'Goodwill', 'Goodwill Impairment', 'Mergers & Acquisitions', 'SEC Filings', 'Financial Statement Analysis', 'Corporate Valuation', 'Investor Analysis'],
        date: 'July 2026',
        readingWordCount: 2350,
        preview: 'Luke Marshall examines Coty Inc.\'s 2019 $3.85 billion goodwill impairment to explain GAAP recognition, valuation assumptions, and why impairment disclosures matter for investor analysis of acquisition performance.',
        link: 'articles/when-goodwill-disappears-lessons-from-cotys-3-9-billion-impairment.html'
    },
    {
        title: 'The Renormalization of Smoking Among Generation Z',
        authorId: 'ryan-trudeau',
        author: 'Ryan Trudeau',
        major: 'Public Health',
        institution: 'University of Utah',
        categories: ['Public Health'],
        displayCategory: 'Public Health',
        tags: ['Smoking', 'Generation Z', 'Tobacco', 'Public Health', 'Social Media', 'Nicotine', 'Youth Health', 'Health Policy', 'Substance Use', 'Behavioral Health'],
        date: 'July 2026',
        readingWordCount: 2400,
        preview: 'Ryan Trudeau examines how smoking is being renormalized among Generation Z through social media aesthetics, industry marketing strategies, and the youth mental health crisis, reversing decades of public health progress and demanding updated prevention approaches.',
        link: 'articles/the-renormalization-of-smoking-among-generation-z.html'
    },
    {
        title: 'Obstetric Paternalism in Italy: Autonomy, Medicalization, and the Ethics of Childbirth',
        authorId: 'ryan-trudeau',
        author: 'Ryan Trudeau',
        major: 'Public Health',
        institution: 'University of Utah',
        categories: ['Public Health'],
        displayCategory: 'Public Health',
        tags: ['Bioethics', 'Medical Ethics', 'Patient Autonomy', "Women's Health", 'Obstetric Violence', 'Human Rights', 'Italy', 'Childbirth', 'Health Humanities', 'Public Health'],
        date: 'July 2026',
        readingWordCount: 1800,
        preview: 'Ryan Trudeau examines obstetric paternalism in Italy through the case of Alessandra Battisti, analyzing the ethical conflict between patient autonomy and medical beneficence and evaluating the deontological implications of informed consent during childbirth.',
        link: 'articles/obstetric-paternalism-in-italy-autonomy-medicalization-and-the-ethics-of-childbirth.html'
    },
    {
        title: 'Food Insecurity and Academic Performance Among College Students',
        authorId: 'ryan-trudeau',
        author: 'Ryan Trudeau',
        major: 'Public Health',
        institution: 'University of Utah',
        categories: ['Public Health'],
        displayCategory: 'Public Health',
        tags: ['Food Insecurity', 'Public Health', 'Higher Education', 'College Students', 'Mental Health', 'Academic Performance', 'Nutrition', 'Health Policy', 'Research Methods', 'Social Determinants of Health'],
        date: 'July 2026',
        readingWordCount: 2200,
        preview: 'Ryan Trudeau proposes a longitudinal cohort study examining how food insecurity affects psychosocial health—including depression, anxiety, and hope—and whether those effects contribute to lower academic performance among undergraduate students at the University of Utah.',
        link: 'articles/food-insecurity-and-academic-performance-among-college-students.html'
    },
    {
        title: 'The Effect of Cannabis on Schizophrenia Diagnoses',
        authorId: 'ryan-trudeau',
        author: 'Ryan Trudeau',
        major: 'Public Health',
        institution: 'University of Utah',
        categories: ['Public Health'],
        displayCategory: 'Public Health',
        tags: ['Cannabis', 'Mental Health', 'Schizophrenia', 'Substance Use', 'Public Health', 'Public Policy'],
        date: 'July 2026',
        readingWordCount: 2895,
        preview: 'Ryan Trudeau examines how high-potency cannabis products such as dab pens may intensify cannabis-induced psychosis and accelerate schizophrenia onset in genetically vulnerable users.',
        link: 'articles/the-effect-of-cannabis-on-schizophrenia-diagnoses.html'
    },
    {
        title: 'What Common Habits Do Interrogators Examine, and What Strategies Do They Employ to Determine if a Suspect Is Guilty?',
        author: 'Katie Nguyen',
        major: 'Health Sciences',
        institution: 'University of South Florida',
        categories: ['Law & Criminal Justice'],
        displayCategory: 'Law & Criminal Justice',
        tags: ['Criminal Investigations', 'Interrogation', 'Deception Detection', 'Forensic Psychology', 'Investigative Psychology', 'Body Language'],
        date: 'July 2026',
        readingWordCount: 1500,
        preview: 'Katie Nguyen examines how interrogators assess behavioral patterns, speech cues, and interview inconsistencies in high-profile cases while emphasizing that no single cue can independently prove guilt.',
        link: 'articles/what-common-habits-interrogators-examine-strategies-determine-guilty.html'
    },
    {
        title: 'Persuasive Commentary: Futility Laws on Infants and the Case of Tinslee Lewis',
        author: 'Katie Nguyen',
        major: 'Health Sciences',
        institution: 'University of South Florida',
        categories: ['Public Policy'],
        displayCategory: 'Public Policy',
        tags: ['Bioethics', 'Healthcare Policy', 'Medical Ethics', 'Pediatric Care', 'End-of-Life Care', 'Parental Rights'],
        date: 'July 2026',
        readingWordCount: 1450,
        preview: 'Katie Nguyen examines the ethical conflict between parental rights and physician authority in the Tinslee Lewis case, arguing for a collaborative approach to life-sustaining treatment decisions that centers the child\'s best interests.',
        link: 'articles/persuasive-commentary-futility-laws-infants-tinslee-lewis.html'
    },
    {
        title: 'Religious Racialization and the Yazidi Genocide: Examining ISIS\'s Campaign of Persecution',
        author: 'Ella Roehl',
        major: 'Human Physiology',
        institution: 'University of Iowa',
        categories: ['Global & International Affairs'],
        displayCategory: 'Global & International Affairs',
        tags: ['Human Rights', 'Genocide', 'Iraq', 'ISIS', 'Religious Conflict', 'Middle East'],
        date: 'July 2026',
        readingWordCount: 1500,
        preview: 'Ella Roehl examines how ISIS used religious racialization to frame the Yazidi people as an illegitimate target, analyzing the ideological foundations, historical marginalization, and lasting consequences of the 2014 genocide in Sinjar.',
        link: 'articles/religious-racialization-yazidi-genocide-isis-campaign-persecution.html'
    },
    {
        title: 'Hidden Costs of Global Seafood: Child and Migrant Labor in Thailand\u2019s Shrimp Industry',
        author: 'Ella Roehl',
        major: 'Human Physiology',
        institution: 'University of Iowa',
        categories: ['Global & International Affairs'],
        displayCategory: 'Global & International Affairs',
        tags: ['Human Rights', 'International Development', 'Labor', 'Migration'],
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
        categories: ['Sociology & Anthropology'],
        displayCategory: 'Sociology & Anthropology',
        tags: ['Gender', 'Race', 'Social Inequality'],
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
        displayCategory: 'Public Policy',
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
        categories: ['Sociology & Anthropology'],
        displayCategory: 'Sociology & Anthropology',
        tags: ['Anthropology'],
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
        categories: ['Sociology & Anthropology'],
        displayCategory: 'Sociology & Anthropology',
        tags: ['Anthropology'],
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
        displayCategory: 'Public Policy',
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
        categories: ['Economics & Business'],
        displayCategory: 'Economics & Business',
        tags: ['Finance', 'Leadership'],
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
        displayCategory: 'Psychology',
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
        categories: ['Economics & Business'],
        displayCategory: 'Economics & Business',
        tags: ['Organizational Behavior'],
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
        categories: ['Law & Criminal Justice'],
        displayCategory: 'Law & Criminal Justice',
        tags: ['Law and Society'],
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
        categories: ['Economics & Business'],
        displayCategory: 'Economics & Business',
        tags: ['Finance'],
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
        categories: ['Public Policy', 'Economics & Business'],
        displayCategory: 'Public Policy',
        tags: ['Finance'],
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
        categories: ['Economics & Business'],
        displayCategory: 'Economics & Business',
        tags: ['Finance'],
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
        categories: ['Law & Criminal Justice'],
        displayCategory: 'Law & Criminal Justice',
        tags: ['Law and Society'],
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
        categories: ['Law & Criminal Justice'],
        displayCategory: 'Law & Criminal Justice',
        tags: ['Law and Society'],
        date: 'July 2026',
        readingTime: '9\u201310 min read',
        preview: 'The debate over plastic and paper drinking straws has become a public symbol of the broader challenge of reducing single-use plastics. This editorial examines consumer behavior, environmental policy, corporate responsibility, and why incremental changes can still matter in long-term sustainability efforts.',
        link: 'articles/beyond-the-straw.html'
    },
    {
        title: 'Forex Exchange Markets: The Euro-Dollar Relationship in the Post-COVID Era',
        authorId: 'miller-smith',
        author: 'Miller Smith',
        major: 'Finance & Marketing',
        institution: 'University of Washington Foster School of Business',
        categories: ['Global & International Affairs'],
        displayCategory: 'Global & International Affairs',
        tags: ['Finance'],
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
/* Raw institution labels are normalized during lookup so aliases stay case-insensitive and whitespace-safe. */
var UNIVERSITY_ALIASES = {
    'indiana university kelley school of business': 'Indiana University',
    'university of washington foster school of business': 'University of Washington',
    'university of iowa tippie college of business': 'University of Iowa',
    'penn state world campus': 'Penn State University',
    'university of florida college of health and human performance': 'University of Florida',
    'washington state university carson college of business': 'Washington State University'
};

function normalizeUniversityName(institution) {
    var cleaned = (institution || '').trim().replace(/\s+/g, ' ');
    if (!cleaned) return '';
    return UNIVERSITY_ALIASES[normalizeKey(cleaned)] || cleaned;
}

function formatAuthorInstitution(major, institution, options) {
    var normalizedInstitution = options && options.normalizeUniversity
        ? normalizeUniversityName(institution)
        : (institution || '').trim();
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
    var normalizedUniversity = normalizeUniversityName(institution);

    return {
        id: article.authorId || '',
        name: profile ? profile.name : article.author,
        major: major || '',
        institutionRaw: institution || '',
        normalizedUniversity: normalizedUniversity,
        institution: formatAuthorInstitution(major, institution),
        archiveInstitution: formatAuthorInstitution(major, institution, { normalizeUniversity: true }),
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
    return normalizeKey(normalizeUniversityName(institution));
}

function isDefaultArchiveState(state, defaultState) {
    return state.query.trim() === defaultState.query
        && state.tag === defaultState.tag
        && state.category === defaultState.category
        && state.sort === defaultState.sort
        && state.university === defaultState.university
        && state.author === defaultState.author;
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

function getArticleHref(articleLink) {
    if (!articleLink) return '';
    if (/^(https?:)?\/\//i.test(articleLink) || articleLink.charAt(0) === '/') {
        return articleLink;
    }
    return getSiteRoot() + articleLink;
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
    var displayCategory = article.displayCategory || articleCategories[0] || articleCategories.join(' \u2022 ');
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

    [authorData.archiveInstitution, article.date, getArticleReadingTime(article)].forEach(function (text) {
        if (!text) return;
        var span = document.createElement('span');
        span.textContent = text;
        meta.appendChild(span);
    });

    var preview = document.createElement('p');
    preview.textContent = article.preview;

    var btn = document.createElement('a');
    btn.href = getArticleHref(article.link);
    btn.className = 'btn btn-primary';
    btn.textContent = 'Read Article';

    card.appendChild(pill);
    card.appendChild(heading);
    card.appendChild(meta);

    if (Array.isArray(article.tags) && article.tags.length > 0) {
        var tagsEl = document.createElement('div');
        tagsEl.className = 'article-tags';
        article.tags.forEach(function (tag) {
            var tagSpan = document.createElement('span');
            tagSpan.className = 'article-tag';
            tagSpan.textContent = tag;
            tagsEl.appendChild(tagSpan);
        });
        card.appendChild(tagsEl);
    }

    card.appendChild(preview);
    card.appendChild(btn);

    return card;
}

/* Build an archive article card with clickable tag buttons */
function buildArchiveCard(article, onTagClick) {
    var authorData = getArticleAuthorData(article);
    var articleCategories = getArticleCategories(article);
    var displayCategory = article.displayCategory || articleCategories[0] || '';

    var card = document.createElement('article');
    card.className = 'publication-card';
    card.setAttribute('data-category', displayCategory);

    var pill = document.createElement('span');
    pill.className = 'article-category-pill';
    pill.textContent = displayCategory;
    card.appendChild(pill);

    var heading = document.createElement('h3');
    heading.textContent = article.title;
    card.appendChild(heading);

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

    [authorData.archiveInstitution, article.date, getArticleReadingTime(article)].forEach(function (text) {
        if (!text) return;
        var span = document.createElement('span');
        span.textContent = text;
        meta.appendChild(span);
    });
    card.appendChild(meta);

    if (Array.isArray(article.tags) && article.tags.length > 0) {
        var tagsEl = document.createElement('div');
        tagsEl.className = 'article-tags';
        article.tags.forEach(function (tag) {
            var tagBtn = document.createElement('button');
            tagBtn.type = 'button';
            tagBtn.className = 'article-tag archive-tag-btn';
            tagBtn.textContent = tag;
            tagBtn.setAttribute('aria-label', 'Filter by tag: ' + tag);
            tagBtn.addEventListener('click', function (e) {
                e.preventDefault();
                if (typeof onTagClick === 'function') onTagClick(tag);
            });
            tagsEl.appendChild(tagBtn);
        });
        card.appendChild(tagsEl);
    }

    var preview = document.createElement('p');
    preview.textContent = article.preview;
    card.appendChild(preview);

    var btn = document.createElement('a');
    btn.href = getArticleHref(article.link);
    btn.className = 'btn btn-primary';
    btn.textContent = 'Read Article';
    card.appendChild(btn);

    return card;
}

/* Archive page — search, filter, sort, and stats */
function initArchivePage() {
    var filtersEl = document.getElementById('archive-filters');
    var feedEl = document.getElementById('archive-feed');
    if (!filtersEl || !feedEl) return;

    var searchInput    = document.getElementById('archive-search');
    var sortSelect     = document.getElementById('archive-sort');
    var uniSelect      = document.getElementById('archive-university');
    var authorSelect   = document.getElementById('archive-author');
    var clearButton    = document.getElementById('archive-clear-filters');
    var resultsCountEl = document.getElementById('archive-results-count');
    var featuredSection = document.getElementById('archive-featured');
    var featuredFeed   = document.getElementById('archive-featured-feed');

    /* Filter / search state */
    var defaultState = {
        query: '',
        tag: '',
        category: 'All',
        sort: 'newest',
        university: 'all',
        author: 'all'
    };
    var state = {
        query: defaultState.query,
        tag: defaultState.tag,
        category: defaultState.category,
        sort: defaultState.sort,
        university: defaultState.university,
        author: defaultState.author
    };

    /* ── Archive statistics ── */
    (function initStats() {
        var uniqueAuthors      = {};
        var uniqueInstitutions = {};
        var uniqueDisciplines  = {};

        ARTICLES.forEach(function (a) {
            var authorData       = getArticleAuthorData(a);
            var institutionKey   = getInstitutionStatsKey(authorData.institutionRaw);

            if (Array.isArray(a.authorNames)) {
                a.authorNames.forEach(function (name) {
                    var key = normalizeKey(name);
                    if (key) uniqueAuthors[key] = true;
                });
            } else {
                var authorKey = a.authorId || normalizeKey(authorData.name);
                if (authorKey) uniqueAuthors[authorKey] = true;
            }

            if (institutionKey) uniqueInstitutions[institutionKey] = true;

            getArticleCategories(a).forEach(function (cat) {
                var key = normalizeKey(cat);
                if (key) uniqueDisciplines[key] = true;
            });
        });

        var elArticles     = document.getElementById('archive-stat-articles');
        var elAuthors      = document.getElementById('archive-stat-authors');
        var elUniversities = document.getElementById('archive-stat-universities');
        var elDisciplines  = document.getElementById('archive-stat-disciplines');

        if (elArticles)     elArticles.textContent     = ARTICLES.length;
        if (elAuthors)      elAuthors.textContent      = Object.keys(uniqueAuthors).length;
        if (elUniversities) elUniversities.textContent = Object.keys(uniqueInstitutions).length;
        if (elDisciplines)  elDisciplines.textContent  = Object.keys(uniqueDisciplines).length;
    }());

    /* ── Editor's Picks ── */
    (function initFeatured() {
        if (!featuredSection || !featuredFeed) return;
        var featured = ARTICLES.filter(function (a) { return a.featured === true; });
        if (featured.length === 0) return;
        featuredSection.removeAttribute('hidden');
        featured.forEach(function (a) {
            featuredFeed.appendChild(buildArchiveCard(a, setTagFilter));
        });
    }());

    /* ── Populate university and author dropdowns ── */
    (function initDropdowns() {
        var universities = [];
        var authors      = [];
        var uniSeen      = {};
        var authorSeen   = {};

        ARTICLES.forEach(function (a) {
            var normalizedUniversity = getArticleAuthorData(a).normalizedUniversity;
            var universityKey = normalizeKey(normalizedUniversity);
            if (normalizedUniversity && !uniSeen[universityKey]) {
                uniSeen[universityKey] = true;
                universities.push(normalizedUniversity);
            }

            if (Array.isArray(a.authorNames)) {
                a.authorNames.forEach(function (name) {
                    var trimmed = name.trim();
                    if (trimmed && !authorSeen[trimmed]) {
                        authorSeen[trimmed] = true;
                        authors.push(trimmed);
                    }
                });
            } else {
                var authorName = getArticleAuthorData(a).name;
                if (authorName && !authorSeen[authorName]) {
                    authorSeen[authorName] = true;
                    authors.push(authorName);
                }
            }
        });

        universities.sort(function (a, b) {
            return a.localeCompare(b, undefined, { sensitivity: 'base' });
        }).forEach(function (uni) {
            var opt = document.createElement('option');
            opt.value = uni;
            opt.textContent = uni;
            if (uniSelect) uniSelect.appendChild(opt);
        });

        authors.sort().forEach(function (name) {
            var opt = document.createElement('option');
            opt.value = name;
            opt.textContent = name;
            if (authorSelect) authorSelect.appendChild(opt);
        });
    }());

    /* ── Category filter pills ── */
    var categories = ['All', 'Behavioral Science', 'Psychology', 'Sociology & Anthropology', 'Law & Criminal Justice', 'Economics & Business', 'Global & International Affairs', 'Public Policy', 'Public Health'];
    categories.forEach(function (cat) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'filter-btn' + (cat === 'All' ? ' filter-btn--active' : '');
        btn.textContent = cat;
        btn.setAttribute('data-filter', cat);
        btn.addEventListener('click', function () {
            state.category = cat;
            state.tag = '';
            filtersEl.querySelectorAll('.filter-btn').forEach(function (b) {
                b.classList.toggle('filter-btn--active', b.getAttribute('data-filter') === cat);
            });
            renderFeed();
        });
        filtersEl.appendChild(btn);
    });

    /* ── Sort / university / author selects ── */
    if (sortSelect) {
        sortSelect.addEventListener('change', function () {
            state.sort = sortSelect.value;
            renderFeed();
        });
    }
    if (uniSelect) {
        uniSelect.addEventListener('change', function () {
            state.university = uniSelect.value;
            renderFeed();
        });
    }
    if (authorSelect) {
        authorSelect.addEventListener('change', function () {
            state.author = authorSelect.value;
            renderFeed();
        });
    }

    /* ── Search input ── */
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            state.query = searchInput.value;
            state.tag = '';
            renderFeed();
        });
    }

    if (clearButton) {
        clearButton.addEventListener('click', function () {
            state.query = defaultState.query;
            state.tag = defaultState.tag;
            state.category = defaultState.category;
            state.sort = defaultState.sort;
            state.university = defaultState.university;
            state.author = defaultState.author;

            if (searchInput) searchInput.value = '';
            if (sortSelect) sortSelect.value = defaultState.sort;
            if (uniSelect) uniSelect.value = defaultState.university;
            if (authorSelect) authorSelect.value = defaultState.author;

            filtersEl.querySelectorAll('.filter-btn').forEach(function (button) {
                button.classList.toggle('filter-btn--active', button.getAttribute('data-filter') === defaultState.category);
            });

            renderFeed();
        });
    }

    /* ── Tag filter (called when a tag badge is clicked) ── */
    function setTagFilter(tag) {
        state.tag   = tag;
        state.query = '';
        if (searchInput) searchInput.value = '';
        renderFeed();
    }

    /* ── Main render function ── */
    function renderFeed() {
        var queryLower = (state.tag || state.query || '').trim().toLowerCase();
        var hasActiveFilters = !isDefaultArchiveState(state, defaultState);

        var filtered = ARTICLES.filter(function (a) {
            var articleCategories = getArticleCategories(a);
            var authorData = getArticleAuthorData(a);

            /* Category */
            if (state.category !== 'All') {
                if (articleCategories.indexOf(state.category) === -1) return false;
            }

            /* University */
            if (state.university !== 'all') {
                if (authorData.normalizedUniversity !== state.university) return false;
            }

            /* Author */
            if (state.author !== 'all') {
                var authorMatch = false;
                if (Array.isArray(a.authorNames)) {
                    authorMatch = a.authorNames.some(function (n) { return n.trim() === state.author; });
                } else {
                    authorMatch = authorData.name === state.author;
                }
                if (!authorMatch) return false;
            }

            /* Search / tag */
            if (queryLower) {
                var tags     = Array.isArray(a.tags) ? a.tags : [];
                var tagsLow  = tags.map(function (t) { return t.toLowerCase(); });

                if (state.tag) {
                    /* Exact tag match */
                    return tagsLow.indexOf(queryLower) !== -1;
                }

                /* Broad text search */
                var searchText = [
                    a.title || '',
                    a.author || '',
                    Array.isArray(a.authorNames) ? a.authorNames.join(' ') : '',
                    authorData.name || '',
                    authorData.institutionRaw || '',
                    authorData.normalizedUniversity || '',
                    a.institution || '',
                    articleCategories.join(' '),
                    tags.join(' ')
                ].join(' ').toLowerCase();

                return searchText.indexOf(queryLower) !== -1;
            }

            return true;
        });

        /* Sort */
        var indexMap = {};
        ARTICLES.forEach(function (a, i) { indexMap[a.link] = i; });
        filtered = filtered.slice().sort(function (a, b) {
            if (state.sort === 'oldest') return indexMap[b.link] - indexMap[a.link];
            if (state.sort === 'az')     return (a.title || '').localeCompare(b.title || '');
            if (state.sort === 'za')     return (b.title || '').localeCompare(a.title || '');
            return indexMap[a.link] - indexMap[b.link]; /* newest (default) */
        });

        /* Results count */
        if (resultsCountEl) {
            resultsCountEl.textContent = 'Showing ' + filtered.length + ' of ' + ARTICLES.length + ' articles';
        }

        if (clearButton) {
            clearButton.disabled = !hasActiveFilters;
        }

        /* Render cards */
        feedEl.innerHTML = '';
        if (filtered.length === 0) {
            var empty = document.createElement('p');
            empty.className = 'archive-empty';
            empty.textContent = 'No articles found.';
            feedEl.appendChild(empty);
        } else {
            filtered.forEach(function (a) {
                feedEl.appendChild(buildArchiveCard(a, setTagFilter));
            });
        }
    }

    renderFeed();
}

window.normalizeUniversityName = normalizeUniversityName;

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

function initUniversityPage() {
    var feeds = document.querySelectorAll('[data-university-feed]');
    if (!feeds.length) return;

    feeds.forEach(function (feedEl) {
        var university = feedEl.getAttribute('data-university-feed');
        if (!university) return;

        var normalizedTarget = normalizeUniversityName(university);
        var filtered = ARTICLES.filter(function (article) {
            var authorData = getArticleAuthorData(article);
            return authorData.normalizedUniversity === normalizedTarget;
        });

        feedEl.innerHTML = '';
        if (filtered.length === 0) {
            var empty = document.createElement('p');
            empty.className = 'archive-empty';
            empty.textContent = 'No articles from this university yet.';
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
    var currentTags = Array.isArray(currentArticle.tags) ? currentArticle.tags : [];
    var limit = parseInt(feedEl.getAttribute('data-related-articles'), 10) || 3;
    var related = ARTICLES.filter(function (article) {
        return article.link !== currentArticle.link;
    }).sort(function (a, b) {
        var aCategories = getArticleCategories(a);
        var bCategories = getArticleCategories(b);
        var aTags = Array.isArray(a.tags) ? a.tags : [];
        var bTags = Array.isArray(b.tags) ? b.tags : [];
        var aShared = aCategories.filter(function (category) {
            return currentCategories.indexOf(category) !== -1;
        }).length;
        var bShared = bCategories.filter(function (category) {
            return currentCategories.indexOf(category) !== -1;
        }).length;
        var aTagShared = aTags.filter(function (tag) {
            return currentTags.indexOf(tag) !== -1;
        }).length;
        var bTagShared = bTags.filter(function (tag) {
            return currentTags.indexOf(tag) !== -1;
        }).length;

        if (aShared !== bShared) return bShared - aShared;
        if (aTagShared !== bTagShared) return bTagShared - aTagShared;
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
    link.href = getArticleHref(article.link);

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

function initArticlePageTags() {
    var tagsEl = document.querySelector('[data-article-tags]');
    if (!tagsEl) return;

    var article = getCurrentArticle();
    if (!article || !Array.isArray(article.tags) || article.tags.length === 0) return;

    tagsEl.innerHTML = '';
    article.tags.forEach(function (tag) {
        var tagSpan = document.createElement('span');
        tagSpan.className = 'article-tag';
        tagSpan.textContent = tag;
        tagsEl.appendChild(tagSpan);
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
    initHomepageLatestArticle();
    initCategoryPage();
    initUniversityPage();
    initAuthorProfilePage();
    initArticlePageMetadata();
    initArticlePageTags();
    initRelatedArticles();
    initArticlePagination();
    initHomepageStats();
    initHomepageFeaturedEditors();
    initEditorialTeamPage();
});
