import CallToAction from "@/components/cta";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import LeetCode from "@/components/leetcode";
import OpenSource from "@/components/open-source";
import RecentWorks from "@/components/recent-works";

export default function Home() {
  return (
    <div className="px-6 max-w-3xl py-6 sm:py-10 mx-auto">
      <Header />
      <Hero />
      <RecentWorks />
      <OpenSource />
      <LeetCode />
      <Experience />
      <CallToAction/>
      <Footer />
    </div>
  );
}
