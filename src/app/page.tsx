import HomeAbout from "@/components/home-page/about-home";
import HomeCTA from "@/components/home-page/cta";
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
      <HomeCTA />
    </div>
  );
}
