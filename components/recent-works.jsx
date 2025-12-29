"use client";
import { ExternalLink, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";

const repos = [
    {
      name: "SnipShare",
      description: "Real-time code snippet sharing platform",
      link: "https://github.com/Auxilus08/SnipShare",
    },
    {
      name: "GenPass",
      description: "Secure multi-user password manager",
      link: "https://github.com/Auxilus08/GenPass",
    },
    {
      name: "SpeakWithSigns",
      description: "Android app for sign language learning",
      link: "https://github.com/unknown7751/SignLanguageApp_Java",
    },
    {
      name: "GitHub Documentation Q&A MCP Server",
      description: "AI-powered repository documentation assistant",
      link: "https://github.com/Auxilus08/github-docs-mcp-server",
    },
];

export default function RecentWorks() {
  return (
    <section className="grid gap-4 -mt-1">
      <div className="mb-1 flex items-center justify-between">
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.1,
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          className="text-sm flex items-center gap-2"
        >
          <Sparkles className="h-4 w-4 text-amber-500" />
          Popular Projects{" "}
          <span className="text-xs text-foreground/80">(via github)</span>
          <span className="ml-2 text-foreground/80">—</span>
        </motion.h1>
        <motion.button
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          className="text-sm text-foreground/80 hover:text-foreground"
        >
          <Link
            href={siteConfig.github}
            className="text-xs underline text-foreground/80"
          >
            view all
          </Link>
        </motion.button>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {repos.map((repo, index) => (
          <Link href={repo.link} target="_blank" key={repo.name}>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <div className="border transition hover:bg-card rounded-2xl px-4 py-3 group">
                <h2 className="text-base font-bold flex items-center justify-between">
                  {repo.name.charAt(0).toUpperCase() + repo.name.slice(1)}
                  <ExternalLink className="-mt-2.5 -mr-1 text-foreground/90 opacity-0 transition group-hover:opacity-100 h-3 w-3" />
                </h2>
                <p className="text-foreground/90 text-sm">{repo.description}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
