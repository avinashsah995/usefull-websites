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

export const websites: Website[] = [
    {
        id: 'remove-bg',
        title: 'Remove.bg',
        description: 'AI-powered background removal tool that works like magic. Remove backgrounds from images in seconds.',
        fullDescription: 'Remove.bg is an incredible AI-powered tool that automatically removes backgrounds from images with stunning accuracy. Whether you\'re a designer, photographer, or content creator, this tool saves hours of manual editing work. The AI intelligently detects subjects and creates perfect cutouts, even with complex edges like hair and fur.',
        url: 'https://www.remove.bg',
        category: 'Design',
        features: [
            'Automatic AI background removal',
            'High-quality edge detection',
            'Bulk image processing',
            'API integration available',
            'Works with portraits, products, and more'
        ],
        icon: '🎨'
    },
    {
        id: 'notion',
        title: 'Notion',
        description: 'All-in-one workspace for notes, docs, wikis, and project management. Your digital brain.',
        fullDescription: 'Notion is a powerful all-in-one workspace that combines notes, databases, wikis, calendars, and project management tools. It\'s incredibly flexible and can be customized to fit any workflow. Whether you\'re a student organizing notes, a team managing projects, or an individual building a personal knowledge base, Notion adapts to your needs with its block-based editor and powerful database features.',
        url: 'https://www.notion.so',
        category: 'Productivity',
        features: [
            'Rich-text editor with blocks',
            'Powerful databases and views',
            'Real-time collaboration',
            'Templates for any use case',
            'Cross-platform sync'
        ],
        icon: '📝'
    },
    {
        id: 'figma',
        title: 'Figma',
        description: 'Collaborative interface design tool. Design, prototype, and collaborate in real-time.',
        fullDescription: 'Figma is the leading collaborative design platform used by millions of designers and teams worldwide. It\'s a browser-based tool that allows multiple people to work on the same design file simultaneously. With powerful vector editing, prototyping, and design system features, Figma has revolutionized how teams create and iterate on digital products.',
        url: 'https://www.figma.com',
        category: 'Design',
        features: [
            'Real-time multiplayer collaboration',
            'Vector editing and pen tool',
            'Interactive prototyping',
            'Design systems and components',
            'Developer handoff tools'
        ],
        icon: '🎯'
    },
    {
        id: 'canva',
        title: 'Canva',
        description: 'Easy-to-use graphic design platform with thousands of templates for social media, presentations, and more.',
        fullDescription: 'Canva is a user-friendly graphic design platform that democratizes design for everyone. With thousands of professionally designed templates, a vast library of photos and graphics, and an intuitive drag-and-drop interface, anyone can create stunning visual content. From social media posts to presentations, posters to resumes, Canva makes professional design accessible to all.',
        url: 'https://www.canva.com',
        category: 'Design',
        features: [
            'Thousands of free templates',
            'Drag-and-drop interface',
            'Stock photos and graphics library',
            'Brand kit and custom fonts',
            'Team collaboration features'
        ],
        icon: '🎨'
    },
    {
        id: 'grammarly',
        title: 'Grammarly',
        description: 'AI-powered writing assistant that helps you write clearly and mistake-free across all your apps.',
        fullDescription: 'Grammarly is an advanced AI writing assistant that goes beyond basic spell-checking. It analyzes your writing for grammar, punctuation, style, tone, and clarity. With real-time suggestions and detailed explanations, Grammarly helps you improve your writing skills while ensuring your message is clear and professional. It works across websites, apps, and platforms.',
        url: 'https://www.grammarly.com',
        category: 'Productivity',
        features: [
            'Advanced grammar and spell checking',
            'Style and tone suggestions',
            'Plagiarism detection',
            'Works across all apps and sites',
            'Personal writing statistics'
        ],
        icon: '✍️'
    },
    {
        id: 'coolors',
        title: 'Coolors',
        description: 'Super fast color palette generator. Create perfect color schemes in seconds.',
        fullDescription: 'Coolors is the ultimate color scheme generator for designers and developers. With just a press of the spacebar, you can generate beautiful, harmonious color palettes. Lock the colors you like and generate new ones for the rest. Export your palettes in various formats, explore trending palettes from the community, and use the color picker to extract colors from images.',
        url: 'https://coolors.co',
        category: 'Design',
        features: [
            'Instant palette generation',
            'Lock and adjust individual colors',
            'Export in multiple formats',
            'Color picker from images',
            'Accessibility checker'
        ],
        icon: '🎨'
    },
    {
        id: 'carbon',
        title: 'Carbon',
        description: 'Create and share beautiful images of your source code. Perfect for presentations and social media.',
        fullDescription: 'Carbon is an elegant tool for creating stunning images of your source code. Customize the theme, syntax highlighting, window style, and background to create beautiful, shareable images perfect for presentations, documentation, or social media. With support for dozens of programming languages and themes, your code has never looked better.',
        url: 'https://carbon.now.sh',
        category: 'Development',
        features: [
            'Syntax highlighting for all languages',
            'Customizable themes and styles',
            'Multiple export formats',
            'Shareable links',
            'Twitter and Instagram optimized formats'
        ],
        icon: '💻'
    },
    {
        id: 'excalidraw',
        title: 'Excalidraw',
        description: 'Virtual whiteboard for sketching hand-drawn like diagrams. Perfect for brainstorming and wireframing.',
        fullDescription: 'Excalidraw is a free, open-source virtual whiteboard that lets you create beautiful hand-drawn style diagrams. It\'s perfect for sketching ideas, creating diagrams, wireframing interfaces, and collaborating with teams. The hand-drawn aesthetic makes everything feel more approachable and creative, while still being professional enough for presentations.',
        url: 'https://excalidraw.com',
        category: 'Productivity',
        features: [
            'Hand-drawn aesthetic',
            'Real-time collaboration',
            'Library of shapes and elements',
            'Export to PNG/SVG',
            'End-to-end encryption'
        ],
        icon: '✏️'
    },
    {
        id: 'untools',
        title: 'Untools',
        description: 'Collection of thinking tools and frameworks to help you solve problems and make better decisions.',
        fullDescription: 'Untools is a curated collection of mental models and thinking frameworks used by experts to solve problems, make decisions, and understand systems. Each tool is beautifully explained with examples and use cases. Whether you\'re making strategic decisions, solving complex problems, or trying to understand systems better, Untools provides the frameworks you need.',
        url: 'https://untools.co',
        category: 'Productivity',
        features: [
            'Mental models and frameworks',
            'Clear explanations with examples',
            'Problem-solving tools',
            'Decision-making frameworks',
            'Beautiful, interactive design'
        ],
        icon: '🧠'
    },
    {
        id: 'ray-so',
        title: 'Ray.so',
        description: 'Create beautiful images of your code with customizable themes and backgrounds.',
        fullDescription: 'Ray.so is a modern code screenshot tool that helps you create stunning, shareable images of your code. With beautiful themes, customizable backgrounds (including gradients), and various padding and aspect ratio options, you can make your code look absolutely gorgeous. Perfect for social media, presentations, or documentation.',
        url: 'https://ray.so',
        category: 'Development',
        features: [
            'Beautiful syntax highlighting',
            'Gradient backgrounds',
            'Customizable padding and ratios',
            'Dark and light themes',
            'Instant export to image'
        ],
        icon: '📸'
    },
    {
        id: 'photopea',
        title: 'Photopea',
        description: 'Free online photo editor supporting PSD, XCF, Sketch, and more. Like Photoshop in your browser.',
        fullDescription: 'Photopea is a powerful, free online photo editor that works right in your browser. It supports opening and editing PSD, XCF, Sketch, XD, and CDR files, making it compatible with Adobe Photoshop, GIMP, Sketch, Adobe XD, and CorelDRAW. With a familiar interface and professional features, it\'s an incredible free alternative to expensive desktop software.',
        url: 'https://www.photopea.com',
        category: 'Design',
        features: [
            'Supports PSD, XCF, Sketch files',
            'Professional editing tools',
            'Layers and masks',
            'Works entirely in browser',
            'Completely free to use'
        ],
        icon: '🖼️'
    },
    {
        id: 'readme-so',
        title: 'readme.so',
        description: 'Easiest way to create a README for your project. Simple editor with live preview.',
        fullDescription: 'readme.so is a simple online editor that helps you create beautiful README files for your GitHub projects. With a clean interface, customizable sections, and live preview, you can create professional documentation in minutes. It includes templates for common sections like installation, usage, and contribution guidelines.',
        url: 'https://readme.so',
        category: 'Development',
        features: [
            'Simple drag-and-drop editor',
            'Live markdown preview',
            'Pre-built section templates',
            'Download as markdown',
            'Copy to clipboard'
        ],
        icon: '📄'
    }
];
