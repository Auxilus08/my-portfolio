"use client";
import { siteConfig } from "@/lib/constants";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="pt-16">
      <div>
        <p className="text-sm text-foreground/90">
          Built by <span className="font-bold">{siteConfig.name}</span> :)) you
          can find me on{" "}
          <Link
            target="_blank"
            href={siteConfig.discord}
            className="underline font-bold"
          >
            Discord
          </Link>{" "}
          and{" "}
          <Link
            target="_blank"
            href={siteConfig.github}
            className="underline font-bold"
          >
            GitHub
          </Link>{" "}
          and don't forget to check out my{" "}
          <Link
            target="_blank"
            href={"/resume.pdf"}
            className="underline font-bold"
          >
            Resume!
          </Link>
        </p>
      </div>
    </motion.footer>
  );
}
