"use client";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const exp = [
	{
		title: "Open-Source Developer",
		duration: "2023 - Present",
		description:
			"I also love contributing to open source! I’ve built a bunch of open-source projects myself from web apps, apis, micro apps to backend systems and even some AI stuff. Plus, I’ve contributed to several other open-source projects along the way.",
	}
];
export default function Experience() {
	return (
		<div className="grid gap-4 mt-14">
			<div className="mb-1">
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
					<Briefcase className="h-4 w-4 text-amber-500" />
					Working Experience <span className="ml-2 text-foreground/80">—</span>
				</motion.h1>
			</div>
			{exp.map((item, index) => (
				<motion.div
					initial={{ y: 30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{
						delay: index * 0.1,
						type: "spring",
						stiffness: 300,
						damping: 20,
					}}
					key={index}
				>
					<div className="border gap-1 grid hover:bg-card transition rounded-2xl px-4 py-3 relative group">
						<div className="flex items-center justify-between flex-wrap gap-px">
							<h2 className="text-base font-bold">{item.title}</h2>
							<p className="text-xs text-foreground/80">{item.duration}</p>
						</div>
						<p className="text-sm text-foreground/90">{item.description}</p>
					</div>
				</motion.div>
			))}
		</div>
	);
}
