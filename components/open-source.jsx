"use client";
import { ExternalLink, GitPullRequest } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const summary = [
  { label: "Total PRs", value: "5" },
  { label: "Merged", value: "4" },
  { label: "Projects", value: "2 Apache projects" },
  { label: "Languages", value: "Java, Rust" },
  {
    label: "Focus",
    value: "Type safety / Error handling / Data integrity",
  },
];

const contributions = [
  {
    project: "Apache Gravitino",
    repo: "https://github.com/apache/gravitino",
    description:
      "High-performance, geo-distributed, and federated metadata lake",
    prs: [
      {
        id: "#8130",
        title: "Fix: trim trailing spaces in StringIdentifier.removeIdFromComment",
        url: "https://github.com/apache/gravitino/pull/8130",
        date: "Merged Aug 17, 2025",
        impact:
          "Trimmed trailing whitespace when removing identifiers from comments to keep outputs clean.",
        tech: "Java",
        detail: "Improved string processing consistency for metadata comments.",
      },
      {
        id: "#8038",
        title: "Fix: correct operation type in MetalakeOperations exception handler",
        url: "https://github.com/apache/gravitino/pull/8038",
        date: "Merged Aug 12, 2025",
        impact:
          "Reported accurate ENABLE/DISABLE operation types in exception handlers for better debugging.",
        tech: "Java",
        detail: "Sharpened error reporting paths for metalake operations.",
      },
      {
        id: "#7995",
        title:
          "Fix Paimon type conversion to preserve nullability for list elements and map values",
        url: "https://github.com/apache/gravitino/pull/7995",
        date: "Merged Aug 11, 2025",
        impact:
          "Preserved nullability when converting complex types between Gravitino and Paimon to protect data integrity.",
        tech: "Java",
        detail: "Guarded list element and map value nullability through type conversions.",
      },
    ],
  },
  {
    project: "Delta Kernel RS",
    repo: "https://github.com/delta-io/delta-kernel-rs",
    description: "Delta Lake kernel written in Rust",
    prs: [
      {
        id: "#1447",
        title: "Replace todo!() with proper error handling in deletion vector",
        url: "https://github.com/delta-io/delta-kernel-rs/pull/1447",
        date: "Merged Nov 6, 2025",
        impact:
          "Replaced panic-prone todo!() with explicit error handling for unsupported native serialization in inline bitmaps.",
        tech: "Rust",
        detail: "Improved production readiness and messaging; addressed issue #1441.",
      },
    ],
  },
];

export default function OpenSource() {
  return (
    <section className="grid gap-4 mt-14">
      <div className="mb-1 flex items-center justify-between gap-3 flex-wrap">
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
          <GitPullRequest className="h-4 w-4 text-emerald-500" />
          Open Source Contributions <span className="ml-2 text-foreground/80">-</span>
        </motion.h1>
        <motion.span
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.15,
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          className="text-xs text-foreground/80"
        >
          Java • Rust • Production-focused fixes
        </motion.span>
      </div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="border rounded-2xl px-4 py-3 grid gap-2"
      >
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h2 className="text-base font-semibold">Contribution Summary</h2>
          <span className="text-xs text-foreground/70">
            Focused on reliability, data safety, and clean error handling
          </span>
        </div>
        <div className="grid sm:grid-cols-3 gap-2 text-sm">
          {summary.map((item) => (
            <div
              key={item.label}
              className="border border-border/50 rounded-xl px-3 py-2 bg-card/40"
            >
              <p className="text-xs text-foreground/70">{item.label}</p>
              <p className="font-semibold text-foreground/90">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-foreground/80">
          <span className="border rounded-full px-3 py-1 bg-card/60">
            Type safety
          </span>
          <span className="border rounded-full px-3 py-1 bg-card/60">
            Data integrity
          </span>
          <span className="border rounded-full px-3 py-1 bg-card/60">
            Error handling
          </span>
          <span className="border rounded-full px-3 py-1 bg-card/60">
            Tests and reviews
          </span>
        </div>
      </motion.div>

      {contributions.map((project, projectIndex) => (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.3 + projectIndex * 0.1,
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          key={project.project}
          className="border rounded-2xl px-4 py-3 grid gap-3"
        >
          <div className="flex items-start justify-between gap-3 flex-wrap">
            <div className="grid gap-1">
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold">{project.project}</h2>
                <Link
                  href={project.repo}
                  target="_blank"
                  className="text-foreground/70 hover:text-foreground"
                  aria-label={`${project.project} repository`}
                >
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
              <p className="text-xs text-foreground/80">{project.description}</p>
            </div>
            <span className="text-xs text-foreground/70">Merged PRs</span>
          </div>

          <div className="grid gap-3">
            {project.prs.map((pr) => (
              <div
                key={pr.id}
                className="border border-border/50 rounded-xl px-3 py-2 bg-card/50 grid gap-1"
              >
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <Link
                      href={pr.url}
                      target="_blank"
                      className="text-sm font-semibold hover:underline"
                    >
                      {pr.id} — {pr.title}
                    </Link>
                    <p className="text-xs text-foreground/70">
                      {pr.date} • {pr.tech}
                    </p>
                  </div>
                  <span className="text-[11px] bg-emerald-500/15 text-emerald-600 border border-emerald-500/40 rounded-full px-2 py-0.5">
                    Merged
                  </span>
                </div>
                <p className="text-sm text-foreground/90">{pr.impact}</p>
                <p className="text-xs text-foreground/70">{pr.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
}
