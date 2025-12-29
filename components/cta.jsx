"use client"

import { motion } from "framer-motion";
import ContactPopup from "./contact-popup";
import { Button } from "./ui/button";

export default function CallToAction() {
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
            }} className="mt-22 mb-5">
            <div className="rounded-xl border border-border bg-card grid gap-2 py-8 px-8">
                <h1 className="text-xl font-bold text-center">Let’s build something great together</h1>
                <p className="text-sm text-foreground/80 text-center">Whether you’re looking to collaborate on a project, need a developer for your team, or just want to chat about ideas — I’d love to hear from you. Let’s connect and see what we can create!</p>
                <ContactPopup><Button className="text-primary-foreground mt-5">Connect With Me</Button></ContactPopup>
            </div>
        </motion.div>
    )
}