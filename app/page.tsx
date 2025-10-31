import Link from "next/link"
import { Mail, Linkedin, Github, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import DotGridShader from "@/components/DotGridShader"
import ProjectCard from "@/components/project-card"
import AnimatedHeading from "@/components/animated-heading"
import RevealOnView from "@/components/reveal-on-view"

export default function Page() {
  const projects = [
    {
      title: "SnipShare",
      subtitle: "Real-time code snippet sharing platform",
      imageSrc: "/SnipShare.png",
      tags: ["Next.js", "Firebase", "Real-time"],
      href: "https://github.com/Auxilus08/SnipShare",
      priority: true,
      gradientFrom: "#0f172a",
      gradientTo: "#3b82f6",
    },
    {
      title: "GenPass",
      subtitle: "Secure multi-user password manager",
      imageSrc: "/GenPass.png",
      tags: ["Python", "AES-256", "Encryption"],
      href: "https://github.com/Auxilus08/GenPass",
      priority: false,
      gradientFrom: "#111827",
      gradientTo: "#10b981",
    },
    {
      title: "SpeakWithSigns",
      subtitle: "Android app for sign language learning",
      imageSrc: "/speakWithSigns.png",
      tags: ["Android", "Java", "Accessibility"],
      href: "https://github.com/unknown7751/SignLanguageApp_Java",
      priority: false,
      gradientFrom: "#0b132b",
      gradientTo: "#f59e0b",
    },
    {
      title: "GitHub Documentation Q&A MCP Server",
      subtitle: "AI-powered repository documentation assistant",
      imageSrc: "/GithubDocs.png",
      tags: ["Python", "LLMs", "GitHub API"],
      href: "https://github.com/Auxilus08/github-docs-mcp-server",
      priority: false,
      gradientFrom: "#0f172a",
      gradientTo: "#a78bfa",
    },
  ]

  return (
    <main className="bg-neutral-950 text-white">
      {/* HERO SECTION */}
      <section className="px-4 pt-4 pb-16 lg:pb-4">
        <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[420px_1fr]">
          {/* LEFT SIDEBAR: About & Contact */}
          <aside className="lg:sticky lg:top-4 lg:h-[calc(100svh-2rem)]">
            <RevealOnView
              as="div"
              intensity="hero"
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8"
              staggerChildren
            >
              {/* Texture background */}
              <div className="pointer-events-none absolute inset-0 opacity-5 mix-blend-soft-light">
                <DotGridShader />
              </div>

              <div>
                {/* Name & Title */}
                <div className="mb-2">
                  <h1 className="text-3xl font-black tracking-tight">Akshat Tiwari</h1>
                  <p className="text-sm font-medium text-blue-400">Full-stack Developer</p>
                </div>

                {/* Main Headline */}
                <AnimatedHeading
                  className="mt-6 text-3xl font-black leading-[1.05] tracking-tight sm:text-4xl"
                  lines={["Building with", "modern stacks"]}
                />

                {/* Location */}
                <div className="mt-4 flex items-center gap-2 text-sm text-white/70">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  Nagpur, India
                </div>

                {/* Description */}
                <p className="mt-6 text-sm leading-relaxed text-white/70">
                  Self-taught full-stack developer passionate about building pragmatic technological solutions.
                  Currently pursuing CS at RCOEM, Nagpur.
                </p>

                {/* CTA */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild size="sm" className="rounded-full bg-blue-600 hover:bg-blue-700">
                    <Link href="mailto:try.akshat8@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Email me
                    </Link>
                  </Button>
                </div>

                {/* Skills Section */}
                <div className="mt-10">
                  <p className="mb-3 text-xs font-semibold tracking-widest text-white/50">SKILLS</p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "TypeScript", "Node.js", "Python", "Java", "Postgres"].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300 border border-blue-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Education Section */}
                <div className="mt-8">
                  <p className="mb-3 text-xs font-semibold tracking-widest text-white/50">EDUCATION</p>
                  <div className="text-sm">
                    <p className="font-semibold">B.Tech Computer Science</p>
                    <p className="text-xs text-white/60">RCOEM, Nagpur • 2023–2027</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                <Link
                  href="https://github.com/Auxilus08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/akshat-tiwari24/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
                <Link
                  href="mailto:try.akshat8@gmail.com"
                  className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </Link>
              </div>
            </RevealOnView>
          </aside>

          {/* RIGHT CONTENT: Projects Grid */}
          <div className="space-y-4">
            {projects.map((p, idx) => (
              <ProjectCard
                key={p.title}
                title={p.title}
                subtitle={p.subtitle}
                imageSrc={p.imageSrc}
                tags={p.tags}
                href={p.href}
                priority={p.priority}
                gradientFrom={p.gradientFrom}
                gradientTo={p.gradientTo}
                imageContainerClassName="lg:h-full"
                containerClassName="lg:h-[calc(100svh-2rem)]"
                revealDelay={idx * 0.06}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
