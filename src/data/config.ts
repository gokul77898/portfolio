const config = {
  title: "Gokul Venkatareddy | AI Engineer",
  description: {
    long: "Explore the portfolio of Gokul Venkatareddy, an AI Engineer focused on large language model systems, distributed inference architecture, and applied machine learning research. Discover my latest work, including NyayaMitra, MARK, NeuroDrive, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Gokul Venkatareddy, an AI Engineer building production-grade LLM systems and applied ML solutions.",
  },
  keywords: [
    "Gokul Venkatareddy",
    "portfolio",
    "AI Engineer",
    "machine learning",
    "LLM",
    "large language models",
    "NyayaMitra",
    "MARK",
    "NeuroDrive",
    "PyTorch",
    "vLLM",
    "FastAPI",
    "RAG",
    "reinforcement learning",
    "Next.js",
  ],
  author: "Gokul Venkatareddy",
  email: "Gokul.venkatareddy@gmail.com",
  site: "https://gokulvenkatareddy.dev",

  // for github stars button
  githubUsername: "gokul77898",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "#",
    linkedin: "https://www.linkedin.com/in/gokul-v-0a1a89310",
    instagram: "#",
    facebook: "#",
    github: "https://github.com/gokul77898",
  },
};
export { config };
