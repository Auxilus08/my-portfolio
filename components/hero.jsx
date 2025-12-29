"use client";
import { siteConfig } from "@/lib/constants";
import { Button } from "./ui/button";
import { Github, Sheet } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-20">
      <div className="grid gap-5">
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.1,
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          className="text-3xl leading-tight sm:text-4xl font-bold text-left"
        >
          Hey! I am{" "}
          <span className="bg-indigo-500 px-2 text-black">
            {siteConfig.name}
          </span>
          , a self taught Full Stack Developer!
        </motion.h1>
        <motion.p
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          className="text-base sm:text-lg text-foreground/80 "
        >
          I'm a passionate developer who loves building high-quality, scalable,
          and user-friendly apps. I've worked with a bunch of different
          technologies — from frontend to backend, and even native mobile
          development.
        </motion.p>
        <div className="flex items-center gap-3 w-full mt-2">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <Link href={siteConfig.github} target="_blank">
              <Button>
                Github <Github />
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <Link href={"/resume.pdf"} target="_blank">
              <Button variant="outline">
                Resume
                <Sheet />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
