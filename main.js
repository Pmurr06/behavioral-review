/* ============================================
   Article Data — single source of truth
   Add new articles at the top of this array
   to make them the newest publication.
   ============================================ */
var ARTICLES = [
    {
        title: 'Balancing Climate Policy with Economic Interests',
        authorId: 'braydon-perko',
        author: 'Braydon Perko',
        major: 'Business Administration',
        institution: 'University of Oregon',
        categories: ['Economics & Business'],
        displayCategory: 'Economics & Business',
        tags: ['Climate Policy', 'Renewable Energy', 'Fossil Fuels', 'GDP', 'Sea Level Rise', 'Environmental Economics', 'Public Policy', 'Climate Change'],
        date: 'August 2026',
        readingWordCount: 2111,
        preview: 'Braydon Perko argues that the economic cost of inaction on climate change now exceeds the cost of transitioning to renewable energy. Pointing to rising disaster losses, hidden fossil-fuel subsidies, GDP projections, and sea-level risk, Perko makes the case that immediate climate policy is the more fiscally responsible path.',
        link: 'articles/balancing-climate-policy-with-economic-interests.html'
    },
    {
        title: 'The Alien Invasion Has Already Happened: An Introduction to Afrofuturism',
        authorId: 'georgia-lewis',
        author: 'Georgia Lewis',
        major: 'Art History',
        institution: 'School of the Art Institute of Chicago',
        categories: ['Arts & Humanities'],
        displayCategory: 'Arts & Humanities',
        tags: ['Afrofuturism', 'Art History', 'Visual Culture', 'Black Panther', 'The Wiz', 'Sun Ra', 'Robert Colescott', 'Photography', 'Cultural Studies', 'African Diaspora', 'Science Fiction', 'History', 'American Art'],
        date: 'August 2026',
        readingWordCount: 3200,
        preview: 'Georgia Lewis argues that for Black people the alien invasion of colonialism has already happened\u2014and that Afrofuturist artists reclaim that narrative to imagine worlds of liberation. Drawing on The Wiz, Black Panther, Sun Ra, and Robert Colescott, Lewis shows how the genre merges science fiction with African diasporic history to challenge colonial erasure.',
        link: 'articles/afrofuturism-and-invasion.html'
    },
    {
        title: 'Capturing Wonder: Jacques-Henri Lartigue and the Art of Vernacular Photography',
        authorId: 'georgia-lewis',
        author: 'Georgia Lewis',
        major: 'Art History',
        institution: 'School of the Art Institute of Chicago',
        categories: ['Arts & Humanities'],
        displayCategory: 'Arts & Humanities',
        tags: ['Photography', 'Art History', 'Visual Culture', 'Street Photography', 'History of Photography', 'Jacques-Henri Lartigue', 'Belle \u00c9poque', 'French History', 'Vernacular Photography'],
        date: 'August 2026',
        readingWordCount: 2600,
        preview: 'Georgia Lewis argues that Jacques-Henri Lartigue\u2019s vernacular photography owes its originality to three intersecting qualities: childlike genuineness, economic privilege, and fascination with the technological marvels of Belle \u00c9poque France. Drawing on Lartigue\u2019s boyhood photographs in Diary of a Century, Lewis shows how an affluent child\u2019s uninfluenced curiosity produced some of the most enduring images of the early twentieth century.',
        link: 'articles/lartigue-vernacular-photography.html'
    },
    {
        title: 'Over-Reliance on AI and the Decline of Student Cognitive Skills',
        authorId: 'karthikeya-r-nandi',
        author: 'Karthikeya Nandi',
        major: 'Biomedical Sciences',
        institution: 'University of South Florida',
        categories: ['Behavioral Science'],
        displayCategory: 'Behavioral Science',
        tags: ['Artificial Intelligence', 'Education', 'Critical Thinking', 'Decision-Making', 'Cognitive Psychology', 'Student Learning', 'Technology', 'Higher Education'],
        date: 'July 2026',
        readingWordCount: 3050,
        preview: 'Karthikeya Nandi argues that over-reliance on AI can erode the cognitive skills students need most. Drawing on research into note-taking, media multitasking, memory externalization, and AI trust effects, Nandi shows how convenience-driven usage displaces critical engagement and proposes that schools adopt AI literacy instruction that treats AI as a supplement to human thought, not a substitute.',
        link: 'articles/over-reliance-on-ai-and-student-cognition.html'
    },
    {
        title: 'Work, Meaning, and the Search for Fulfillment: A Philosophical Reading of \u2018Office Space\u2019',
        authorId: 'braydon-perko',
        author: 'Braydon Perko',
        major: 'Business Administration',
        institution: 'University of Oregon',
        categories: ['Philosophy'],
        displayCategory: 'Philosophy',
        tags: ['Philosophy', 'Film & Media', 'Film Analysis', 'Office Space', 'Meaningful Work', 'David Graeber', 'Immanuel Kant', 'John Stuart Mill', 'Work and Meaning', 'Utilitarianism'],
        date: 'July 2026',
        readingWordCount: 1550,
        preview: 'Braydon Perko reads Office Space through David Graeber, Immanuel Kant, and John Stuart Mill, arguing that the dissatisfaction of Peter, Michael, and Samir reflects a broader failure of modern workplaces to provide the meaning, autonomy, and higher forms of satisfaction that genuine fulfillment requires. The film, Perko contends, is an inadvertent philosophical case study.',
        link: 'articles/office-space-work-meaning-autonomy-fulfillment.html'
    },
    {
        title: 'The Moral Work of Anger',
        authorId: 'braydon-perko',
        author: 'Braydon Perko',
        major: 'Business Administration',
        institution: 'University of Oregon',
        categories: ['Behavioral Science'],
        displayCategory: 'Behavioral Science',
        tags: ['Behavioral Science', 'Anger', 'Moral Philosophy', 'Post-Truth', 'Social Change', 'Justice', 'Activism', 'Political Theory'],
        date: 'July 2026',
        readingWordCount: 1227,
        preview: 'Braydon Perko argues that anger is not merely an emotional reaction but a morally appropriate response to injustice. Rather than dismissing anger as destructive, Perko shows how it functions as an epistemic tool that exposes deception, drives accountability, and supplies the motivational energy behind meaningful social and political change.',
        link: 'articles/the-moral-work-of-anger.html'
    },
    {
        title: 'Can AI Help Cure Writer\'s Block?',
        authorId: 'braydon-perko',
        author: 'Braydon Perko',
        major: 'Business Administration',
        institution: 'University of Oregon',
        categories: ['Behavioral Science'],
        displayCategory: 'Behavioral Science',
        tags: ['Behavioral Science', 'Artificial Intelligence', 'Writer\'s Block', 'Writing', 'Creativity', 'Higher Education', 'Fiction Writing', 'Technology'],
        date: 'July 2026',
        readingWordCount: 1106,
        preview: 'Braydon Perko weighs whether AI can serve as a practical remedy for writer\'s block, setting Laura Hartenberger\'s critique of AI-generated writing against Jennifer Lepp\'s experience using AI as a generative aid. Perko concludes that the answer depends less on the technology than on how deliberately writers choose to engage with it.',
        link: 'articles/can-ai-help-cure-writers-block.html',
        hidden: true
    },
    {
        title: 'Fight Club: Fincher\'s Dark Symphony',
        authorId: 'braydon-perko',
        author: 'Braydon Perko',
        major: 'Business Administration',
        institution: 'University of Oregon',
        categories: ['Behavioral Science'],
        displayCategory: 'Behavioral Science',
        tags: ['Behavioral Science', 'Film & Media', 'Film Analysis', 'David Fincher', 'Fight Club', 'Narrative Techniques', 'Cinematography'],
        date: 'July 2026',
        readingTime: '10–12 min read',
        preview: 'Braydon Perko argues that Fight Club endures because David Fincher treats every element\u2014lighting, sound design, editing, and narrative structure\u2014as a deliberate compositional choice. Rather than a shock-value spectacle, the film reveals itself on repeat viewings as a carefully constructed work whose dark atmosphere and formal precision repay close attention.',
        link: 'articles/fight-club-finchers-dark-symphony.html'
    },
    {
        title: 'The Body That Drives: Merleau-Ponty\u2019s Phenomenology of Embodiment in Baby Driver',
        authorId: 'harrison-mclain',
        author: 'Harrison McLain',
        major: 'Computer Science',
        institution: 'Gonzaga University',
        categories: ['Philosophy'],
        displayCategory: 'Philosophy',
        tags: ['Philosophy', 'Film Studies', 'Phenomenology', 'Maurice Merleau-Ponty', 'Baby Driver', 'Edgar Wright', 'Consciousness', 'Embodiment', 'Cinema'],
        date: 'July 2026',
        readingTime: '12\u201314 min read',
        preview: 'Harrison McLain argues that Baby Driver does more than use music cleverly\u2014it enacts Maurice Merleau-Ponty\u2019s phenomenology of embodiment. Through Baby\u2019s body-schema, intentional arc, and sedimented driving habit, Edgar Wright translates philosophical claims about perception and motor skill into cinematic form, making it one of the most philosophically precise films in recent memory.',
        link: 'articles/the-body-that-drives-merleau-ponty-phenomenology-baby-driver.html'
    },
    {
        title: 'Beyond the Diss Track: A Sociological Analysis of Kendrick Lamar\u2019s Not Like Us',
        authorId: 'luke-marshall',
        author: 'Luke Marshall',
        major: 'Accounting',
        institution: 'University of Oregon',
        categories: ['Sociology & Anthropology'],
        displayCategory: 'Sociology',
        tags: ['Sociology', 'Popular Culture', 'Hip-Hop', 'Kendrick Lamar', 'Drake', 'Race', 'Ethnicity', 'Social Stratification', 'Social Mobility', 'Cultural Appropriation', 'Colonialism', 'Identity', 'Culture', 'Music Sociology'],
        date: 'July 2026',
        readingWordCount: 2750,
        preview: 'Luke Marshall reads Kendrick Lamar\u2019s Not Like Us as sociological commentary, arguing that the song\u2019s attack on Drake is really a critique of racial inauthenticity, cultural appropriation, and social stratification. Marshall draws on concepts of colonialism, identity, and social mobility to show how contemporary hip-hop can function as a form of public sociological argument.',
        link: 'articles/beyond-the-diss-track-a-sociological-analysis-of-kendrick-lamars-not-like-us.html'
    },
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
        preview: 'Luke Marshall explains how Delta Air Lines applies ASC 606 across three revenue streams\u2014passenger tickets, the SkyMiles loyalty program, and ancillary services\u2014and why the accounting choices matter. Deferred revenue balances and management estimates, Marshall argues, shape reported financial results in ways that investors and analysts need to understand to read Delta\u2019s financials accurately.',
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
        preview: 'Luke Marshall uses Coty Inc.\u2019s 2019 write-down of $3.85 billion to explain how goodwill impairment works under GAAP. Walking through the recognition rules, valuation assumptions, and disclosure requirements behind the charge, Marshall argues that impairment events reveal critical information about acquisition performance that investors cannot afford to overlook.',
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
        preview: 'Ryan Trudeau argues that smoking is undergoing a cultural revival among Generation Z, driven by social media aesthetics, targeted industry marketing, and the youth mental health crisis. Together these forces are reversing decades of public health progress and creating conditions that existing prevention frameworks\u2014designed for an earlier era\u2014are poorly equipped to address.',
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
        preview: 'Ryan Trudeau examines obstetric paternalism in Italy through the case of Alessandra Battisti, a patient whose wishes during childbirth were overridden by medical staff. Analyzing the tension between patient autonomy and physician beneficence, Trudeau evaluates the deontological implications of informed consent and argues that institutional medical culture has not yet caught up with ethical obligations.',
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
        preview: 'Ryan Trudeau proposes a longitudinal cohort study to examine how food insecurity shapes psychosocial health\u2014including depression, anxiety, and hope\u2014and whether those effects translate into lower academic performance. The study focuses on undergraduates at the University of Utah and argues that food access is a social determinant of educational outcomes that campus policy cannot ignore.',
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
        preview: 'Ryan Trudeau argues that high-potency cannabis products\u2014particularly dab pens\u2014are intensifying cannabis-induced psychosis and accelerating schizophrenia onset in genetically vulnerable users. As legalization expands access without equivalent expansion of public health education, Trudeau contends that clinicians and policymakers urgently need updated frameworks for assessing the psychiatric risks of concentrated THC.',
        link: 'articles/the-effect-of-cannabis-on-schizophrenia-diagnoses.html'
    },
    {
        title: 'What Common Habits Do Interrogators Examine, and What Strategies Do They Employ to Determine if a Suspect Is Guilty?',
        authorId: 'katie-nguyen',
        author: 'Katie Nguyen',
        major: 'Health Sciences',
        institution: 'University of South Florida',
        categories: ['Law & Criminal Justice'],
        displayCategory: 'Law & Criminal Justice',
        tags: ['Criminal Investigations', 'Interrogation', 'Deception Detection', 'Forensic Psychology', 'Investigative Psychology', 'Body Language'],
        date: 'July 2026',
        readingWordCount: 1500,
        preview: 'Katie Nguyen examines the behavioral cues and interview techniques that interrogators use to assess credibility in high-profile criminal cases. Reviewing patterns in speech, body language, and narrative consistency, Nguyen argues that no single cue can independently establish guilt and that professional interrogators must weigh converging evidence rather than rely on any one behavioral signal.',
        link: 'articles/what-common-habits-interrogators-examine-strategies-determine-guilty.html'
    },
    {
        title: 'Persuasive Commentary: Futility Laws on Infants and the Case of Tinslee Lewis',
        authorId: 'katie-nguyen',
        author: 'Katie Nguyen',
        major: 'Health Sciences',
        institution: 'University of South Florida',
        categories: ['Public Policy'],
        displayCategory: 'Public Policy',
        tags: ['Bioethics', 'Healthcare Policy', 'Medical Ethics', 'Pediatric Care', 'End-of-Life Care', 'Parental Rights'],
        date: 'July 2026',
        readingWordCount: 1450,
        preview: 'Katie Nguyen examines the ethical conflict between parental rights and physician authority in the case of Tinslee Lewis, a Texas infant whose parents and doctors disagreed about continuing life-sustaining treatment. Nguyen argues that futility laws should require collaborative decision-making rather than unilateral physician authority, centering the child\u2019s best interests above all other considerations.',
        link: 'articles/persuasive-commentary-futility-laws-infants-tinslee-lewis.html'
    },
    {
        title: 'Religious Racialization and the Yazidi Genocide: Examining ISIS\'s Campaign of Persecution',
        authorId: 'ella-roehl',
        author: 'Ella Roehl',
        major: 'Human Physiology',
        institution: 'University of Iowa',
        categories: ['Global & International Affairs'],
        displayCategory: 'Global & International Affairs',
        tags: ['Human Rights', 'Genocide', 'Iraq', 'ISIS', 'Religious Conflict', 'Middle East'],
        date: 'July 2026',
        readingWordCount: 1500,
        preview: 'Ella Roehl argues that ISIS targeted the Yazidi people not merely for religious difference but through a process of religious racialization that framed them as existentially illegitimate. Tracing the ideological foundations, historical marginalization, and lasting consequences of the 2014 genocide in Sinjar, Roehl shows how racialized religious identity enabled mass atrocity.',
        link: 'articles/religious-racialization-yazidi-genocide-isis-campaign-persecution.html'
    },
    {
        title: 'Hidden Costs of Global Seafood: Child and Migrant Labor in Thailand\u2019s Shrimp Industry',
        authorId: 'ella-roehl',
        author: 'Ella Roehl',
        major: 'Human Physiology',
        institution: 'University of Iowa',
        categories: ['Global & International Affairs'],
        displayCategory: 'Global & International Affairs',
        tags: ['Human Rights', 'International Development', 'Labor', 'Migration'],
        date: 'July 2026',
        readingWordCount: 1500,
        preview: 'Ella Roehl argues that rising global demand for shrimp has made labor exploitation structurally inevitable in Thailand\u2019s seafood industry. Examining the relationship between international consumer demand, migrant labor from Myanmar, and regulatory failures, Roehl shows how supply chain pressures create conditions that enable child labor and forced labor to persist largely out of sight.',
        link: 'articles/hidden-costs-global-seafood-child-migrant-labor-thailand-shrimp-industry.html'
    },
    {
        title: 'Navigating the Labyrinth of Gender, Race, and Economic Inequality: A Sociological Perspective',
        authorId: 'ella-roehl',
        author: 'Ella Roehl',
        major: 'Human Physiology',
        institution: 'University of Iowa',
        categories: ['Sociology & Anthropology'],
        displayCategory: 'Sociology & Anthropology',
        tags: ['Gender', 'Race', 'Social Inequality'],
        date: 'July 2026',
        readingWordCount: 1496,
        preview: 'Ella Roehl argues that gender, race, and economic class do not operate as separate variables but interact through intersectionality to compound social disadvantage. Examining how institutions, historical patterns, and structural arrangements shape opportunity and mobility, Roehl shows that inequality is not a set of parallel problems but a single interlocking system requiring integrated analysis.',
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
        preview: 'Ella Roehl and Christine Byrne examine how three sources\u2014the Inventiv Foundation, The New York Times, and Liberties\u2014use contrasting rhetorical strategies to frame AI as an engine of innovation, a policy challenge requiring oversight, or a societal threat demanding immediate action. Their analysis shows how rhetorical choices, not just evidence, determine whether readers see AI as promise or peril.',
        link: 'articles/artificial-intelligence-public-perception-rhetorical-analysis.html'
    },
    {
        title: 'Grieving Before Goodbye: Dementia, Anticipatory Loss, and the Anthropology of Mourning',
        authorId: 'alexandra-quist',
        author: 'Alexandra Quist',
        major: 'Anthropology',
        institution: 'University of Washington',
        categories: ['Sociology & Anthropology'],
        displayCategory: 'Sociology & Anthropology',
        tags: ['Anthropology'],
        date: 'July 2026',
        readingWordCount: 1643,
        preview: 'Alexandra Quist argues that dementia transforms mourning into a prolonged and socially unrecognized process that begins long before physical death. Drawing on anticipatory grief, disenfranchised grief, the work of mourning, and intersubjectivity, Quist shows how caregivers grieve an absent presence that medicine cannot acknowledge, leaving their loss invisible to the institutions meant to support them.',
        link: 'articles/grieving-before-goodbye-dementia-anthropology-of-mourning.html'
    },
    {
        title: 'Beyond Death: Necropower, Colonialism, and the Unmarked Graves of Indigenous Children in Canada',
        authorId: 'alexandra-quist',
        author: 'Alexandra Quist',
        major: 'Anthropology',
        institution: 'University of Washington',
        categories: ['Sociology & Anthropology'],
        displayCategory: 'Sociology & Anthropology',
        tags: ['Anthropology'],
        date: 'July 2026',
        readingWordCount: 1733,
        preview: 'Alexandra Quist argues that Canada\u2019s residential school graves are not merely historical artifacts but enduring symbols of colonial necropower\u2014a form of structural violence that extends beyond death. Through necropower, necroviolence, and disrupted grief, Quist shows how the burial sites continue to deny Indigenous communities the right to mourn, remember, and reclaim their dead.',
        link: 'articles/necropower-colonialism-unmarked-graves-indigenous-children-canada.html'
    },
    {
        title: 'Financial Barriers and Clinical Judgment in the United States Healthcare System',
        authorId: 'alexandra-quist',
        author: 'Alexandra Quist',
        institution: 'University of Washington',
        categories: ['Public Policy'],
        displayCategory: 'Public Policy',
        date: 'July 2026',
        readingWordCount: 2222,
        preview: 'Alexandra Quist examines how insurance limitations, medical costs, and systemic policy constraints shape both clinical judgment and patient decision-making in the United States. Drawing on qualitative data, Quist argues that financial barriers are not peripheral to healthcare delivery but are embedded in the clinical encounter itself, distorting the relationship between medically appropriate care and the care patients actually receive.',
        link: 'articles/financial-barriers-clinical-judgment-us-healthcare.html'
    },
    {
        title: 'Reconsidering Christopher McCandless: Autonomy, Critical Thinking, and the Philosophy of Into the Wild',
        authorId: 'alexandra-quist',
        author: 'Alexandra Quist',
        major: 'Anthropology',
        institution: 'University of Washington',
        categories: ['Behavioral Science'],
        displayCategory: 'Behavioral Science',
        date: 'July 2026',
        readingTime: '8 min read',
        preview: 'Christopher McCandless is often dismissed as reckless, yet Alexandra Quist argues his story reveals a deliberate effort to live according to carefully examined convictions. Drawing on Lewis Vaughn\u2019s The Power of Critical Thinking, this article argues that McCandless exercised genuine intellectual autonomy and philosophical reasoning\u2014not impulsive idealism\u2014in choosing his unconventional path.',
        link: 'articles/reconsidering-christopher-mccandless.html'
    },
    {
        title: 'Moneyball and Market Inefficiency: How the Oakland Athletics Revolutionized Data-Driven Decision Making',
        authorId: 'jackson-pincock',
        author: 'Jackson Pincock',
        major: 'Business',
        institution: 'University of Utah',
        categories: ['Economics & Business'],
        displayCategory: 'Economics & Business',
        tags: ['Finance', 'Leadership'],
        date: '2026',
        readingTime: '10 min read',
        preview: 'The Oakland Athletics transformed professional baseball not by spending more but by thinking differently. This article examines how Billy Beane\u2019s adoption of sabermetrics allowed Oakland to identify undervalued players, exploit market inefficiencies, and remain competitive on a limited budget\u2014offering enduring lessons about data-driven decision-making, organizational strategy, and competitive advantage.',
        link: 'articles/moneyball-market-inefficiency.html'
    },
    {
        title: 'Implicit Personality Theory and Moral Development in War and Peace',
        authorId: 'alan-ta',
        author: 'Alan Ta',
        major: 'Honors Finance and Business Analytics',
        institution: 'Indiana University Kelley School of Business',
        categories: ['Psychology'],
        displayCategory: 'Psychology',
        date: 'July 2026',
        readingTime: '14 min read',
        preview: 'Alan Ta argues that War and Peace is more than a historical epic\u2014it is a sustained critique of implicit personality theory, the cognitive tendency to judge character from minimal evidence. Through the moral development of Pierre Bezukhov and Natasha Rostova, Tolstoy dismantles the superficial judgments of aristocratic society and shows that authentic character emerges through sacrifice and sustained moral growth.',
        link: 'articles/implicit-personality-theory-war-and-peace.html'
    },
    {
        title: 'Growing Without Losing Your Culture: Organizational Lessons from the Bouldering Project',
        authorId: 'david-kim',
        author: 'David Kim',
        major: 'Logistics, Materials & Supply Chain Management',
        institution: 'University of Washington Foster School of Business',
        categories: ['Economics & Business'],
        displayCategory: 'Economics & Business',
        tags: ['Organizational Behavior'],
        date: 'June 2026',
        readingTime: '10 min read',
        preview: 'David Kim argues that the Bouldering Project\u2019s national expansion puts its defining workplace culture at risk. Drawing on interviews with Seattle-area employees, Kim examines the organizational behavior dynamics that sustain mission-driven culture at scale and offers concrete recommendations for preserving engagement, trust, and community identity as the company grows beyond its founding locations.',
        link: 'articles/growing-without-losing-your-culture.html'
    },
    {
        title: 'The Rule of Reason: Why NCAA v. Alston Changed College Sports',
        authorId: 'carson-wais',
        author: 'Carson Wais',
        major: 'Business Finance',
        institution: 'Washington State University',
        categories: ['Law & Criminal Justice'],
        displayCategory: 'Law & Criminal Justice',
        tags: ['Law and Society'],
        date: 'June 2026',
        readingTime: '9 min read',
        preview: 'Carson Wais argues that NCAA v. Alston (2021) fundamentally reordered the legal relationship between the NCAA, universities, and student-athletes. The Supreme Court\u2019s unanimous application of the Rule of Reason to education-related benefits struck at the ideological core of amateurism and created the legal foundation for the ongoing transformation of collegiate sports economics.',
        link: 'articles/rule-of-reason-ncaa-alston.html'
    },
    {
        title: 'The Value of Boring Banking: Why Financial Stability Matters More Than Speculation',
        authorId: 'kelden-littell',
        author: 'Kelden Littell',
        major: 'Computer Engineering',
        institution: 'University of Utah',
        categories: ['Economics & Business'],
        displayCategory: 'Economics & Business',
        tags: ['Finance'],
        date: 'June 2026',
        readingTime: '9 min read',
        preview: 'Kelden Littell argues that financial innovation, unconstrained by institutional conservatism, produced the conditions for the Great Recession. Examining behavioral incentives, risk mismanagement, and the erosion of consumer trust, Littell makes the case that long-term economic resilience depends not on financial creativity but on stable, prudent banking institutions willing to forgo short-term gains.',
        link: 'articles/value-of-boring-banking.html'
    },
    {
        title: 'Rethinking Affordable Housing: A Land-Bank Strategy for Bozeman',
        authorId: 'radek-janout',
        author: 'Radek Janout',
        major: 'Finance',
        institution: 'Montana State University',
        categories: ['Public Policy', 'Economics & Business'],
        displayCategory: 'Public Policy',
        tags: ['Finance'],
        date: 'June 2026',
        readingTime: '9 min read',
        preview: 'Radek Janout argues that Bozeman\u2019s housing crisis is fundamentally a land problem, not just a construction cost problem. Proposing a mandatory land-dedication framework, Janout shows how requiring developers to set aside parcels for affordable housing could build a long-term municipal land bank without eliminating the market incentives that make new development financially viable.',
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
        preview: 'Miller Smith argues that capitalism does not simply fail to address climate change\u2014it actively creates structural incentives against it. Examining corporate profit motives, lobbying power, and corporate social responsibility as a substitute for regulation, Smith shows how global greenhouse gas emissions continue to rise despite scientific consensus, and considers who bears the unequal costs.',
        link: 'articles/profit-power-and-the-climate-crisis.html'
    },
    {
        title: 'NCAA v. Alston: The Supreme Court Decision That Changed College Athletics',
        authorId: 'david-morgan',
        author: 'David Morgan',
        major: 'Business Administration & Management',
        institution: 'Washington State University',
        categories: ['Law & Criminal Justice'],
        displayCategory: 'Law & Criminal Justice',
        tags: ['Law and Society'],
        date: 'June 2026',
        readingTime: '10 min read',
        preview: 'David Morgan argues that NCAA v. Alston (2021) exposed a fundamental contradiction at the heart of the college sports model: that the amateurism framework used to restrict athlete compensation could not survive antitrust scrutiny. Morgan examines the legal reasoning behind the Supreme Court\u2019s unanimous ruling and traces its implications for how universities, athletic organizations, and athletes relate to one another.',
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
        preview: 'Miller Smith argues that the debate over plastic straws has become a misleading symbol: it creates the appearance of environmental action while distracting from the systemic reforms that would actually reduce single-use plastic waste. Examining consumer behavior, corporate responsibility, and the politics of incremental change, Smith asks whether small gestures help or hinder meaningful environmental progress.',
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
        preview: 'Miller Smith argues that the post-COVID era has strained the EUR/USD relationship in ways that reveal deeper structural pressures in the international monetary system. Examining fiscal divergence, monetary policy gaps, geopolitical shocks, and growing de-dollarization efforts, Smith shows how these forces are reshaping the reserve currency hierarchy and what that means for global financial stability.',
        link: 'articles/forex-exchange-markets.html'
    }
];

/* Published articles — excludes any entry with hidden: true */
var PUBLISHED_ARTICLES = ARTICLES.filter(function (a) { return !a.hidden; });

var EDITORIAL_TEAM = [
    {
        name: 'Paulo Murray',
        role: 'Managing & Behavioral Science Editor',
        credentials: 'U.S. Marine | Psychology Student, Penn State World Campus',
        institution: 'Penn State World Campus',
        bio: 'Psychology student at Penn State, active-duty Marine Corps meteorology specialist, and Crisis Text Line volunteer.',
        imagePath: 'Paulo-2.jpg',
        imageAlt: 'Paulo Murray, Managing and Behavioral Science Editor of The Behavioral Review'
    },
    {
        name: 'Carson Wais',
        role: 'Business & Economics Editor',
        credentials: 'Business Finance Student, Washington State University',
        institution: 'Washington State University',
        bio: 'Business Finance student at Washington State University, VITA and TCE certified, and Asnowco LLC co-founder.',
        imagePath: 'Carson.jpg',
        imageAlt: 'Carson Wais, Business and Economics Editor of The Behavioral Review'
    },
    {
        name: 'Nathan Isbell',
        role: 'Copy & Layout Editor',
        credentials: 'U.S. Marine | Writing Student, UMGC',
        institution: 'UMGC',
        bio: 'Marine Corps intelligence specialist and Writing student at UMGC with experience in data analysis and technical reporting.',
        imagePath: 'Nathan.jpg',
        imageAlt: 'Nathan Isbell, Copy and Layout Editor of The Behavioral Review'
    },
    {
        name: 'Brandon Nobrega',
        role: 'Design & Marketing Editor',
        credentials: 'U.S. Air Force Aviation Meteorologist',
        institution: '',
        bio: 'U.S. Air Force aviation meteorologist supporting Army rotary-wing operations and managing TBR\'s social media.',
        imagePath: 'Nobrega.jpg',
        imageAlt: 'Brandon Nobrega, Design and Marketing Editor of The Behavioral Review'
    },
    {
        name: 'Ilianis Badillo',
        role: 'Biomedical Sciences Editor',
        credentials: 'Biomedical Sciences Student, University of South Florida',
        institution: 'University of South Florida',
        bio: 'Biomedical Sciences student at the University of South Florida with experience analyzing scientific literature and chemical research.',
        imagePath: 'Ilianis.jpg',
        imageAlt: 'Ilianis Badillo, Biomedical Sciences Editor of The Behavioral Review'
    },
    {
        name: 'Sisira Yerrajennu',
        role: 'Health Sciences Editor',
        credentials: 'Health Sciences Student, University of South Florida',
        institution: 'University of South Florida',
        bio: 'Health Sciences student at the University of South Florida with experience writing and analyzing STEM and humanities research.',
        imagePath: 'Sisira.jpg',
        imageAlt: 'Sisira Yerrajennu, Health Sciences Editor of The Behavioral Review'
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

var CATEGORY_PAGE_MAP = {
    'Behavioral Science': 'behavioral-science.html',
    'Philosophy': 'philosophy.html',
    'Psychology': 'psychology.html',
    'Sociology & Anthropology': 'sociology-anthropology.html',
    'Law & Criminal Justice': 'law-criminal-justice.html',
    'Economics & Business': 'economics-business.html',
    'Global & International Affairs': 'global-affairs.html',
    'Public Policy': 'public-policy.html',
    'Public Health': 'public-health.html'
};

var BROWSE_CATEGORIES = ['Behavioral Science', 'Philosophy', 'Psychology', 'Sociology & Anthropology', 'Law & Criminal Justice', 'Economics & Business', 'Global & International Affairs', 'Public Policy', 'Public Health'];

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
    var authorDir = (typeof window !== 'undefined' && window.AUTHOR_DIRECTORY) || {};
    var nameToAuthorId = {};
    Object.keys(authorDir).forEach(function (id) {
        nameToAuthorId[normalizeKey(authorDir[id].name)] = id;
    });

    PUBLISHED_ARTICLES.forEach(function (article) {
        var authorData = getArticleAuthorData(article);
        var institutionKey = getInstitutionStatsKey(authorData.institutionRaw);

        if (Array.isArray(article.authorNames)) {
            article.authorNames.forEach(function (name) {
                var normalizedName = normalizeKey(name);
                var key = nameToAuthorId[normalizedName] || normalizedName;
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
        articlesPublished: String(PUBLISHED_ARTICLES.length),
        studentAuthors: String(Object.keys(uniqueAuthors).length),
        universitiesRepresented: String(Object.keys(uniqueInstitutions).length),
        averageReviewTime: SITE_SETTINGS.averageReviewTime
    };
}

function initHomepageStats() {
    var stats = computeHomepageStats();

    /* Legacy glance-box (still used on other pages if any) */
    var statsRoot = document.querySelector('[data-glance-stats]');
    if (statsRoot) {
        Object.keys(stats).forEach(function (key) {
            statsRoot.querySelectorAll('[data-glance-stat="' + key + '"]').forEach(function (node) {
                node.textContent = stats[key];
            });
        });
    }

    var heroStatsRoot = document.querySelector('[data-hero-stats]');
    if (heroStatsRoot) {
        Object.keys(stats).forEach(function (key) {
            heroStatsRoot.querySelectorAll('[data-hero-stat="' + key + '"]').forEach(function (node) {
                node.textContent = stats[key];
            });
        });
    }

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

function getCategoryHref(category) {
    return getSiteRoot() + (CATEGORY_PAGE_MAP[category] || 'archive.html');
}

function appendPublicationMeta(meta, authorData, article) {
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
}

function buildPublicationCard(article, options) {
    var settings = options || {};
    var authorData = getArticleAuthorData(article);
    var articleCategories = getArticleCategories(article);
    var displayCategory = article.displayCategory || articleCategories[0] || articleCategories.join(' • ') || 'Uncategorized';
    var card = document.createElement('article');
    card.className = 'publication-card' + (settings.featured ? ' publication-card--featured' : '');
    card.setAttribute('data-category', displayCategory);

    var header = document.createElement('div');
    header.className = 'publication-card__header';

    var pill = document.createElement('span');
    pill.className = 'article-category-pill';
    pill.textContent = displayCategory;
    header.appendChild(pill);

    var heading = document.createElement('h3');
    heading.textContent = article.title;
    header.appendChild(heading);

    var meta = document.createElement('div');
    meta.className = 'publication-card-meta';
    appendPublicationMeta(meta, authorData, article);
    header.appendChild(meta);

    card.appendChild(header);

    if (!settings.hideTags && Array.isArray(article.tags) && article.tags.length > 0) {
        var tagsEl = document.createElement('div');
        tagsEl.className = 'article-tags';
        article.tags.forEach(function (tag) {
            var tagNode = settings.clickableTags ? document.createElement('button') : document.createElement('span');
            if (settings.clickableTags) {
                tagNode.type = 'button';
                tagNode.className = 'article-tag archive-tag-btn';
                tagNode.setAttribute('aria-label', 'Filter by tag: ' + tag);
                tagNode.addEventListener('click', function (e) {
                    e.preventDefault();
                    if (typeof settings.onTagClick === 'function') settings.onTagClick(tag);
                });
            } else {
                tagNode.className = 'article-tag';
            }
            tagNode.textContent = tag;
            tagsEl.appendChild(tagNode);
        });
        card.appendChild(tagsEl);
    }

    var preview = document.createElement('p');
    preview.className = 'publication-card__preview';
    preview.textContent = article.preview;
    card.appendChild(preview);

    var footer = document.createElement('div');
    footer.className = 'publication-card__footer';

    var btn = document.createElement('a');
    btn.href = getArticleHref(article.link);
    btn.className = 'btn btn-primary';
    btn.textContent = 'Read Article';
    footer.appendChild(btn);

    card.appendChild(footer);
    return card;
}

/* Build one publication card element from an article object */
function buildArticleCard(article) {
    return buildPublicationCard(article);
}

/* Build an archive article card with clickable tag buttons */
function buildArchiveCard(article, onTagClick) {
    return buildPublicationCard(article, { clickableTags: true, onTagClick: onTagClick, hideTags: true });
}

function buildCompactPublicationCard(article) {
    var authorData = getArticleAuthorData(article);
    var articleCategories = getArticleCategories(article);
    var displayCategory = article.displayCategory || articleCategories[0] || 'Uncategorized';
    var link = document.createElement('a');
    link.className = 'compact-publication-card';
    link.href = getArticleHref(article.link);

    var category = document.createElement('span');
    category.className = 'compact-publication-card__category';
    category.textContent = displayCategory;
    link.appendChild(category);

    var heading = document.createElement('h3');
    heading.textContent = article.title;
    link.appendChild(heading);

    var meta = document.createElement('p');
    meta.className = 'compact-publication-card__meta';
    meta.textContent = [authorData.name, article.date, getArticleReadingTime(article)].filter(Boolean).join(' • ');
    link.appendChild(meta);

    var summary = document.createElement('p');
    summary.className = 'compact-publication-card__summary';
    summary.textContent = article.preview;
    link.appendChild(summary);

    return link;
}

function buildContributorHighlight(entry) {
    var card = document.createElement('article');
    card.className = 'contributor-card';

    var eyebrow = document.createElement('span');
    eyebrow.className = 'feature-panel__eyebrow';
    eyebrow.textContent = 'Contributor highlight';
    card.appendChild(eyebrow);

    var name = document.createElement(entry.profileHref ? 'a' : 'h3');
    if (entry.profileHref) {
        name.href = entry.profileHref;
        name.className = 'contributor-card__name';
        name.textContent = entry.name;
    } else {
        name.textContent = entry.name;
    }
    card.appendChild(name);

    var institution = document.createElement('p');
    institution.className = 'contributor-card__institution';
    institution.textContent = entry.institution;
    card.appendChild(institution);

    var latest = document.createElement('p');
    latest.className = 'contributor-card__summary';
    latest.textContent = 'Latest publication: ' + entry.article.title;
    card.appendChild(latest);

    var footer = document.createElement('div');
    footer.className = 'contributor-card__footer';

    var articleLink = document.createElement('a');
    articleLink.href = getArticleHref(entry.article.link);
    articleLink.className = 'card-link';
    articleLink.textContent = 'Read latest article →';
    footer.appendChild(articleLink);

    if (entry.profileHref) {
        var profileLink = document.createElement('a');
        profileLink.href = entry.profileHref;
        profileLink.className = 'card-link';
        profileLink.textContent = 'View profile →';
        footer.appendChild(profileLink);
    }

    card.appendChild(footer);
    return card;
}

function buildCategoryBrowseCard(category) {
    var card = document.createElement('a');
    card.className = 'browse-card';
    card.href = getCategoryHref(category);

    var heading = document.createElement('h3');
    heading.textContent = category;
    card.appendChild(heading);

    var count = PUBLISHED_ARTICLES.filter(function (article) {
        return getArticleCategories(article).indexOf(category) !== -1;
    }).length;

    var body = document.createElement('p');
    body.textContent = count + ' published article' + (count === 1 ? '' : 's');
    card.appendChild(body);

    return card;
}

function getContributorHighlights(limit) {
    var seen = {};
    var highlights = [];

    PUBLISHED_ARTICLES.forEach(function (article) {
        if (!article.authorId || seen[article.authorId]) return;
        var authorData = getArticleAuthorData(article);
        seen[article.authorId] = true;
        highlights.push({
            name: authorData.name,
            institution: authorData.institution,
            profileHref: authorData.profileHref,
            article: article
        });
    });

    return highlights.slice(0, limit || 3);
}

function renderCompactPublicationCollection(selector, articles) {
    var target = document.querySelector(selector);
    if (!target) return;
    target.innerHTML = '';
    articles.forEach(function (article) {
        target.appendChild(buildCompactPublicationCard(article));
    });
}

function renderContributorHighlights(selector, limit) {
    var target = document.querySelector(selector);
    if (!target) return;
    target.innerHTML = '';
    getContributorHighlights(limit).forEach(function (entry) {
        target.appendChild(buildContributorHighlight(entry));
    });
}

function renderBrowseCards(selector, categories) {
    var target = document.querySelector(selector);
    if (!target) return;
    target.innerHTML = '';
    (categories || BROWSE_CATEGORIES).forEach(function (category) {
        target.appendChild(buildCategoryBrowseCard(category));
    });
}

/* Archive page — search, filter, sort, and stats */
function initArchivePage() {
    var filtersEl = document.getElementById('archive-filters');
    var filtersMobileEl = document.getElementById('archive-filters-mobile');
    var feedEl = document.getElementById('archive-feed');
    if (!filtersEl || !feedEl) return;

    var searchInput    = document.getElementById('archive-search');
    var stickySearch   = document.getElementById('archive-sticky-search');
    /* Mobile accordion selects */
    var sortSelect     = document.getElementById('archive-sort');
    var uniSelect      = document.getElementById('archive-university');
    var authorSelect   = document.getElementById('archive-author');
    /* Desktop selects (mirrored) */
    var sortSelectDt   = document.getElementById('archive-sort-desktop');
    var uniSelectDt    = document.getElementById('archive-university-desktop');
    var authorSelectDt = document.getElementById('archive-author-desktop');
    var clearButton    = document.getElementById('archive-clear-filters');
    var clearButtonMob = document.getElementById('archive-clear-filters-mobile');
    var resultsCountEl = document.getElementById('archive-results-count');
    var featuredSection = document.getElementById('archive-featured');
    var featuredFeed   = document.getElementById('archive-featured-feed');
    var activePillsEl  = document.getElementById('archive-active-pills');
    var stickyBar      = document.getElementById('archive-sticky-bar');
    var statsBar       = document.querySelector('.archive-stats-bar');

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
        var authorDir = (typeof window !== 'undefined' && window.AUTHOR_DIRECTORY) || {};
        var nameToAuthorId = {};
        Object.keys(authorDir).forEach(function (id) {
            nameToAuthorId[normalizeKey(authorDir[id].name)] = id;
        });

        PUBLISHED_ARTICLES.forEach(function (a) {
            var authorData       = getArticleAuthorData(a);
            var institutionKey   = getInstitutionStatsKey(authorData.institutionRaw);

            if (Array.isArray(a.authorNames)) {
                a.authorNames.forEach(function (name) {
                    var normalizedName = normalizeKey(name);
                    var key = nameToAuthorId[normalizedName] || normalizedName;
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

        if (elArticles)     elArticles.textContent     = PUBLISHED_ARTICLES.length;
        if (elAuthors)      elAuthors.textContent      = Object.keys(uniqueAuthors).length;
        if (elUniversities) elUniversities.textContent = Object.keys(uniqueInstitutions).length;
    }());

    /* ── Editor's Picks ── */
    (function initFeatured() {
        if (!featuredSection || !featuredFeed) return;
        var featured = PUBLISHED_ARTICLES.filter(function (a) { return a.featured === true; });
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

        PUBLISHED_ARTICLES.forEach(function (a) {
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
            if (uniSelectDt) uniSelectDt.appendChild(opt.cloneNode(true));
        });

        authors.sort().forEach(function (name) {
            var opt = document.createElement('option');
            opt.value = name;
            opt.textContent = name;
            if (authorSelect) authorSelect.appendChild(opt);
            if (authorSelectDt) authorSelectDt.appendChild(opt.cloneNode(true));
        });
    }());

    /* ── Category filter pills (desktop and mobile) ── */
    var categories = ['All', 'Behavioral Science', 'Philosophy', 'Psychology', 'Sociology & Anthropology', 'Law & Criminal Justice', 'Economics & Business', 'Global & International Affairs', 'Public Policy', 'Public Health'];
    categories.forEach(function (cat) {
        function makeFilterBtn() {
            var btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'filter-btn' + (cat === 'All' ? ' filter-btn--active' : '');
            btn.textContent = cat;
            btn.setAttribute('data-filter', cat);
            btn.addEventListener('click', function () {
                state.category = cat;
                state.tag = '';
                /* Sync active state across both filter containers */
                [filtersEl, filtersMobileEl].forEach(function (el) {
                    if (!el) return;
                    el.querySelectorAll('.filter-btn').forEach(function (b) {
                        b.classList.toggle('filter-btn--active', b.getAttribute('data-filter') === cat);
                    });
                });
                renderFeed();
            });
            return btn;
        }
        filtersEl.appendChild(makeFilterBtn());
        if (filtersMobileEl) filtersMobileEl.appendChild(makeFilterBtn());
    });

    /* Helper: sync a pair of selects (mobile + desktop mirror) */
    function syncSelects(primary, mirror, value) {
        if (primary) primary.value = value;
        if (mirror)  mirror.value  = value;
    }

    /* ── Sort / university / author selects (mobile accordion) ── */
    if (sortSelect) {
        sortSelect.addEventListener('change', function () {
            state.sort = sortSelect.value;
            syncSelects(sortSelect, sortSelectDt, sortSelect.value);
            renderFeed();
        });
    }
    if (uniSelect) {
        uniSelect.addEventListener('change', function () {
            state.university = uniSelect.value;
            syncSelects(uniSelect, uniSelectDt, uniSelect.value);
            renderFeed();
        });
    }
    if (authorSelect) {
        authorSelect.addEventListener('change', function () {
            state.author = authorSelect.value;
            syncSelects(authorSelect, authorSelectDt, authorSelect.value);
            renderFeed();
        });
    }

    /* ── Sort / university / author selects (desktop mirrors) ── */
    if (sortSelectDt) {
        sortSelectDt.addEventListener('change', function () {
            state.sort = sortSelectDt.value;
            syncSelects(sortSelect, sortSelectDt, sortSelectDt.value);
            renderFeed();
        });
    }
    if (uniSelectDt) {
        uniSelectDt.addEventListener('change', function () {
            state.university = uniSelectDt.value;
            syncSelects(uniSelect, uniSelectDt, uniSelectDt.value);
            renderFeed();
        });
    }
    if (authorSelectDt) {
        authorSelectDt.addEventListener('change', function () {
            state.author = authorSelectDt.value;
            syncSelects(authorSelect, authorSelectDt, authorSelectDt.value);
            renderFeed();
        });
    }

    /* ── Search input ── */
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            state.query = searchInput.value;
            state.tag = '';
            if (stickySearch) stickySearch.value = searchInput.value;
            renderFeed();
        });
    }
    if (stickySearch) {
        stickySearch.addEventListener('input', function () {
            state.query = stickySearch.value;
            state.tag = '';
            if (searchInput) searchInput.value = stickySearch.value;
            renderFeed();
        });
    }

    /* ── Clear filters ── */
    function doClearFilters() {
        state.query = defaultState.query;
        state.tag = defaultState.tag;
        state.category = defaultState.category;
        state.sort = defaultState.sort;
        state.university = defaultState.university;
        state.author = defaultState.author;

        if (searchInput) searchInput.value = '';
        if (stickySearch) stickySearch.value = '';
        syncSelects(sortSelect, sortSelectDt, defaultState.sort);
        syncSelects(uniSelect, uniSelectDt, defaultState.university);
        syncSelects(authorSelect, authorSelectDt, defaultState.author);

        [filtersEl, filtersMobileEl].forEach(function (el) {
            if (!el) return;
            el.querySelectorAll('.filter-btn').forEach(function (button) {
                button.classList.toggle('filter-btn--active', button.getAttribute('data-filter') === defaultState.category);
            });
        });

        renderFeed();
    }
    if (clearButton)    clearButton.addEventListener('click', doClearFilters);
    if (clearButtonMob) clearButtonMob.addEventListener('click', doClearFilters);

    /* ── Mobile single "Filters" toggle ── */
    (function initMobileFiltersToggle() {
        var btn   = document.getElementById('archive-mobile-filters-btn');
        var panel = document.getElementById('archive-mobile-filters-panel');
        if (!btn || !panel) return;
        btn.addEventListener('click', function () {
            var isOpen = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
            if (isOpen) {
                panel.setAttribute('hidden', '');
            } else {
                panel.removeAttribute('hidden');
            }
        });
    }());

    /* ── Mobile accordion (legacy — hidden items kept for JS compatibility) ── */
    (function initAccordion() {
        var accordion = document.getElementById('archive-accordion');
        if (!accordion) return;
        var STORAGE_KEY = 'tbr-archive-accordion';
        var openSection = null;
        try { openSection = sessionStorage.getItem(STORAGE_KEY); } catch (e) {}

        accordion.querySelectorAll('.archive-accordion-item').forEach(function (item) {
            var trigger = item.querySelector('.archive-accordion-trigger');
            var panel   = item.querySelector('.archive-accordion-panel');
            if (!trigger || !panel) return;
            var key = item.getAttribute('data-accordion');

            function setOpen(open) {
                trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
                if (open) {
                    panel.removeAttribute('hidden');
                } else {
                    panel.setAttribute('hidden', '');
                }
            }

            /* Restore session state */
            if (openSection === key) setOpen(true);

            trigger.addEventListener('click', function () {
                var isOpen = trigger.getAttribute('aria-expanded') === 'true';
                /* Close all */
                accordion.querySelectorAll('.archive-accordion-item').forEach(function (it) {
                    var tr = it.querySelector('.archive-accordion-trigger');
                    var pn = it.querySelector('.archive-accordion-panel');
                    if (tr) tr.setAttribute('aria-expanded', 'false');
                    if (pn) pn.setAttribute('hidden', '');
                });
                if (!isOpen) {
                    setOpen(true);
                    try { sessionStorage.setItem(STORAGE_KEY, key); } catch (e) {}
                } else {
                    try { sessionStorage.removeItem(STORAGE_KEY); } catch (e) {}
                }
            });
        });
    }());

    /* ── Sticky toolbar ── */
    (function initStickyBar() {
        if (!stickyBar || !statsBar) return;
        var observer = new IntersectionObserver(function (entries) {
            var visible = entries[0].isIntersecting;
            stickyBar.classList.toggle('archive-sticky-bar--visible', !visible);
            stickyBar.setAttribute('aria-hidden', visible ? 'true' : 'false');
        }, { rootMargin: '-1px 0px 0px 0px', threshold: 0 });
        observer.observe(statsBar);

        /* Filters button: scroll to main search/filter toolbar */
        var stickyFiltersBtn = document.getElementById('archive-sticky-filters-btn');
        var toolbarEl = document.querySelector('.archive-toolbar');
        if (stickyFiltersBtn && toolbarEl) {
            stickyFiltersBtn.addEventListener('click', function () {
                toolbarEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                if (searchInput) searchInput.focus();
            });
        }
    }());

    /* ── Tag filter (called when a tag badge is clicked) ── */
    function setTagFilter(tag) {
        state.tag   = tag;
        state.query = '';
        if (searchInput) searchInput.value = '';
        if (stickySearch) stickySearch.value = '';
        renderFeed();
    }

    /* ── Active filter pills ── */
    function updateActivePills() {
        if (!activePillsEl) return;
        var pills = [];
        var sortLabels = { newest: 'Newest First', oldest: 'Oldest First', az: 'A–Z', za: 'Z–A' };

        if (state.category !== defaultState.category) pills.push({ label: state.category, key: 'category', reset: defaultState.category });
        if (state.university !== defaultState.university) pills.push({ label: state.university, key: 'university', reset: defaultState.university });
        if (state.author !== defaultState.author) pills.push({ label: state.author, key: 'author', reset: defaultState.author });
        if (state.sort !== defaultState.sort) pills.push({ label: sortLabels[state.sort] || state.sort, key: 'sort', reset: defaultState.sort });
        if (state.query) pills.push({ label: '\u201C' + state.query + '\u201D', key: 'query', reset: '' });
        if (state.tag) pills.push({ label: state.tag, key: 'tag', reset: '' });

        activePillsEl.innerHTML = '';
        if (pills.length === 0) {
            activePillsEl.setAttribute('hidden', '');
            return;
        }
        activePillsEl.removeAttribute('hidden');
        pills.forEach(function (p) {
            var pill = document.createElement('button');
            pill.type = 'button';
            pill.className = 'archive-active-pill';
            var labelSpan = document.createElement('span');
            labelSpan.textContent = p.label;
            var xSpan = document.createElement('span');
            xSpan.className = 'archive-active-pill__x';
            xSpan.setAttribute('aria-hidden', 'true');
            xSpan.textContent = '\u00D7';
            pill.appendChild(labelSpan);
            pill.appendChild(xSpan);
            pill.setAttribute('aria-label', 'Remove filter: ' + p.label);
            pill.addEventListener('click', function () {
                state[p.key] = p.reset;
                if (p.key === 'query' && searchInput) searchInput.value = '';
                if (p.key === 'query' && stickySearch) stickySearch.value = '';
                if (p.key === 'sort') syncSelects(sortSelect, sortSelectDt, p.reset);
                if (p.key === 'university') syncSelects(uniSelect, uniSelectDt, p.reset);
                if (p.key === 'author') syncSelects(authorSelect, authorSelectDt, p.reset);
                if (p.key === 'category') {
                    [filtersEl, filtersMobileEl].forEach(function (el) {
                        if (!el) return;
                        el.querySelectorAll('.filter-btn').forEach(function (b) {
                            b.classList.toggle('filter-btn--active', b.getAttribute('data-filter') === p.reset);
                        });
                    });
                }
                renderFeed();
            });
            activePillsEl.appendChild(pill);
        });
        var clearAll = document.createElement('button');
        clearAll.type = 'button';
        clearAll.className = 'archive-active-pill archive-active-pill--clear';
        clearAll.textContent = 'Clear All';
        clearAll.addEventListener('click', doClearFilters);
        activePillsEl.appendChild(clearAll);
    }

    /* ── Main render function ── */
    function renderFeed() {
        var queryLower = (state.tag || state.query || '').trim().toLowerCase();
        var hasActiveFilters = !isDefaultArchiveState(state, defaultState);

        var filtered = PUBLISHED_ARTICLES.filter(function (a) {
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
        PUBLISHED_ARTICLES.forEach(function (a, i) { indexMap[a.link] = i; });
        filtered = filtered.slice().sort(function (a, b) {
            if (state.sort === 'oldest') return indexMap[b.link] - indexMap[a.link];
            if (state.sort === 'az')     return (a.title || '').localeCompare(b.title || '');
            if (state.sort === 'za')     return (b.title || '').localeCompare(a.title || '');
            return indexMap[a.link] - indexMap[b.link]; /* newest (default) */
        });

        /* Results count — concise format */
        if (resultsCountEl) {
            if (hasActiveFilters) {
                resultsCountEl.textContent = filtered.length + ' Article' + (filtered.length !== 1 ? 's' : '') + ' Found';
            } else {
                resultsCountEl.textContent = filtered.length + ' Article' + (filtered.length !== 1 ? 's' : '');
            }
        }

        if (clearButton)    clearButton.disabled    = !hasActiveFilters;
        if (clearButtonMob) {
            clearButtonMob.disabled = !hasActiveFilters;
            clearButtonMob.classList.toggle('archive-clear-btn--visible', hasActiveFilters);
        }

        updateActivePills();

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
    if (feedEl && PUBLISHED_ARTICLES.length > 0) {
        feedEl.innerHTML = '';
        feedEl.appendChild(buildPublicationCard(PUBLISHED_ARTICLES[0], { featured: true }));
    }

    renderCompactPublicationCollection('[data-recent-secondary-feed]', PUBLISHED_ARTICLES.slice(1, 5));
    renderBrowseCards('[data-recent-category-grid]');
}

function initHomepageLatestArticle() {
    renderCompactPublicationCollection('[data-home-newest-feed]', PUBLISHED_ARTICLES.slice(0, 4));
}

function initCategoryPage() {
    var feeds = document.querySelectorAll('[data-category-feed]');
    if (!feeds.length) return;

    feeds.forEach(function (feedEl) {
        var category = feedEl.getAttribute('data-category-feed');
        if (!category) return;

        var filtered = PUBLISHED_ARTICLES.filter(function (article) {
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
        var filtered = PUBLISHED_ARTICLES.filter(function (article) {
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
    var authoredArticles = PUBLISHED_ARTICLES.filter(function (article) {
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
    var related = PUBLISHED_ARTICLES.filter(function (article) {
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
        return PUBLISHED_ARTICLES.indexOf(a) - PUBLISHED_ARTICLES.indexOf(b);
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

    var currentIndex = PUBLISHED_ARTICLES.findIndex(function (article) {
        return article.link === currentArticle.link;
    });
    if (currentIndex === -1) return;

    var previousArticle = currentIndex > 0 ? PUBLISHED_ARTICLES[currentIndex - 1] : null;
    var nextArticle = currentIndex < PUBLISHED_ARTICLES.length - 1 ? PUBLISHED_ARTICLES[currentIndex + 1] : null;

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

    var tags = article.tags;
    var MOBILE_MAX = 5;
    var isMobile = window.innerWidth <= 768;
    var collapseNeeded = isMobile && tags.length > MOBILE_MAX;

    tagsEl.innerHTML = '';

    var visibleTags = collapseNeeded ? tags.slice(0, MOBILE_MAX) : tags;
    visibleTags.forEach(function (tag) {
        var tagSpan = document.createElement('span');
        tagSpan.className = 'article-tag';
        tagSpan.textContent = tag;
        tagsEl.appendChild(tagSpan);
    });

    if (collapseNeeded) {
        var remaining = tags.length - MOBILE_MAX;
        var moreBtn = document.createElement('button');
        moreBtn.className = 'article-tag article-tag--more';
        moreBtn.textContent = '+' + remaining + ' more';
        moreBtn.setAttribute('aria-label', 'Show ' + remaining + ' more tags');
        moreBtn.addEventListener('click', function () {
            tags.slice(MOBILE_MAX).forEach(function (tag) {
                var tagSpan = document.createElement('span');
                tagSpan.className = 'article-tag';
                tagSpan.textContent = tag;
                tagsEl.insertBefore(tagSpan, moreBtn);
            });
            moreBtn.remove();
        });
        tagsEl.appendChild(moreBtn);
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
    initUniversityPage();
    initAuthorProfilePage();
    initArticlePageMetadata();
    initArticlePageTags();
    initRelatedArticles();
    initArticlePagination();
    initHomepageStats();
    initHomepageFeaturedEditors();
    initEditorialTeamPage();
    initBulletinCarousel();
});

function initBulletinCarousel() {
    const track = document.getElementById('bulletinTrack');
    const dotsContainer = document.getElementById('bulletinDots');
    if (!track || !dotsContainer) return;

    const slides = Array.from(track.children);
    const dots = Array.from(dotsContainer.querySelectorAll('.bulletin-dot'));
    let current = 0;
    let startX = 0;
    let isDragging = false;

    function goTo(index) {
        current = Math.max(0, Math.min(index, slides.length - 1));
        const slideWidth = slides[0].offsetWidth + parseInt(getComputedStyle(track).gap || '16', 10);
        track.style.transform = `translateX(-${current * slideWidth}px)`;
        dots.forEach((d, i) => {
            d.classList.toggle('bulletin-dot--active', i === current);
            d.setAttribute('aria-current', i === current ? 'true' : 'false');
        });
    }

    dots.forEach((dot) => {
        dot.addEventListener('click', () => goTo(parseInt(dot.dataset.index, 10)));
    });

    // Touch/swipe support
    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) {
            goTo(diff > 0 ? current + 1 : current - 1);
        }
        isDragging = false;
    }, { passive: true });

    // Keyboard navigation
    dotsContainer.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') goTo(current - 1);
        if (e.key === 'ArrowRight') goTo(current + 1);
    });
}

// ============================================
// Bulletin Viewer
// ============================================

(function initBulletinViewer() {
    const BULLETINS = {
        '001': {
            title: 'Volume 001',
            pages: [
                { src: 'IMG_5898.png',       alt: 'Volume 001 — Cover' },
                { src: 'IMG_5904.png',       alt: 'Volume 001 — Page 2' },
                { src: 'IMG_5905.png',       alt: 'Volume 001 — Page 3' }
            ]
        },
        '002': {
            title: 'Volume 002',
            pages: [
                { src: 'IMG_5912.png',       alt: 'Volume 002 — Cover' },
                { src: 'IMG_5913.png',       alt: 'Volume 002 — Page 2' },
                { src: 'IMG_5914.png',       alt: 'Volume 002 — Page 3' }
            ]
        },
        '003': {
            title: 'Volume 003',
            pages: [
                { src: 'slide1_cover.jpeg',              alt: 'Volume 003 — Cover' },
                { src: 'slide2_articles1-5.jpeg',        alt: 'Volume 003 — Page 2' },
                { src: 'slide3_articles6-10.jpeg',       alt: 'Volume 003 — Page 3' }
            ]
        }
    };

    let currentBulletin = null;
    let currentPage = 0;
    let touchStartX = 0;
    let preloaded = {};
    let openerEl = null;

    const overlay = document.getElementById('bulletinViewer');
    if (!overlay) return;

    const bvIndicator = document.getElementById('bvIndicator');
    const bvImage     = document.getElementById('bvImage');
    const bvImageWrap = document.getElementById('bvImageWrap');
    const bvClose     = document.getElementById('bvClose');
    const bvPrev      = document.getElementById('bvPrev');
    const bvNext      = document.getElementById('bvNext');
    const bvBackdrop  = document.getElementById('bvBackdrop');

    function preloadAdjacent(bulletin, pageIndex) {
        const pages = BULLETINS[bulletin].pages;
        [-1, 1].forEach(offset => {
            const i = pageIndex + offset;
            if (i >= 0 && i < pages.length) {
                const key = bulletin + ':' + i;
                if (!preloaded[key]) {
                    const img = new Image();
                    img.src = pages[i].src;
                    preloaded[key] = true;
                }
            }
        });
    }

    function showPage(pageIndex, direction) {
        const pages = BULLETINS[currentBulletin].pages;
        currentPage = Math.max(0, Math.min(pageIndex, pages.length - 1));
        const page = pages[currentPage];

        bvImageWrap.classList.remove('bv-fade-in');
        void bvImageWrap.offsetWidth; // reflow
        bvImage.src = page.src;
        bvImage.alt = page.alt;
        bvImageWrap.classList.add('bv-fade-in');

        bvIndicator.textContent = BULLETINS[currentBulletin].title + ' \u2022 ' + (currentPage + 1) + ' of 3';
        bvPrev.disabled = currentPage === 0;
        bvNext.disabled = currentPage === pages.length - 1;

        preloadAdjacent(currentBulletin, currentPage);
    }

    function openViewer(bulletinKey) {
        if (!BULLETINS[bulletinKey]) return;
        currentBulletin = bulletinKey;
        currentPage = 0;
        overlay.hidden = false;
        overlay.removeAttribute('hidden');
        overlay.classList.add('bv-visible');
        document.body.style.overflow = 'hidden';
        preloaded = {};
        showPage(0);
        bvClose.focus();
    }

    function closeViewer() {
        overlay.classList.remove('bv-visible');
        setTimeout(() => {
            overlay.hidden = true;
            document.body.style.overflow = '';
            if (openerEl) { openerEl.focus(); openerEl = null; }
        }, 250);
    }

    // Open via cover buttons
    document.addEventListener('click', function(e) {
        const btn = e.target.closest('[data-bulletin]');
        if (btn) {
            e.preventDefault();
            openerEl = btn;
            openViewer(btn.dataset.bulletin);
        }
    });

    bvClose.addEventListener('click', closeViewer);
    bvBackdrop.addEventListener('click', closeViewer);

    bvPrev.addEventListener('click', () => showPage(currentPage - 1));
    bvNext.addEventListener('click', () => showPage(currentPage + 1));

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (overlay.hidden) return;
        if (e.key === 'Escape') closeViewer();
        if (e.key === 'ArrowLeft')  showPage(currentPage - 1);
        if (e.key === 'ArrowRight') showPage(currentPage + 1);
    });

    // Swipe support
    const stage = document.getElementById('bvStage');
    stage.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    stage.addEventListener('touchend', e => {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 45) showPage(diff > 0 ? currentPage + 1 : currentPage - 1);
    }, { passive: true });
})();
