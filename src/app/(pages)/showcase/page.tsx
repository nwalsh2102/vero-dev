import ComingSoon from "@/components/coming-soon";
import PageHeader from "@/components/page-header";

export default function Page() {
  return (
    <>
      <PageHeader
        title="Showcase"
        // desc="Showcase of all Vero Design projects"
        desc="Coming July 2025"
      />
      <ComingSoon />
    </>
  );
}
