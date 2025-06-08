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
import { Button } from "../ui/button";

export default function HomeDashboard() {
  return (
    <>
      {/* <NavbarSpacing /> */}

      <div
        id="dashboards"
        className="w-full p-4 md:p-[clamp(1rem,5vw,3rem)] bg-e-200"
      >
        <div className="min-h-[70vh] mx-auto max-w-[90vw] space-y-6">
          <Card>
            <CardContent className="p-4 md:p-6 space-y-3">
              <h1 className="text-4xl md:text-6xl font-bold">
                Vero Dashboards
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                {/* Your Command Center for Success */}
                Coming August 2025
              </p>
            </CardContent>
          </Card>
          <div>
            <Card>
              <CardContent className="p-0">
                <div className="w-full flex-1 relative h-[200px] md:h-[30vh]">
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
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <Card>
                <CardContent className="p-4 md:p-6 space-y-2">
                  <div className="flex flex-row justify-between items-center select-none">
                    <h1 className="text-xl md:text-2xl font-semibold">
                      Service-Specific Interfaces
                    </h1>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Tailored dashboards for web design and graphic design
                    projects with relevant tools and metrics
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardContent className="p-4 md:p-6 space-y-2">
                  <div className="flex flex-row justify-between items-center select-none">
                    <h1 className="text-xl md:text-2xl font-semibold">
                      Customizable Layout
                    </h1>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Configure your dashboard to match your workflow and
                    priorities - every client gets a unique experience
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardContent className="p-4 md:p-6 space-y-2">
                  <div className="flex flex-row justify-between items-center select-none">
                    <h1 className="text-xl md:text-2xl font-semibold">
                      Direct Team Access
                    </h1>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Instant communication channel with your dedicated Vero team
                    members
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardContent className="p-4 md:p-6 space-y-2">
                  <div className="flex flex-row justify-between items-center select-none">
                    <h1 className="text-xl md:text-2xl font-semibold">
                      Progress Visualization
                    </h1>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground">
                    See your project milestones, deliverables, and next steps at
                    a glance
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="w-full text-left">
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h1 className="text-xl md:text-2xl font-semibold">
                      Real Time Project Analytics
                    </h1>
                    <p className="text-sm md:text-base text-muted-foreground mt-2">
                      Track progress, timelines, and performance metrics
                      specific to your active projects
                    </p>
                  </div>
                  <div>
                    <a href="/dashboards">
                      <Button className="cursor-pointer w-full md:w-auto">
                        Dashboards
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
