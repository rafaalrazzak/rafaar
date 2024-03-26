// Define the interfaces for the data structures

interface Category {
    title: string;
    item: string[];
}

// Define the categories

const Languages: Category = {
    title: "Languages",
    item: ["TypeScript", "JavaScript", "HTML", "CSS"],
};

const Technologies: Category = {
    title: "Technologies",
    item: ["React.js", "Next.js", "Sass", "TailwindCSS", "HeadlessUI", "Supabase", "Firebase", "GraphQL", "MongoDB"],
};

const SoftwareAndTools: Category = {
    title: "Software and Tools",
    item: ["Photoshop", "Illustrator", "Premiere Pro", "Figma", "Node.js", "NGINX", "VSCode", "Git", "Vercel", "Netlify", "Heroku"],
};

export const tools = [Languages, Technologies, SoftwareAndTools];
