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

      <div
        id="pricing"
        className="w-full h-dvh p-[clamp(1rem,5vw,3rem)] bg-emerald-200"
      >
        <div className="h-[70vh] mx-auto max-w-[90vw] space-y-6">
          <Card>
            <CardContent>
              <h1 className="text-6xl">Pricing - Currently unavailable</h1>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
