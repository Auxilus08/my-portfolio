import Link from "next/link"
import { Mail, Linkedin, Github, MapPin, Star, ExternalLink } from "lucide-react"
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

  const contributions = [
    { 
      name: "Apache Gravitino",
      description: "Contributed fixes and robustness improvements to Apache Gravitino.",
      language: "Java", 
      stars: 8500, 
      href: "https://github.com/apache/gravitino" 
    },
    { name: "SnipShare", 
      description: "Contributed development improvements: implemented new features, fixed bugs, added tests, and improved CI and code quality.", 
      language: "JavaScript", 
      stars: 3,
      href: "https://github.com/Auxilus08/snipshare" }
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

      {/* OPEN SOURCE CONTRIBUTIONS SECTION */}
      <section className="px-4 pb-16">
        <div className="mx-auto max-w-7xl">
          <RevealOnView intensity="medium" className="mb-8">
            <div className="text-center">
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Open Source Contributions</h2>
              <p className="mt-2 text-sm text-white/60">
                Contributing to the tools and libraries that power modern development
              </p>
              
              {/* Hacktoberfest Badge */}
              <div className="mt-6 flex justify-center">
                <Link
                  href="https://www.holopin.io/@akshat0824#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-orange-500/30 bg-orange-500/10 px-6 py-3 backdrop-blur-sm transition-all duration-300 hover:border-orange-500/50 hover:bg-orange-500/20"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/20">
                    <span className="text-lg">🎃</span>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-orange-300">Hacktoberfest 2024</p>
                    <p className="text-xs text-orange-400/80">Participant & Contributor</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-orange-400/60" />
                </Link>
              </div>
            </div>
          </RevealOnView>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {contributions.map((contribution, idx) => (
              <RevealOnView
                key={contribution.name}
                intensity="medium"
                delay={idx * 0.08}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60 p-6 transition-all duration-300 hover:border-blue-500/30"
              >
                {/* Texture background */}
                <div className="pointer-events-none absolute inset-0 opacity-5 mix-blend-soft-light">
                  <DotGridShader />
                </div>

                <div className="relative">
                  <div className="mb-4 flex items-start justify-between">
                    <h3 className="text-lg font-bold tracking-tight">{contribution.name}</h3>
                    <Link
                      href={contribution.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white/10 p-1.5 transition-colors hover:bg-white/20"
                      aria-label={`View ${contribution.name} on GitHub`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-white/70">
                    {contribution.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300 border border-blue-500/20">
                        {contribution.language}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-white/60">
                      <Star className="h-4 w-4 fill-yellow-500/80 text-yellow-500/80" />
                      <span className="font-medium">
                        {contribution.stars >= 1000
                          ? `${(contribution.stars / 1000).toFixed(1)}k`
                          : contribution.stars}
                      </span>
                    </div>
                  </div>
                </div>
              </RevealOnView>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
