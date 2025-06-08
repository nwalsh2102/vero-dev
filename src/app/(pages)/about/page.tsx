import AboutMain from "@/components/about-page/about-main";
import ComingSoon from "@/components/coming-soon";
import CTA from "@/components/cta";
import HomeAbout from "@/components/home-page/about-home";
import NavbarSpacing from "@/components/home-page/navbar-spacing";
import PageHeader from "@/components/page-header";

export default function Page() {
  return (
    <>
      <NavbarSpacing classes="bg-background" />
      <PageHeader
        title="About"
        desc="Combining personalized attention with cutting-edge digital solutions to elevate your business."
      />
      <AboutMain />
      <CTA
        title="Ready to start your next project?"
        sub=""
        href="/contact"
        button="Contact us Today"
      />
      {/* <ComingSoon /> */}
    </>
  );
}
