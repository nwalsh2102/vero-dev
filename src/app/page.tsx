import HomeAbout from "@/components/home-page/about-home";
import HomeCTA from "@/components/home-page/cta";
import HomeFeatured from "@/components/home-page/featured-home";
import HomeHero from "@/components/home-page/hero-home";
import HomeDashboard from "@/components/home-page/home-dashboards";
import HomePricing from "@/components/home-page/pricing-home";

export default function Page() {
  return (
    <div>
      <HomeHero />
      {/* <HomeAboutTesting /> */}
      <HomeAbout />
      <HomeDashboard />
      <HomeFeatured />
      <HomePricing />
      <HomeCTA />
      {/* <div className="mb-[100em]" /> */}
    </div>
  );
}
