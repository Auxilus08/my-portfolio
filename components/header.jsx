"use client";
import { siteConfig } from "@/lib/constants";

import { Button } from "./ui/button";
import {
  Dot,
  LucideExternalLink,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import ContactPopup from "./contact-popup";

export default function Header() {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="flex sticky shadow-xl top-8 z-50 bg-card/50 backdrop-blur-xl items-center border border-border justify-between py-1 px-1.5 rounded-3xl">
      <div className="flex items-center gap-3">
        <img
          className="h-10 w-10 rounded-2xl"
          src={`/profile.png`}
          alt={siteConfig.name}
        />
        <div className="w-fit grid">
          <h1 className="text-sm font-bold">{siteConfig.name}</h1>
          <div className="flex text-foreground/80 items-center">
            <span className="text-xs">Available for work</span>
            <Dot className="animate-ping h-4 w-4 text-green-400" />{" "}
          </div>
        </div>
      </div>
      <div>
        <ContactPopup>
            <Button className="rounded-2xl ">
              Contact Me
            </Button>
        </ContactPopup>
      </div>
    </motion.div>
  );
}
