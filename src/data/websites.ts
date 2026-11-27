export interface Website {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    url: string;
    category: string;
    features: string[];
    icon: string;
}

export interface WebsiteCategory {
    category: string;
    websites: Website[];
}

export const websites: WebsiteCategory[] = [
    {
        category: 'Mythical / Magical / Aesthetic',
        websites: [
            {
                id: 'neal-fun',
                title: 'Neal.fun',
                description: 'A playground of creative, weird, beautiful interactive projects.',
                fullDescription: 'Neal.fun hosts many creative interactive experiments like "The Size of Space", "Absurd Trolley Problems", and more — playful, educational, and beautifully made.',
                url: 'https://neal.fun',
                category: 'Mythical / Magical / Aesthetic',
                features: ['Interactive experiments', 'Educational & playful', 'Visually creative', 'Constantly updated'],
                icon: '✨'
            },
            {
                id: 'zoomquilt',
                title: 'ZoomQuilt',
                description: 'An infinite, trippy, endless zooming artwork.',
                fullDescription: 'ZoomQuilt is an endlessly zooming fantasy artwork — hypnotic, surreal, and immersive; it feels like zooming into a dreamscape.',
                url: 'https://zoomquilt.org',
                category: 'Mythical / Magical / Aesthetic',
                features: ['Infinite zoom', 'Surreal artwork', 'Hypnotic experience', 'Artistic'],
                icon: '🌀'
            },
            {
                id: 'endless-horse',
                title: 'Endless Horse',
                description: 'A ridiculous classic: scroll forever.',
                fullDescription: 'Endless Horse is an intentionally silly site where you can scroll a never-ending ASCII horse. It exists purely for the delightfully absurd.',
                url: 'http://endless.horse',
                category: 'Mythical / Magical / Aesthetic',
                features: ['Absurd humor', 'Endless scroll', 'Classic internet oddity'],
                icon: '🐴'
            },
            {
                id: 'the-useless-web',
                title: 'The Useless Web',
                description: 'One-click teleport to random weird, delightful websites.',
                fullDescription: 'The Useless Web launches you into small, strange, and hilarious corners of the internet with a single click — pure randomness and fun.',
                url: 'https://theuselessweb.com',
                category: 'Mythical / Magical / Aesthetic',
                features: ['Random sites', 'One-click fun', 'Weird & delightful'],
                icon: '🕳️'
            },
            {
                id: 'patience-is-a-virtue',
                title: 'Patience Is A Virtue',
                description: 'A tiny website that does nothing — teaches patience.',
                fullDescription: "Patience-is-a-virtue.org is a micro-site that literally does nothing except sit there, making you wait and (maybe) smile — comedic minimalism.",
                url: 'https://www.patience-is-a-virtue.org',
                category: 'Mythical / Magical / Aesthetic',
                features: ['Minimalist joke', 'Teaches patience', 'Internet oddity'],
                icon: '⌛'
            }
        ]
    },

    {
        category: 'Creative / Artsy',
        websites: [
            {
                id: 'silk-art',
                title: 'Silk (Weave Silk)',
                description: 'Interactive generative art tool — draw flowing symmetrical designs.',
                fullDescription: 'Silk (weavesilk.com) lets you create beautiful generative art with symmetry and flowing effects — instant aesthetic results with minimal effort.',
                url: 'https://weavesilk.com',
                category: 'Creative / Artsy',
                features: ['Generative art', 'Symmetry tools', 'Easy & beautiful', 'Export images'],
                icon: '🎨'
            },
            {
                id: 'scribble-diffusion',
                title: 'Scribble Diffusion',
                description: 'Turn rough doodles into polished AI-generated art.',
                fullDescription: 'Scribble Diffusion refines your sketches into finished artwork using AI image models — great for concepting and fun experiments.',
                url: 'https://scribblediffusion.com',
                category: 'Creative / Artsy',
                features: ['AI sketch refinement', 'Fast results', 'Fun & creative'],
                icon: '🖌️'
            },
            {
                id: 'radio-garden',
                title: 'Radio Garden',
                description: 'Spin a globe and listen to live radio from around the world.',
                fullDescription: 'Radio Garden presents live radio streams mapped to a rotatable globe — discover music, talk, and culture from any location on Earth.',
                url: 'https://radio.garden',
                category: 'Creative / Artsy',
                features: ['Live radio streams', 'Interactive globe', 'Discover international stations'],
                icon: '🌍'
            },
            {
                id: 'window-swap',
                title: 'WindowSwap',
                description: 'Look out of strangers’ windows from around the world.',
                fullDescription: 'WindowSwap shows submitted video/photographs of real windows from people globally — an introspective, travel-lite experience.',
                url: 'https://www.window-swap.com',
                category: 'Creative / Artsy',
                features: ['User-submitted views', 'Relaxing', 'Daily submissions'],
                icon: '🪟'
            },
            {
                id: 'a-soft-murmur',
                title: 'A Soft Murmur',
                description: 'Mix white noise and nature sounds to create focus ambience.',
                fullDescription: 'A Soft Murmur allows you to blend rain, thunder, waves, birds and more to build the perfect focus or relaxation soundscape.',
                url: 'https://asoftmurmur.com',
                category: 'Creative / Artsy',
                features: ['Custom sound mixer', 'Focus & relaxation', 'Timer option'],
                icon: '🎧'
            }
        ]
    },

    {
        category: 'Mind-Blowing / Thought-Provoking',
        websites: [
            {
                id: 'wait-but-why',
                title: 'Wait But Why',
                description: 'Long-form, funny, and insightful explainers on big topics.',
                fullDescription: 'Wait But Why publishes exceptionally well-researched and entertaining long-form posts about AI, society, life, and the future.',
                url: 'https://waitbutwhy.com',
                category: 'Mind-Blowing / Thought-Provoking',
                features: ['In-depth essays', 'Humorous voice', 'Big ideas'],
                icon: '🧠'
            },
            {
                id: 'futureme',
                title: 'FutureMe',
                description: 'Write an email to your future self.',
                fullDescription: 'FutureMe lets you send letters to yourself months or years later — a great tool for goals, reflection, and time-capsule thoughts.',
                url: 'https://www.futureme.org',
                category: 'Mind-Blowing / Thought-Provoking',
                features: ['Delayed emails', 'Self-reflection', 'Goal tracking'],
                icon: '📬'
            },
            {
                id: '10-minute-mail',
                title: '10 Minute Mail',
                description: 'Disposable temporary email addresses.',
                fullDescription: '10MinuteMail provides temporary email addresses that self-destruct after short durations — useful for avoiding spam during signups.',
                url: 'https://10minutemail.com',
                category: 'Mind-Blowing / Thought-Provoking',
                features: ['Disposable email', 'Avoid spam', 'Quick & easy'],
                icon: '⌚'
            },
            {
                id: 'justwatch',
                title: 'JustWatch',
                description: 'Find where movies & TV are streaming in your country.',
                fullDescription: 'JustWatch aggregates streaming availability so you can search a title and immediately see which services carry it and the current price/plan.',
                url: 'https://www.justwatch.com',
                category: 'Mind-Blowing / Thought-Provoking',
                features: ['Streaming search', 'Price comparisons', 'Region-aware'],
                icon: '🎬'
            }
        ]
    },

    {
        category: 'Learning / Productivity',
        websites: [
            {
                id: 'notion',
                title: 'Notion',
                description: 'All-in-one workspace for notes, docs, and project management.',
                fullDescription: 'Notion is a flexible workspace combining notes, databases, kanban boards, and wikis — highly customizable for individuals and teams.',
                url: 'https://www.notion.so',
                category: 'Learning / Productivity',
                features: ['Blocks & pages', 'Databases & views', 'Collaboration', 'Templates'],
                icon: '📝'
            },
            {
                id: 'khan-academy',
                title: 'Khan Academy',
                description: 'Free courses and exercises on many academic topics.',
                fullDescription: 'Khan Academy provides free lessons and practice in math, science, economics, and more — excellent for students and lifelong learners.',
                url: 'https://www.khanacademy.org',
                category: 'Learning / Productivity',
                features: ['Free courses', 'Exercises & practice', 'Progress tracking'],
                icon: '📚'
            },
            {
                id: 'desmos',
                title: 'Desmos',
                description: 'Powerful online graphing calculator.',
                fullDescription: 'Desmos is a user-friendly graphing calculator and math tool used for teaching, exploration, and plotting complex functions.',
                url: 'https://www.desmos.com',
                category: 'Learning / Productivity',
                features: ['Graphing calculator', 'Interactive sliders', 'Education-friendly'],
                icon: '📈'
            },
            {
                id: 'runpee',
                title: 'RunPee',
                description: 'Best times to take a bathroom break during a movie.',
                fullDescription: 'RunPee tells you the least important scenes in a movie so you can step out without missing key plot points — niche but handy.',
                url: 'https://runpee.com',
                category: 'Learning / Productivity',
                features: ['Movie break timings', 'Spoiler-free summaries', 'Wide movie coverage'],
                icon: '🏃'
            },
            {
                id: 'sleepyti-me',
                title: 'Sleepyti.me',
                description: 'Calculate optimal wake times based on sleep cycles.',
                fullDescription: 'Sleepyti.me uses sleep cycle science to estimate the best times to go to bed or wake up so you feel less groggy.',
                url: 'https://sleepyti.me',
                category: 'Learning / Productivity',
                features: ['Sleep cycle calculator', 'Wake-up timing', 'Simple interface'],
                icon: '😴'
            }
        ]
    },

    {
        category: 'Funny / Timepass',
        websites: [
            {
                id: 'pointer-pointer',
                title: 'Pointer Pointer',
                description: 'Finds an image of someone pointing exactly at your cursor.',
                fullDescription: 'Pointer Pointer is a low-friction fun site that matches your cursor position with random images of people pointing — amusing and oddly satisfying.',
                url: 'https://pointerpointer.com',
                category: 'Funny / Timepass',
                features: ['Instant amusement', 'Large image set', 'Simple concept'],
                icon: '👉'
            },
            {
                id: 'boredhumans',
                title: 'BoredHumans',
                description: 'Collection of AI games, generators, and silly tools.',
                fullDescription: 'BoredHumans offers a variety of AI-created curiosities — from text generators to image fun — perfect for time killing and inspiration.',
                url: 'https://boredhumans.com',
                category: 'Funny / Timepass',
                features: ['AI toys', 'Games & generators', 'Random fun'],
                icon: '🤖'
            },
            {
                id: 'quickdraw',
                title: 'QuickDraw',
                description: 'Google’s AI tries to guess what you are drawing in 20 seconds.',
                fullDescription: 'QuickDraw is an addictive doodling game where an AI attempts to identify your sketches — often hilarious and educational about model limits.',
                url: 'https://quickdraw.withgoogle.com',
                category: 'Funny / Timepass',
                features: ['AI guessing', 'Short rounds', 'Shareable result'],
                icon: '✏️'
            },
            {
                id: 'passive-aggressive-password-machine',
                title: 'xkcd — Passive-Aggressive Password Machine',
                description: 'Humorous password advice and generator comic.',
                fullDescription: 'xkcd comic #936 and associated ideas about memorable password creation (and the sarcastic tone) — a cult favorite among tech folks.',
                url: 'https://xkcd.com/936/',
                category: 'Funny / Timepass',
                features: ['Humor', 'Password guidance', 'Iconic comic'],
                icon: '🔐'
            }
        ]
    },

    {
        category: 'Fantasy / Myth-Themed Goodies',
        websites: [
            {
                id: 'donjon',
                title: 'Donjon Fantasy Generators',
                description: 'Random generators for names, dungeons, maps, and more.',
                fullDescription: 'Donjon offers tools for tabletop RPGs and fantasy writing — name generators, dungeon maps, random encounters, and worldbuilding helpers.',
                url: 'https://donjon.bin.sh',
                category: 'Fantasy / Myth-Themed Goodies',
                features: ['Name generators', 'Maps & dungeons', 'RPG tools'],
                icon: '⚔️'
            },
            {
                id: 'mythopedia',
                title: 'Mythopedia',
                description: 'Explore myths, gods, and folklore from around the world.',
                fullDescription: 'Mythopedia curates mythological stories, deities, and creatures with friendly explanations and artwork — great for creators and lore lovers.',
                url: 'https://mythopedia.com',
                category: 'Fantasy / Myth-Themed Goodies',
                features: ['Global myths', 'Illustrated entries', 'Readable summaries'],
                icon: '🐉'
            }
        ]
    },

    {
        category: 'Ultra Useful Tools',
        websites: [
            {
                id: 'remove-bg',
                title: 'Remove.bg',
                description: 'AI background removal for images.',
                fullDescription: 'Remove.bg automatically removes backgrounds from photos with high precision — a major time saver for designers and e-commerce.',
                url: 'https://www.remove.bg',
                category: 'Ultra Useful Tools',
                features: ['AI background removal', 'Bulk processing', 'API access', 'High accuracy'],
                icon: '✂️'
            },
            {
                id: 'tinywow',
                title: 'TinyWow',
                description: 'Collection of free file tools: PDFs, images, conversions, and more.',
                fullDescription: 'TinyWow offers a large suite of free utilities for PDFs, images, videos, conversions, and light AI tasks — handy for quick jobs.',
                url: 'https://tinywow.com',
                category: 'Ultra Useful Tools',
                features: ['PDF tools', 'Image/video converters', 'Free utilities'],
                icon: '🛠️'
            },
            {
                id: 'temp-mail',
                title: 'Temp-Mail',
                description: 'Disposable temporary email service.',
                fullDescription: 'Temp-Mail provides short-lived email addresses to prevent spam and protect your main inbox when signing up for services.',
                url: 'https://temp-mail.org',
                category: 'Ultra Useful Tools',
                features: ['Disposable email', 'Protects privacy', 'Quick signups'],
                icon: '📫'
            },
            {
                id: 'down-for-everyone-or-just-me',
                title: 'Down for Everyone or Just Me',
                description: 'Check if a website is down globally or just for you.',
                fullDescription: 'This tiny tool quickly tests whether a site is reachable from the public internet or if the outage is local to your connection.',
                url: 'https://downforeveryoneorjustme.com',
                category: 'Ultra Useful Tools',
                features: ['Quick uptime test', 'Simple UI', 'Handy troubleshooting'],
                icon: '🌐'
            },
            {
                id: 'pixabay',
                title: 'Pixabay',
                description: 'Free high-quality images and videos for creators.',
                fullDescription: 'Pixabay offers a large free media library (images, vectors, videos) with permissive licenses — great for designers and content creators.',
                url: 'https://pixabay.com',
                category: 'Ultra Useful Tools',
                features: ['Free media', 'High-quality assets', 'Commercial use allowed'],
                icon: '🖼️'
            },
            {
                id: 'pexels',
                title: 'Pexels',
                description: 'Free stock photos & videos for creative projects.',
                fullDescription: 'Pexels curates beautiful free photos and footage you can use in projects, presentations, and social media without attribution (in most cases).',
                url: 'https://www.pexels.com',
                category: 'Ultra Useful Tools',
                features: ['Free photos & videos', 'High resolution', 'Easy searching'],
                icon: '📸'
            },
            {
                id: 'unsplash',
                title: 'Unsplash',
                description: 'The internet’s best free image library.',
                fullDescription: 'Unsplash hosts a large collection of artistic, high-resolution images contributed by a community of photographers — great for inspiration and production use.',
                url: 'https://unsplash.com',
                category: 'Ultra Useful Tools',
                features: ['High-res photography', 'Creative community', 'Free usage options'],
                icon: '🌄'
            }
        ]
    },

    {
        category: 'Entertainment',
        websites: [
            {
                id: 'stagepeek-ent',
                title: 'StagePeek',
                description: 'Preview 2D & 3D concert seat views across 201 global venues.',
                fullDescription: 'StagePeek lets concertgoers inspect 2D seating maps and custom 3D arena sightline simulations with 1x–10x smartphone camera zoom across 201 stadiums and arenas before buying tickets.',
                url: 'https://stagepeek.live',
                category: 'Entertainment',
                features: ['201 3D venue models', '1x–10x camera zoom', 'Free 1st seat preview (no login)'],
                icon: '🎤'
            },
            {
                id: 'radio-garden-ent',
                title: 'Radio Garden (Entertainment)',
                description: 'Live global radio with a rotatable globe interface.',
                fullDescription: 'Radio Garden provides a delightful way to sample live radio from any region of the planet — great for music discovery and cultural listening.',
                url: 'https://radio.garden',
                category: 'Entertainment',
                features: ['Global radio', 'Interactive globe', 'Music discovery'],
                icon: '📻'
            },
            {
                id: 'window-swap-ent',
                title: 'WindowSwap (Entertainment)',
                description: 'View windows and scenery submitted by people globally.',
                fullDescription: 'WindowSwap is a relaxing site that shows real window views — calming, often cinematic, and perfect for a quick mental getaway.',
                url: 'https://www.window-swap.com',
                category: 'Entertainment',
                features: ['User views', 'Relaxation', 'Daily new content'],
                icon: '🪟'
            }
        ]
    },

    {
        category: 'Travel & Exploration',
        websites: [
            {
                id: 'geoguessr',
                title: 'GeoGuessr',
                description: 'Guess locations using Google Street View.',
                fullDescription: 'GeoGuessr drops you into a random Street View spot and challenges you to guess where you are — excellent for geography practice and fun.',
                url: 'https://www.geoguessr.com',
                category: 'Travel & Exploration',
                features: ['Street View game', 'Learning & fun', 'Single & multiplayer modes'],
                icon: '🗺️'
            },
            {
                id: 'airpano',
                title: 'AirPano',
                description: '360° aerial panoramas of famous locations.',
                fullDescription: 'AirPano offers high-quality aerial 360 panoramas and virtual tours of landmarks and natural wonders around the world.',
                url: 'https://airpano.com',
                category: 'Travel & Exploration',
                features: ['360 tours', 'Aerial photography', 'Immersive views'],
                icon: '🚁'
            }
        ]
    },

    {
        category: 'Tools for Creators',
        websites: [
            {
                id: 'pexels-creators',
                title: 'Pexels (Creators)',
                description: 'Free stock photos & videos for creators.',
                fullDescription: 'Pexels supplies free-to-use images and videos that are ideal for marketing assets, social posts, and project mockups.',
                url: 'https://pexels.com',
                category: 'Tools for Creators',
                features: ['Free assets', 'Large library', 'Easy licensing'],
                icon: '📸'
            },
            {
                id: 'unsplash-creators',
                title: 'Unsplash (Creators)',
                description: 'High-quality free photos for creative projects.',
                fullDescription: 'Unsplash provides inspiring, high-resolution photos from a community of photographers — excellent for headers, backgrounds, and marketing.',
                url: 'https://unsplash.com',
                category: 'Tools for Creators',
                features: ['Artist-grade photos', 'Large community', 'Free usage'],
                icon: '🌇'
            },
            {
                id: 'pixabay-creators',
                title: 'Pixabay (Creators)',
                description: 'Royalty-free images and media for creators.',
                fullDescription: 'Pixabay hosts vectors, photos, and videos free for commercial use — a pragmatic resource for creators on a budget.',
                url: 'https://pixabay.com',
                category: 'Tools for Creators',
                features: ['Free for commercial use', 'Various media types', 'Easy search'],
                icon: '🗂️'
            }
        ]
    },

    {
        category: 'Mindfulness & Wellness',
        websites: [
            {
                id: 'calmsound',
                title: 'CalmSound',
                description: 'Ambient nature soundtracks for relaxation.',
                fullDescription: 'CalmSound provides curated nature sound recordings (ocean, rain, birds) that help with sleep, focus, and relaxation.',
                url: 'https://calmsound.com',
                category: 'Mindfulness & Wellness',
                features: ['Nature tracks', 'Sleep aid', 'Focus sounds'],
                icon: '🌿'
            },
            {
                id: 'do-nothing-2-min',
                title: 'Do Nothing for 2 Minutes',
                description: 'A short micro-break of calm: do nothing and listen to waves for 2 minutes.',
                fullDescription: 'This tiny site encourages brief rest by requiring you to remain idle for 2 minutes while calming waves play — a neat reset tool.',
                url: 'https://www.donothingfor2minutes.com',
                category: 'Mindfulness & Wellness',
                features: ['Micro-breaks', 'Calming audio', 'Simple UX'],
                icon: '🧘'
            }
        ]
    },

    {
        category: 'Knowledge & Curiosity',
        websites: [
            {
                id: 'howstuffworks',
                title: 'HowStuffWorks',
                description: 'Explanations for how things actually work.',
                fullDescription: 'HowStuffWorks breaks down everyday technology, science, and culture into accessible articles and videos.',
                url: 'https://howstuffworks.com',
                category: 'Knowledge & Curiosity',
                features: ['Explainers', 'Accessible articles', 'Wide coverage'],
                icon: '🔍'
            },
            {
                id: 'mythopedia-knowledge',
                title: 'Mythopedia (Knowledge)',
                description: 'A friendly encyclopedia of myths and legends.',
                fullDescription: 'Mythopedia collects and explains mythology, folklore, and legendary figures from across cultures with readable summaries and art.',
                url: 'https://mythopedia.com',
                category: 'Knowledge & Curiosity',
                features: ['Myth entries', 'Illustrations', 'Cultural coverage'],
                icon: '📖'
            }
        ]
    },

    {
        category: 'Developer Tools',
        websites: [
            {
                id: 'json-formatter',
                title: 'JSON Formatter',
                description: 'Format, validate, and inspect JSON.',
                fullDescription: 'A lightweight tool to prettify, minify, and validate JSON payloads — useful for API debugging and data inspection.',
                url: 'https://jsonformatter.curiousconcept.com',
                category: 'Developer Tools',
                features: ['Prettify JSON', 'Validation', 'Error highlighting'],
                icon: '🧾'
            },
            {
                id: 'regex101',
                title: 'Regex101',
                description: 'Interactive regex tester with detailed explanations.',
                fullDescription: 'Regex101 offers live regex matching, a breakdown of patterns, and flavor selection — excellent for debugging and learning regex.',
                url: 'https://regex101.com',
                category: 'Developer Tools',
                features: ['Real-time tests', 'Explanation engine', 'Flavor support'],
                icon: '🧩'
            }
        ]
    },

    {
        category: 'Games & Interactive Fun',
        websites: [
            {
                id: 'agar-io',
                title: 'Agar.io',
                description: 'Simple multiplayer game where you grow by eating smaller cells.',
                fullDescription: 'Agar.io is a classic arcade-style multiplayer game: eat to grow, avoid bigger players, and dominate the leaderboard.',
                url: 'https://agar.io',
                category: 'Games & Interactive Fun',
                features: ['Multiplayer', 'Simple mechanics', 'Competitive play'],
                icon: '⚪'
            },
            {
                id: 'geoguessr-game',
                title: 'GeoGuessr (Game)',
                description: 'Street View geography guessing game.',
                fullDescription: 'GeoGuessr is an addictive geography game that drops you into random street views and challenges you to guess your location.',
                url: 'https://www.geoguessr.com',
                category: 'Games & Interactive Fun',
                features: ['Street View exploration', 'Competitive modes', 'Educational fun'],
                icon: '🧭'
            }
        ]
    },
    {
        category: 'Practical Utilities',
        websites: [
            {
                id: 'medical-certificate-generator',
                title: 'Medical Certificate Generator',
                description: 'Generate professional medical certificates quickly.',
                fullDescription:
                    'Medical Certificate Generator lets you quickly create downloadable medical certificates with customizable fields such as name, date, reason, and signature — perfect for students, workplaces, or personal records.',
                url: 'https://medicalcertificategenerator.com/',
                category: 'Practical Utilities',
                features: [
                    'Customizable medical certificates',
                    'Instant ready-to-download PDFs',
                    'Easy form interface',
                    'No signup required'
                ],
                icon: '📄'
            },
            {
                id: 'certificate-generator-online',
                title: 'Certificate Generator Online',
                description: 'Create and download certificates for events and achievements.',
                fullDescription:
                    'Certificate Generator Online lets you design and download various certificates (achievement, participation, completion etc.) using templates. It’s fast, free, and simple — ideal for teachers, organizers, and students.',
                url: 'https://www.onlinecertificategenerator.com/',
                category: 'Practical Utilities',
                features: [
                    'Editable certificate templates',
                    'Custom text and design',
                    'Export PDF or image',
                    'No account needed'
                ],
                icon: '🏆'
            },
            {
                id: 'qr-code-generator',
                title: 'QR Code Generator',
                description: 'Generate customizable QR codes instantly.',
                fullDescription:
                    'A powerful QR code generator that lets you create QR codes for URLs, text, Wi-Fi, payments, and more with color and branding options. Downloadable in various formats.',
                url: 'https://www.qr-code-generator.com/',
                category: 'Practical Utilities',
                features: [
                    'Supports multiple QR types',
                    'Custom design/colors',
                    'Download as PNG/SVG',
                    'Trackable codes with account'
                ],
                icon: '🔳'
            },
            {
                id: 'canva-resume-builder',
                title: 'Canva Resume Builder',
                description: 'Create stunning resumes with templates.',
                fullDescription:
                    'Canva’s Resume Builder offers hundreds of professionally designed resume templates you can edit online — ideal for job seekers who want a polished CV quickly.',
                url: 'https://www.canva.com/resumes/templates/',
                category: 'Practical Utilities',
                features: [
                    'Template library',
                    'Drag-and-drop editor',
                    'Download PDF/PNG',
                    'Free and premium options'
                ],
                icon: '🧾'
            },
            {
                id: 'wordtohtml',
                title: 'Word to HTML Converter',
                description: 'Convert Word documents to clean HTML code.',
                fullDescription:
                    'WordtoHTML converts text and formatting from a Word doc into well-structured HTML code — useful for web content, blogs, or email templates.',
                url: 'https://wordtohtml.net/',
                category: 'Practical Utilities',
                features: [
                    'Simple paste & convert',
                    'Clean HTML output',
                    'Preview included',
                    'Free online tool'
                ],
                icon: '📝'
            },
            {
                id: 'tiny-png',
                title: 'TinyPNG',
                description: 'Compress PNG & JPG images while preserving quality.',
                fullDescription:
                    'TinyPNG uses smart lossy compression techniques to shrink image file sizes significantly while keeping visual quality — perfect for web optimization.',
                url: 'https://tinypng.com/',
                category: 'Practical Utilities',
                features: [
                    'Lossless image compression',
                    'Batch upload',
                    'Fast results',
                    'API available'
                ],
                icon: '🖼️'
            },
            {
                id: 'remove-vocal',
                title: 'Vocal Remover / AI Karaoke Maker',
                description: 'Remove vocals from songs for karaoke or remixing.',
                fullDescription:
                    'This tool uses AI to split instrumental and vocal tracks, letting you create karaoke versions of songs or extract stems for music production.',
                url: 'https://vocalremover.org/',
                category: 'Practical Utilities',
                features: [
                    'AI vocal isolation',
                    'Download instrumentals',
                    'Supports many audio formats',
                    'Simple upload interface'
                ],
                icon: '🎤'
            },
            {
                id: 'tinywow-utilities',
                title: 'TinyWow Utilities',
                description: 'All-in-one online file and document toolset.',
                fullDescription:
                    'TinyWow provides free tools for PDFs, image conversion, videos, AI text, design, and more — a real Swiss Army knife of web utilities.',
                url: 'https://tinywow.com/',
                category: 'Practical Utilities',
                features: [
                    'PDF tools',
                    'Image & video converters',
                    'AI helpers',
                    'Free to use'
                ],
                icon: '🛠️'
            }
        ]
    },
    {
        category: 'Document Signing & E-Signature Tools',
        websites: [
            {
                id: 'dochub',
                title: 'DocHub',
                description: 'Sign PDFs, edit documents, and request signatures online.',
                fullDescription:
                    'DocHub is an easy-to-use online platform for signing PDFs, filling forms, sending signature requests, and storing documents. Perfect for quick personal or business document signing.',
                url: 'https://dochub.com',
                category: 'Document Signing & E-Signature Tools',
                features: [
                    'E-signature support',
                    'PDF editing',
                    'Form filling',
                    'Cloud storage integration'
                ],
                icon: '✍️'
            },
            {
                id: 'hellosign',
                title: 'HelloSign',
                description: 'Professional e-signature platform by Dropbox.',
                fullDescription:
                    'HelloSign is a business-grade e-signature solution allowing users to sign, send, and store legally binding signed documents. Great for teams and business workflows.',
                url: 'https://www.hellosign.com',
                category: 'Document Signing & E-Signature Tools',
                features: [
                    'Legally binding signatures',
                    'Audit trails',
                    'Business workflows',
                    'Team access'
                ],
                icon: '📝'
            },
            {
                id: 'smallpdf-sign',
                title: 'SmallPDF Sign Tool',
                description: 'Free simple online e-signature tool.',
                fullDescription:
                    'SmallPDF provides an extremely simple drag-and-drop tool for signing documents, adding initials, and sending signature links.',
                url: 'https://smallpdf.com/sign-pdf',
                category: 'Document Signing & E-Signature Tools',
                features: ['Simple UI', 'Fast signing', 'Works on all devices'],
                icon: '🔏'
            }
        ]
    },

    {
        category: 'Invoice & Receipt Makers',
        websites: [
            {
                id: 'invoicely',
                title: 'Invoicely',
                description: 'Create professional invoices quickly.',
                fullDescription:
                    'Invoicely enables freelancers and businesses to create and download invoices, track expenses, and manage clients all online.',
                url: 'https://invoicely.com',
                category: 'Invoice & Receipt Makers',
                features: [
                    'Custom invoice templates',
                    'Expense tracking',
                    'Client management',
                    'Multiple currencies'
                ],
                icon: '🧾'
            },
            {
                id: 'invoice-generator',
                title: 'Invoice Generator',
                description: 'Simple one-page invoice creator.',
                fullDescription:
                    'A fast, simple invoice creator where you just fill the fields and download the invoice instantly — no account needed.',
                url: 'https://invoice-generator.com',
                category: 'Invoice & Receipt Makers',
                features: [
                    'No signup required',
                    'Easy form entry',
                    'PDF download',
                    'Supports logos'
                ],
                icon: '💵'
            },
            {
                id: 'express-receipt',
                title: 'ExpressExpense Receipt Maker',
                description: 'Generate receipts in many styles.',
                fullDescription:
                    'ExpressExpense lets you create custom receipts with different templates — restaurant receipts, fuel bills, service invoices, and more.',
                url: 'https://expressexpense.com',
                category: 'Invoice & Receipt Makers',
                features: ['Multiple templates', 'Realistic designs', 'Fast generation'],
                icon: '🧮'
            }
        ]
    },

    {
        category: 'Calendar & Schedule Builders',
        websites: [
            {
                id: 'timetable-maker',
                title: 'Class Timetable Maker',
                description: 'Design schedules quickly and download them.',
                fullDescription:
                    'Create beautiful timetables for school, work, fitness, or study routines with drag-and-drop and export features.',
                url: 'https://timetablemaker.com',
                category: 'Calendar & Schedule Builders',
                features: ['Drag & drop', 'Multiple layouts', 'PDF download'],
                icon: '📆'
            },
            {
                id: 'canva-calendar',
                title: 'Canva Calendar Creator',
                description: 'Custom calendars with templates.',
                fullDescription:
                    'Canva offers ready-made templates to create annual, monthly, and weekly calendars with photos, colors, icons, and branding.',
                url: 'https://www.canva.com/calendars/templates/',
                category: 'Calendar & Schedule Builders',
                features: ['Photo calendars', 'Custom templates', 'Download options'],
                icon: '🗓️'
            }
        ]
    },

    {
        category: 'File Split / Merge / PDF Tools',
        websites: [
            {
                id: 'ilovepdf',
                title: 'ILovePDF',
                description: 'All-in-one PDF editing suite.',
                fullDescription:
                    'ILovePDF offers merging, splitting, compressing, converting, and editing PDF files — free, fast, and easy to use.',
                url: 'https://ilovepdf.com',
                category: 'File Split / Merge / PDF Tools',
                features: [
                    'PDF merge/split',
                    'Compress PDFs',
                    'Convert to/from Word & Excel',
                    'Rotate & edit features'
                ],
                icon: '📎'
            },
            {
                id: 'smallpdf',
                title: 'SmallPDF',
                description: 'Powerful online PDF toolkit.',
                fullDescription:
                    'SmallPDF provides a full suite for PDF manipulation including splitting, merging, signing, compressing, and converting.',
                url: 'https://smallpdf.com',
                category: 'File Split / Merge / PDF Tools',
                features: [
                    'PDF tools',
                    'Fast online processing',
                    'Easy UI',
                    'Free & paid modes'
                ],
                icon: '📄'
            },
            {
                id: 'pdfescape',
                title: 'PDFEscape',
                description: 'Edit, annotate, and form-fill PDFs online.',
                fullDescription:
                    'PDFEscape is used to edit, fill, annotate, and sign PDFs completely inside the browser — no downloads required.',
                url: 'https://pdfescape.com',
                category: 'File Split / Merge / PDF Tools',
                features: ['Annotation tools', 'Form editing', 'Security options'],
                icon: '✏️'
            }
        ]
    },

    {
        category: 'ID Card & Badge Makers',
        websites: [
            {
                id: 'idcreator',
                title: 'IDCreator',
                description: 'Create professional ID cards online.',
                fullDescription:
                    'IDCreator lets you design ID cards for employees, schools, gyms, and events with templates, barcodes, and QR codes.',
                url: 'https://idcreator.com',
                category: 'ID Card & Badge Makers',
                features: ['Templates', 'Logo upload', 'Barcode/QR support'],
                icon: '🪪'
            },
            {
                id: 'canva-id-card',
                title: 'Canva ID Card Templates',
                description: 'Design stylish ID cards using Canva templates.',
                fullDescription:
                    'Canva provides ready-made creative ID card templates for students, staff, visitors, events, and badges.',
                url: 'https://www.canva.com/id-cards/templates/',
                category: 'ID Card & Badge Makers',
                features: ['Creative design', 'Drag & drop', 'Print-ready files'],
                icon: '🎟️'
            }
        ]
    },

    {
        category: 'Contract / NDA Generators',
        websites: [
            {
                id: 'legalzoom-nda',
                title: 'LegalZoom NDA Creator',
                description: 'Generate legally valid NDAs.',
                fullDescription:
                    'LegalZoom guides you through simple steps to generate a professional, enforceable NDA document suitable for business or creative collaborations.',
                url: 'https://www.legalzoom.com/',
                category: 'Contract / NDA Generators',
                features: ['Legally compliant NDAs', 'Guided questions', 'Business use'],
                icon: '📑'
            },
            {
                id: 'lawdepot-contracts',
                title: 'LawDepot',
                description: 'Create contracts, agreements, and legal forms.',
                fullDescription:
                    'LawDepot lets users create rental agreements, NDAs, loan contracts, wills, and many more legal forms in minutes.',
                url: 'https://www.lawdepot.com',
                category: 'Contract / NDA Generators',
                features: ['Legal templates', 'Step-by-step builder', 'Downloadable PDFs'],
                icon: '⚖️'
            }
        ]
    },

    {
        category: 'Chart & Graph Generators',
        websites: [
            {
                id: 'chartgo',
                title: 'ChartGo',
                description: 'Simple online chart maker.',
                fullDescription:
                    'ChartGo is ideal for quickly creating charts like bar, pie, line, and area graphs with a simple form-based interface.',
                url: 'https://www.chartgo.com',
                category: 'Chart & Graph Generators',
                features: ['Easy chart creation', 'Multiple chart types', 'Export options'],
                icon: '📊'
            },
            {
                id: 'meta-chart',
                title: 'Meta-Chart',
                description: 'Free chart and graph builder.',
                fullDescription:
                    'Meta-Chart helps you create visually clean charts and graphs with customization options and quick export.',
                url: 'https://www.meta-chart.com',
                category: 'Chart & Graph Generators',
                features: ['Pie/Bar charts', 'Data entry forms', 'Downloadable images'],
                icon: '📈'
            },
            {
                id: 'chartblocks',
                title: 'ChartBlocks',
                description: 'Design beautiful charts and embed them anywhere.',
                fullDescription:
                    'ChartBlocks is a visual chart designer that lets you build fully customizable graphs and export them or embed them in websites.',
                url: 'https://www.chartblocks.com',
                category: 'Chart & Graph Generators',
                features: ['Custom chart builder', 'Embeddable charts', 'Data import'],
                icon: '📉'
            }
        ]
    },

    {
        category: 'Writing & Grammar Tools',
        websites: [
            {
                id: 'grammarly',
                title: 'Grammarly',
                description: 'AI-powered writing assistant for grammar and style.',
                fullDescription:
                    'Grammarly checks grammar, spelling, punctuation, and style in real-time. It offers suggestions to improve clarity, engagement, and delivery across emails, documents, and social media.',
                url: 'https://www.grammarly.com',
                category: 'Writing & Grammar Tools',
                features: ['Grammar checking', 'Style suggestions', 'Plagiarism detection', 'Tone analysis'],
                icon: '✍️'
            },
            {
                id: 'hemingway-editor',
                title: 'Hemingway Editor',
                description: 'Make your writing bold and clear.',
                fullDescription:
                    'Hemingway Editor highlights complex sentences, passive voice, and adverbs to help you write with clarity and impact — perfect for essays, articles, and professional communication.',
                url: 'https://hemingwayapp.com',
                category: 'Writing & Grammar Tools',
                features: ['Readability scoring', 'Sentence complexity analysis', 'Clear highlights', 'Desktop & web versions'],
                icon: '📝'
            },
            {
                id: 'quillbot',
                title: 'QuillBot',
                description: 'AI paraphrasing and summarization tool.',
                fullDescription:
                    'QuillBot helps you rephrase sentences, summarize articles, check grammar, and improve writing fluency using AI — great for students and content creators.',
                url: 'https://quillbot.com',
                category: 'Writing & Grammar Tools',
                features: ['Paraphrasing modes', 'Summarizer', 'Grammar checker', 'Citation generator'],
                icon: '🪶'
            },
            {
                id: 'languagetool',
                title: 'LanguageTool',
                description: 'Multilingual grammar and style checker.',
                fullDescription:
                    'LanguageTool supports over 30 languages and provides grammar, spelling, and style checking with browser extensions and integrations.',
                url: 'https://languagetool.org',
                category: 'Writing & Grammar Tools',
                features: ['30+ languages', 'Style suggestions', 'Browser extensions', 'Privacy-focused'],
                icon: '🌍'
            }
        ]
    },

    {
        category: 'Color & Design Inspiration',
        websites: [
            {
                id: 'coolors',
                title: 'Coolors',
                description: 'Fast color palette generator.',
                fullDescription:
                    'Coolors generates beautiful color palettes instantly with a spacebar press. Lock colors you like, export in multiple formats, and explore trending palettes.',
                url: 'https://coolors.co',
                category: 'Color & Design Inspiration',
                features: ['Instant palette generation', 'Export options', 'Color picker', 'Trending palettes'],
                icon: '🎨'
            },
            {
                id: 'adobe-color',
                title: 'Adobe Color',
                description: 'Create and explore color schemes.',
                fullDescription:
                    'Adobe Color (formerly Kuler) helps you create color themes using color wheel theory, extract themes from images, and explore community-created palettes.',
                url: 'https://color.adobe.com',
                category: 'Color & Design Inspiration',
                features: ['Color wheel tools', 'Extract from images', 'Accessibility checker', 'Save to Adobe apps'],
                icon: '🌈'
            },
            {
                id: 'colormind',
                title: 'Colormind',
                description: 'AI-powered color palette generator.',
                fullDescription:
                    'Colormind uses deep learning to generate color palettes that work well together. You can lock colors and generate variations or upload images for extraction.',
                url: 'http://colormind.io',
                category: 'Color & Design Inspiration',
                features: ['AI generation', 'Image extraction', 'Website mockups', 'Lock & regenerate'],
                icon: '🤖'
            },
            {
                id: 'dribbble',
                title: 'Dribbble',
                description: 'Design inspiration and community showcase.',
                fullDescription:
                    'Dribbble is a community where designers share their work — perfect for finding inspiration, trends, and hiring creative talent.',
                url: 'https://dribbble.com',
                category: 'Color & Design Inspiration',
                features: ['Design showcase', 'Hire designers', 'Trending work', 'Color search'],
                icon: '🏀'
            }
        ]
    },

    {
        category: 'Code Playgrounds & Editors',
        websites: [
            {
                id: 'codepen',
                title: 'CodePen',
                description: 'Front-end code playground and social coding.',
                fullDescription:
                    'CodePen is a social development environment for front-end designers and developers. Build and deploy web projects, showcase your work, and learn from others.',
                url: 'https://codepen.io',
                category: 'Code Playgrounds & Editors',
                features: ['Live preview', 'Social coding', 'Templates', 'Embed anywhere'],
                icon: '🖊️'
            },
            {
                id: 'jsfiddle',
                title: 'JSFiddle',
                description: 'Online code editor for web snippets.',
                fullDescription:
                    'JSFiddle is a simple tool for testing HTML, CSS, and JavaScript code snippets with instant preview — great for debugging and sharing examples.',
                url: 'https://jsfiddle.net',
                category: 'Code Playgrounds & Editors',
                features: ['Multiple frameworks', 'Collaboration', 'Version control', 'Easy sharing'],
                icon: '🎻'
            },
            {
                id: 'replit',
                title: 'Replit',
                description: 'Collaborative browser-based IDE.',
                fullDescription:
                    'Replit is a complete online IDE supporting 50+ languages with real-time collaboration, hosting, and multiplayer coding features.',
                url: 'https://replit.com',
                category: 'Code Playgrounds & Editors',
                features: ['50+ languages', 'Real-time collaboration', 'Hosting included', 'AI assistance'],
                icon: '💻'
            },
            {
                id: 'stackblitz',
                title: 'StackBlitz',
                description: 'Instant full-stack web IDE in the browser.',
                fullDescription:
                    'StackBlitz provides an instant, full-stack development environment powered by WebContainers — perfect for Angular, React, Vue, and Node.js projects.',
                url: 'https://stackblitz.com',
                category: 'Code Playgrounds & Editors',
                features: ['WebContainer technology', 'Full-stack support', 'GitHub integration', 'Instant startup'],
                icon: '⚡'
            }
        ]
    },

    {
        category: 'Video & GIF Tools',
        websites: [
            {
                id: 'ezgif',
                title: 'EZGIF',
                description: 'Simple online GIF maker and editor.',
                fullDescription:
                    'EZGIF provides tools to create, resize, crop, reverse, and optimize GIFs. You can also convert videos to GIFs and vice versa.',
                url: 'https://ezgif.com',
                category: 'Video & GIF Tools',
                features: ['GIF creation', 'Video to GIF', 'Optimization', 'Effects & editing'],
                icon: '🎞️'
            },
            {
                id: 'kapwing',
                title: 'Kapwing',
                description: 'Collaborative online video editor.',
                fullDescription:
                    'Kapwing is a modern video editing platform with templates, subtitles, resizing, and team collaboration — perfect for social media content creators.',
                url: 'https://www.kapwing.com',
                category: 'Video & GIF Tools',
                features: ['Video editing', 'Subtitle generator', 'Templates', 'Team collaboration'],
                icon: '🎬'
            },
            {
                id: 'clideo',
                title: 'Clideo',
                description: 'Simple video editing tools online.',
                fullDescription:
                    'Clideo offers easy-to-use tools for merging videos, adding music, compressing, converting formats, and creating slideshows — all in your browser.',
                url: 'https://clideo.com',
                category: 'Video & GIF Tools',
                features: ['Video merge', 'Compress & convert', 'Add audio', 'Slideshow maker'],
                icon: '📹'
            },
            {
                id: 'loom',
                title: 'Loom',
                description: 'Async video messaging for work.',
                fullDescription:
                    'Loom lets you record quick videos of your screen, camera, or both to communicate faster than typing — perfect for tutorials, feedback, and team updates.',
                url: 'https://www.loom.com',
                category: 'Video & GIF Tools',
                features: ['Screen recording', 'Camera recording', 'Easy sharing', 'Comments & reactions'],
                icon: '🎥'
            }
        ]
    },

    {
        category: 'Music & Audio Creation',
        websites: [
            {
                id: 'soundtrap',
                title: 'Soundtrap',
                description: 'Online music studio for everyone.',
                fullDescription:
                    'Soundtrap is a collaborative online DAW (digital audio workstation) perfect for making music, podcasts, and beats with instruments, loops, and effects.',
                url: 'https://www.soundtrap.com',
                category: 'Music & Audio Creation',
                features: ['Multi-track recording', 'Virtual instruments', 'Collaboration', 'Podcast tools'],
                icon: '🎵'
            },
            {
                id: 'audacity-online',
                title: 'TwistedWave Online',
                description: 'Browser-based audio editor.',
                fullDescription:
                    'TwistedWave is a simple yet powerful online audio editor for trimming, mixing, applying effects, and processing audio files without downloads.',
                url: 'https://twistedwave.com/online',
                category: 'Music & Audio Creation',
                features: ['Audio editing', 'Effects processing', 'Multiple formats', 'Cloud storage'],
                icon: '🎧'
            },
            {
                id: 'beepbox',
                title: 'BeepBox',
                description: 'Simple online chiptune music maker.',
                fullDescription:
                    'BeepBox is an easy-to-use tool for creating chiptune-style music in your browser — great for game soundtracks, ringtones, and retro music.',
                url: 'https://www.beepbox.co',
                category: 'Music & Audio Creation',
                features: ['Chiptune creation', 'Pattern editor', 'Export options', 'No signup needed'],
                icon: '🎮'
            },
            {
                id: 'musiclab-chrome',
                title: 'Chrome Music Lab',
                description: 'Playful music experiments by Google.',
                fullDescription:
                    'Chrome Music Lab makes learning music fun through hands-on experiments with rhythm, chords, melody, and sound waves.',
                url: 'https://musiclab.chromeexperiments.com',
                category: 'Music & Audio Creation',
                features: ['Interactive experiments', 'Educational', 'No musical knowledge needed', 'Visual learning'],
                icon: '🎹'
            }
        ]
    },

    {
        category: 'Screenshot & Screen Recording',
        websites: [
            {
                id: 'lightshot',
                title: 'Lightshot',
                description: 'Fast screenshot tool with editing.',
                fullDescription:
                    'Lightshot lets you capture screenshots, annotate them instantly, and share via link. Available as desktop app and browser extension.',
                url: 'https://app.prntscr.com',
                category: 'Screenshot & Screen Recording',
                features: ['Quick capture', 'Instant editing', 'Cloud upload', 'Search similar images'],
                icon: '📸'
            },
            {
                id: 'screencastify',
                title: 'Screencastify',
                description: 'Simple screen recorder for Chrome.',
                fullDescription:
                    'Screencastify is a Chrome extension for recording your screen, webcam, and audio — perfect for tutorials, presentations, and video messages.',
                url: 'https://www.screencastify.com',
                category: 'Screenshot & Screen Recording',
                features: ['Screen & webcam recording', 'Editing tools', 'Easy sharing', 'Annotations'],
                icon: '🎬'
            },
            {
                id: 'awesome-screenshot',
                title: 'Awesome Screenshot',
                description: 'Capture and annotate screenshots.',
                fullDescription:
                    'Awesome Screenshot captures full pages, selected areas, or visible portions with annotation tools and blur options for sensitive information.',
                url: 'https://www.awesomescreenshot.com',
                category: 'Screenshot & Screen Recording',
                features: ['Full page capture', 'Annotation tools', 'Blur sensitive info', 'Video recording'],
                icon: '📷'
            }
        ]
    },

    {
        category: 'Mockup & Prototyping',
        websites: [
            {
                id: 'figma',
                title: 'Figma',
                description: 'Collaborative interface design tool.',
                fullDescription:
                    'Figma is a powerful browser-based design tool for UI/UX design, prototyping, and collaboration — industry standard for product teams.',
                url: 'https://www.figma.com',
                category: 'Mockup & Prototyping',
                features: ['Real-time collaboration', 'Prototyping', 'Design systems', 'Developer handoff'],
                icon: '🎨'
            },
            {
                id: 'mockuphone',
                title: 'Mockuphone',
                description: 'Free device mockup generator.',
                fullDescription:
                    'Mockuphone lets you wrap your screenshots in various device frames (phones, tablets, laptops) for presentations and portfolios.',
                url: 'https://mockuphone.com',
                category: 'Mockup & Prototyping',
                features: ['Multiple devices', 'Free download', 'High resolution', 'Quick generation'],
                icon: '📱'
            },
            {
                id: 'smartmockups',
                title: 'Smartmockups',
                description: 'Create stunning product mockups.',
                fullDescription:
                    'Smartmockups offers thousands of mockup templates for devices, print, apparel, and more with drag-and-drop simplicity.',
                url: 'https://smartmockups.com',
                category: 'Mockup & Prototyping',
                features: ['Thousands of templates', 'Drag & drop', 'High quality', 'Fast rendering'],
                icon: '🖼️'
            },
            {
                id: 'marvel',
                title: 'Marvel',
                description: 'Design, prototype, and collaborate.',
                fullDescription:
                    'Marvel is an all-in-one platform for designing, prototyping, and collaborating on digital products with user testing features built in.',
                url: 'https://marvelapp.com',
                category: 'Mockup & Prototyping',
                features: ['Prototyping', 'User testing', 'Handoff specs', 'Design repository'],
                icon: '⚡'
            }
        ]
    },

    {
        category: 'Data Visualization',
        websites: [
            {
                id: 'tableau-public',
                title: 'Tableau Public',
                description: 'Free data visualization platform.',
                fullDescription:
                    'Tableau Public allows you to create interactive data visualizations and share them online — perfect for journalists, researchers, and data enthusiasts.',
                url: 'https://public.tableau.com',
                category: 'Data Visualization',
                features: ['Interactive dashboards', 'Large dataset support', 'Public sharing', 'Embed anywhere'],
                icon: '📊'
            },
            {
                id: 'datawrapper',
                title: 'Datawrapper',
                description: 'Create charts and maps for news and stories.',
                fullDescription:
                    'Datawrapper is used by journalists and organizations to create beautiful, responsive charts, maps, and tables without coding.',
                url: 'https://www.datawrapper.de',
                category: 'Data Visualization',
                features: ['No-code charts', 'Maps & locators', 'Responsive design', 'Export & embed'],
                icon: '🗺️'
            },
            {
                id: 'rawgraphs',
                title: 'RAWGraphs',
                description: 'Open-source data visualization framework.',
                fullDescription:
                    'RAWGraphs bridges the gap between spreadsheets and vector graphics, letting you create custom visualizations and export them as SVG or PNG.',
                url: 'https://www.rawgraphs.io',
                category: 'Data Visualization',
                features: ['Custom visualizations', 'CSV import', 'SVG export', 'No coding needed'],
                icon: '📈'
            }
        ]
    },

    {
        category: 'Translation & Language Learning',
        websites: [
            {
                id: 'deepl',
                title: 'DeepL',
                description: 'AI-powered translation with nuance.',
                fullDescription:
                    'DeepL provides highly accurate translations that capture nuance and context better than traditional tools — supports 31 languages.',
                url: 'https://www.deepl.com',
                category: 'Translation & Language Learning',
                features: ['Context-aware translation', '31 languages', 'Document translation', 'Writing suggestions'],
                icon: '🌐'
            },
            {
                id: 'duolingo',
                title: 'Duolingo',
                description: 'Learn languages for free, gamified.',
                fullDescription:
                    'Duolingo makes language learning fun with bite-sized lessons, game-like progression, and a friendly owl companion. Learn 40+ languages.',
                url: 'https://www.duolingo.com',
                category: 'Translation & Language Learning',
                features: ['40+ languages', 'Gamified learning', 'Mobile & web', 'Progress tracking'],
                icon: '🦉'
            },
            {
                id: 'forvo',
                title: 'Forvo',
                description: 'Pronunciation dictionary with native speakers.',
                fullDescription:
                    "Forvo is the world's largest pronunciation dictionary where you can hear words spoken by native speakers in hundreds of languages.",
                url: 'https://forvo.com',
                category: 'Translation & Language Learning',
                features: ['Native pronunciations', '400+ languages', 'User contributions', 'API available'],
                icon: '🗣️'
            },
            {
                id: 'reverso-context',
                title: 'Reverso Context',
                description: 'Translation in context from real sources.',
                fullDescription:
                    'Reverso Context shows translations in real-world examples from millions of texts, helping you understand usage and nuance.',
                url: 'https://context.reverso.net',
                category: 'Translation & Language Learning',
                features: ['Context examples', 'Multiple languages', 'Conjugation tools', 'Pronunciation'],
                icon: '📖'
            }
        ]
    },

    {
        category: 'Email & Newsletter Tools',
        websites: [
            {
                id: 'mailchimp',
                title: 'Mailchimp',
                description: 'Email marketing and automation platform.',
                fullDescription:
                    'Mailchimp helps you design email campaigns, automate marketing, build landing pages, and analyze results — perfect for businesses and creators.',
                url: 'https://mailchimp.com',
                category: 'Email & Newsletter Tools',
                features: ['Email campaigns', 'Marketing automation', 'Analytics', 'Templates'],
                icon: '📧'
            },
            {
                id: 'substack',
                title: 'Substack',
                description: 'Start a paid newsletter in minutes.',
                fullDescription:
                    'Substack makes it simple to start a paid newsletter with built-in payment processing, subscriber management, and a clean reading experience.',
                url: 'https://substack.com',
                category: 'Email & Newsletter Tools',
                features: ['Paid subscriptions', 'Simple publishing', 'Built-in payments', 'Reader network'],
                icon: '📰'
            },
            {
                id: 'buttondown',
                title: 'Buttondown',
                description: 'Minimal, elegant newsletter tool.',
                fullDescription:
                    'Buttondown is a small, elegant tool for sending newsletters with Markdown support, automation, and a privacy-first approach.',
                url: 'https://buttondown.email',
                category: 'Email & Newsletter Tools',
                features: ['Markdown support', 'Privacy-focused', 'Automation', 'API access'],
                icon: '✉️'
            }
        ]
    },

    {
        category: 'Project Management & Collaboration',
        websites: [
            {
                id: 'trello',
                title: 'Trello',
                description: 'Visual project management with boards and cards.',
                fullDescription:
                    'Trello uses boards, lists, and cards to organize projects and tasks in a flexible, visual way — perfect for teams of any size.',
                url: 'https://trello.com',
                category: 'Project Management & Collaboration',
                features: ['Kanban boards', 'Power-ups', 'Team collaboration', 'Mobile apps'],
                icon: '📋'
            },
            {
                id: 'asana',
                title: 'Asana',
                description: 'Work management platform for teams.',
                fullDescription:
                    'Asana helps teams organize, track, and manage work with project timelines, task dependencies, and multiple viewing options.',
                url: 'https://asana.com',
                category: 'Project Management & Collaboration',
                features: ['Task management', 'Timeline view', 'Workload tracking', 'Integrations'],
                icon: '✅'
            },
            {
                id: 'monday',
                title: 'Monday.com',
                description: 'Work operating system for any workflow.',
                fullDescription:
                    'Monday.com is a customizable work OS that powers teams to run projects and workflows with confidence — highly visual and flexible.',
                url: 'https://monday.com',
                category: 'Project Management & Collaboration',
                features: ['Custom workflows', 'Automation', 'Multiple views', 'Integrations'],
                icon: '🎯'
            },
            {
                id: 'miro',
                title: 'Miro',
                description: 'Online collaborative whiteboard platform.',
                fullDescription:
                    'Miro is an infinite canvas for brainstorming, planning, and collaborating visually with your team — perfect for workshops and agile teams.',
                url: 'https://miro.com',
                category: 'Project Management & Collaboration',
                features: ['Infinite canvas', 'Templates', 'Real-time collaboration', 'Integrations'],
                icon: '🖼️'
            }
        ]
    },

    {
        category: 'URL Shorteners & Link Management',
        websites: [
            {
                id: 'bitly',
                title: 'Bitly',
                description: 'Shorten, share, and track links.',
                fullDescription:
                    'Bitly creates short, memorable links and provides analytics on clicks, geographic data, and referrers — essential for social media and marketing.',
                url: 'https://bitly.com',
                category: 'URL Shorteners & Link Management',
                features: ['Link shortening', 'Analytics', 'Custom domains', 'QR codes'],
                icon: '🔗'
            },
            {
                id: 'tinyurl',
                title: 'TinyURL',
                description: 'Simple URL shortener since 2002.',
                fullDescription:
                    'TinyURL is one of the original URL shorteners — fast, reliable, and straightforward with no account required for basic shortening.',
                url: 'https://tinyurl.com',
                category: 'URL Shorteners & Link Management',
                features: ['Free shortening', 'Custom aliases', 'No expiration', 'Preview feature'],
                icon: '🔗'
            },
            {
                id: 'linktree',
                title: 'Linktree',
                description: 'One link for all your content.',
                fullDescription:
                    'Linktree lets you create a single landing page with multiple links — perfect for social media bios and creator profiles.',
                url: 'https://linktr.ee',
                category: 'URL Shorteners & Link Management',
                features: ['Multiple links', 'Customization', 'Analytics', 'Integrations'],
                icon: '🌳'
            }
        ]
    }

];

