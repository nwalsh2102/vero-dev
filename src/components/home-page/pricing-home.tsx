import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import NavbarSpacing from "./navbar-spacing";
import { Button } from "../ui/button";

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
        className="w-full min-h-screen p-4 md:p-[clamp(1rem,5vw,3rem)] bg-emerald-200"
      >
        <div className="min-h-[70vh] mx-auto max-w-[90vw] space-y-6">
          <Card>
            <CardContent className="p-4 md:p-6">
              <h1 className="text-4xl md:text-6xl font-bold text-center">
                Pricing
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-center mt-2">
                Currently unavailable
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plans.map((plan) => (
              <Card key={plan.level} className="flex flex-col">
                <CardContent className="p-6 space-y-6 flex-1">
                  <div className="space-y-2">
                    <h2 className="text-2xl md:text-3xl font-bold">
                      {plan.label}
                    </h2>
                    <p className="text-3xl md:text-4xl font-bold">
                      ${plan.price}
                      <span className="text-base md:text-lg font-normal text-muted-foreground">
                        /month
                      </span>
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm md:text-base"
                      >
                        <span className="text-accent">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Button className="w-full" disabled>
                      Coming Soon
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
