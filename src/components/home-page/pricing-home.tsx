import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import NavbarSpacing from "./navbar-spacing";

type Plan = {
  level: string;
  label: string;
  features: string[];
  price: string;
};

const plans: Plan[] = [
  {
    level: "basic",
    label: "Basic",
    features: [
      "Full website design",
      "Custom dashboard with Vero Dashboards",
      "Maintained & Hosted",
      "Unlimited Revisions",
    ],
    price: "50",
  },
  {
    level: "pro",
    label: "Pro",
    features: [
      "Full website design",
      "Custom dashboard with Vero Dashboards",
      "Maintained & Hosted",
      "Customizable emailing",
      "Priority Support",
      "Unlimited Revisions",
    ],
    price: "100",
  },
];

export default function HomePricing() {
  return (
    <>
      {/* <NavbarSpacing /> */}

      <div id="pricing" className="w-full p-[clamp(1rem,5vw,3rem)]">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <div className="text-center space-y-5">
                <h1 className="text-4xl">Pricing</h1>
                <p>
                  If you would like specific pricing, please contact us.
                  Otherwise take a look at the{" "}
                  <Link href="/pricing" className="text-accent">
                    pricing page
                  </Link>{" "}
                  to see a more detailed description
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
