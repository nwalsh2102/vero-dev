import HomeAbout from "@/components/home-page/about-home";
import CTA from "@/components/cta";
import HomeFeatured from "@/components/home-page/featured-home";
import HomeHero from "@/components/home-page/hero-home";
import HomeDashboard from "@/components/home-page/home-dashboards";
import HomeSeparator from "@/components/home-page/home-separator";
import HomePricing from "@/components/home-page/pricing-home";

export default function Page() {
  return (
    <div>
      <HomeHero />
      <HomeAbout />
      <HomeSeparator />
      <HomeDashboard />
      <HomeSeparator />
      <HomeFeatured />
      <HomeSeparator />
      <CTA
        title="Ready to transform your vision?"
        sub="Every great project starts with a conversation. Tell us about
                your goals, challenges, and ideas – let's explore what's
                possible together."
        href="/contact"
        button="Let's Talk About your Project"
      />
    </div>
  );
}
