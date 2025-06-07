import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import NavbarSpacing from "./navbar-spacing";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function HomeDashboard() {
  return (
    <>
      {/* <NavbarSpacing /> */}

      <div
        id="dashboards"
        className="w-full p-[clamp(1rem,5vw,3rem)] bg-emerald-200"
      >
        <div className="min-h-[70vh] mx-auto max-w-[90vw] space-y-6">
          <Card>
            <CardContent className="space-y-3">
              <h1 className="text-6xl">Vero Dashboards</h1>
              <p className="text-xl">Your Command Center for Success</p>
            </CardContent>
          </Card>
          <div>
            <Card>
              <CardContent>
                <div className="w-full flex-1 relative h-[30vh]">
                  <Image
                    src="/images/medusmo-guy.png"
                    alt="guy.png"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="w-full grid grid-cols-2 gap-x-6 gap-y-4">
            <div>
              <Card>
                <CardContent className="space-y-2">
                  <div className="flex flex-row justify-between items-center select-none">
                    <h1 className="text-2xl">Service-Specific Interfaces</h1>
                    {/* <ChevronDown /> */}
                  </div>
                  <p className="text-md">
                    Tailored dashboards for web design and graphic design
                    projects with relevant tools and metrics
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardContent className="space-y-2">
                  <div className="flex flex-row justify-between items-center select-none">
                    <h1 className="text-2xl">Customizable Layout</h1>
                    {/* <ChevronDown /> */}
                  </div>
                  <p className="text-md">
                    Configure your dashboard to match your workflow and
                    priorities - every client gets a unique experience
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardContent className="space-y-2">
                  <div className="flex flex-row justify-between items-center select-none">
                    <h1 className="text-2xl">Direct Team Access</h1>
                    {/* <ChevronDown /> */}
                  </div>
                  <p className="text-md">
                    Instant communication channel with your dedicated Vero team
                    members
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardContent className="space-y-2">
                  <div className="flex flex-row justify-between items-center select-none">
                    <h1 className="text-2xl">Progress Visualization</h1>
                    {/* <ChevronDown /> */}
                  </div>
                  <p className="text-md">
                    See your project milestones, deliverables, and next steps at
                    a glance
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="w-full text-left">
            <Card>
              <CardContent className="space-y-2">
                <div className="flex flex-row justify-between items-center select-none">
                  <h1 className="text-2xl">Real Time Project Analytics</h1>
                  {/* <ChevronDown /> */}
                </div>
                <p className="text-md">
                  Track progress, timelines, and performance metrics specific to
                  your active projects
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
