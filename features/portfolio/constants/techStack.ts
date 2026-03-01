export interface TechItem {
    name: string;
    image: string;
}

export interface TechCategory {
    title: string;
    items: TechItem[];
}

export const techStack: TechCategory[] = [
    {
        title: "Programming Languages",
        items: [
            { name: "Go", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" },
            { name: "Dart", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" },
            { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
            { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
            { name: "Kotlin", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" },
            { name: "Swift", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg" },
        ],
    },
    {
        title: "Frameworks & Libraries",
        items: [
            { name: "SwiftUI", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg" },
            { name: "React JS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
            { name: "React Native", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
            { name: "Angular", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" },
            { name: "Svelte", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg" },
            { name: "Vue.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
            { name: "Nuxt.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg" },
            { name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
            { name: "Flutter", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
            { name: "Express.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
            { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
            { name: "Dart Frog", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" },
        ],
    },
    {
        title: "IDEs & Software",
        items: [
            { name: "VS Code", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
            { name: "Antigravity", image: "https://api.iconify.design/lucide/rocket.svg?color=%23ffffff" },
            { name: "Xcode", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xcode/xcode-original.svg" },
            { name: "Android Studio", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" },
            { name: "Figma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
            { name: "DBeaver", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dbeaver/dbeaver-original.svg" },
            { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
            { name: "Postman", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
        ],
    },
    {
        title: "Productivity & Others",
        items: [
            { name: "Jira", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" },
            { name: "Trello", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-original.svg" },
            { name: "Confluence", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original.svg" },
            { name: "Notion", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg" },
            { name: "Slack", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg" },
        ],
    },
];
