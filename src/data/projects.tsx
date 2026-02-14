import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill } from "react-icons/ri";
import {
  SiDocker,
  SiFastapi,
  SiJavascript,
  SiPython,
  SiPytorch,
  SiSqlite,
} from "react-icons/si";
const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  pytorch: {
    title: "PyTorch",
    bg: "black",
    fg: "white",
    icon: <SiPytorch />,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <SiFastapi />,
  },
  huggingface: {
    title: "HuggingFace",
    bg: "black",
    fg: "white",
    icon: <span>HF</span>,
  },
  vllm: {
    title: "vLLM",
    bg: "black",
    fg: "white",
    icon: <span><strong>v</strong>LLM</span>,
  },
  lora: {
    title: "LoRA",
    bg: "black",
    fg: "white",
    icon: <span><strong>L</strong>oRA</span>,
  },
  langchain: {
    title: "LangChain",
    bg: "black",
    fg: "white",
    icon: <span>LC</span>,
  },
  faiss: {
    title: "FAISS",
    bg: "black",
    fg: "white",
    icon: <span>F</span>,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  sqlite: {
    title: "SQLite",
    bg: "black",
    fg: "white",
    icon: <SiSqlite />,
  },
  restapi: {
    title: "REST APIs",
    bg: "black",
    fg: "white",
    icon: <span>API</span>,
  },
  tensorboard: {
    title: "TensorBoard",
    bg: "black",
    fg: "white",
    icon: <span>TB</span>,
  },
  wandb: {
    title: "Weights & Biases",
    bg: "black",
    fg: "white",
    icon: <span>W&B</span>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "nyayamitra",
    category: "Legal AI",
    title: "NyayaMitra",
    src: "/assets/projects-screenshots/nyayamitra.svg",
    screenshots: [],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.pytorch,
        PROJECT_SKILLS.vllm,
        PROJECT_SKILLS.huggingface,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.lora,
        PROJECT_SKILLS.restapi,
      ],
    },
    live: "https://nyayamitra-ai-chat.netlify.app/",
    github: "https://github.com/gokul77898/final-omilos-.git",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Distributed Legal LLM System (32B + LoRA)
          </TypographyP>
          <TypographyP className="font-mono">
            Production-grade Indian legal assistant built using a modular encoder-decoder architecture.
            Deployed Qwen2.5-32B-Instruct with LoRA adapter on A100 using vLLM.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Architecture</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Designed distributed pipeline separating 8B encoder (1024-d embeddings) and 32B decoder for cost-efficient scaling.</li>
            <li>Built backend orchestration API (POST /query) handling routing, validation, and response normalization.</li>
            <li>Implemented OpenAI-compatible inference interface using Hugging Face Inference Endpoints.</li>
            <li>Developed end-to-end testing to validate embedding generation and LoRA activation.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "mark",
    category: "AI Research",
    title: "MARK",
    src: "/assets/projects-screenshots/mark.svg",
    screenshots: [],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.pytorch,
        PROJECT_SKILLS.langchain,
        PROJECT_SKILLS.faiss,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.tensorboard,
        PROJECT_SKILLS.wandb,
      ],
    },
    live: "#",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Multi-Architecture Legal AI Research Framework
          </TypographyP>
          <TypographyP className="font-mono">
            Modular research system integrating transformer models, RAG pipelines, and reinforcement learning
            for legal document processing.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Implemented hierarchical attention architecture for long-document legal processing.</li>
            <li>Fine-tuned BERT/GPT-2 models for classification and summarization tasks.</li>
            <li>Integrated FAISS/ChromaDB vector stores with LangChain.</li>
            <li>Built PPO and DQN reinforcement learning pipelines for reward-based optimization.</li>
            <li>Developed YAML-driven experiment configurations with TensorBoard & W&B tracking.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "neurodrive",
    category: "Simulation",
    title: "NeuroDrive",
    src: "/assets/projects-screenshots/neurodrive.svg",
    screenshots: [],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.java,
      ],
    },
    live: "#",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Evolutionary Neural Network System
          </TypographyP>
          <TypographyP className="font-mono">
            Self-evolving neural network trained via genetic algorithms for autonomous driving simulation.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Designed neural architecture (9-20-2) with ReLU and Tanh activations.</li>
            <li>Implemented crossover and mutation operators with configurable rates.</li>
            <li>Simulated up to 1500 agents per generation.</li>
            <li>Achieved track completion within 5-10 evolutionary cycles.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "meal-planner",
    category: "Full-Stack App",
    title: "Meal Planner",
    src: "/assets/projects-screenshots/mealplanner.svg",
    screenshots: [],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
      ],
      backend: [
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.sqlite,
        PROJECT_SKILLS.restapi,
      ],
    },
    live: "#",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Full-Stack Meal Planning Application
          </TypographyP>
          <TypographyP className="font-mono">
            A complete meal planning application with a modern frontend and robust backend.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Built Next.js frontend with responsive UI and state management.</li>
            <li>Developed FastAPI backend with authentication, inventory tracking, and REST architecture.</li>
            <li>Implemented concurrent development workflow for frontend and backend services.</li>
          </ul>
        </div>
      );
    },
  },
];
export default projects;
