import ComingSoon from "@/components/coming-soon";
import ContactForm from "@/components/contact-page/contact-form";
import PageHeader from "@/components/page-header";

export default function Page() {
  return (
    <>
      <PageHeader
        title="Contact"
        // desc="Vero Design Contact form for all inquiries"
        desc="Coming July 2025"
      />
      <ContactForm />
      {/* <ComingSoon /> */}
    </>
  );
}
