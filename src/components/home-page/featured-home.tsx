"use client";

import { exampleImages } from "@/lib/demo-images";
import { Card, CardContent } from "../ui/card";
import NavbarSpacing from "./navbar-spacing";
import Image from "next/image";
import StackingCards, {
  StackingCardItem,
} from "@/fancy/components/blocks/stacking-cards";
import { useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function HomeFeatured() {
  const scrollableContainerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div
        id="featured-section"
        className="w-full min-h-screen p-4 md:p-[clamp(1rem,5vw,3rem)] bg-p-200"
      >
        <div className="min-h-[70vh] mx-auto max-w-[90vw] space-y-6">
          <Card>
            <CardContent className="p-4 md:p-6">
              <h1 className="text-4xl md:text-6xl font-bold">Featured Sites</h1>
            </CardContent>
          </Card>
          <div className="h-full">
            <Card className="h-full">
              <CardContent className="space-y-5 h-full flex flex-col p-4 md:p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="space-y-3.5">
                    <h1 className="text-3xl md:text-5xl font-bold">
                      Vero QR Code Generator
                    </h1>
                    <p className="text-base md:text-lg text-muted-foreground">
                      QR Code generator built with the vero account system
                    </p>
                  </div>
                  <div>
                    <a
                      href="https://www.medusmo.com/?ref=siteinspire"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        className="cursor-pointer text-base md:text-lg flex gap-2 w-full md:w-auto"
                        size="lg"
                      >
                        Goto{" "}
                        <ExternalLinkIcon className="w-4 h-4 md:w-5 md:h-5" />
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="w-full flex-1 relative min-h-[300px] md:min-h-[400px]">
                  <Image
                    src="/images/medusmo-girl.png"
                    alt="globe"
                    className="object-cover rounded-lg"
                    fill
                  />
                </div>
                <div className="w-full flex items-center justify-center">
                  <Link
                    href="/showcase"
                    className={buttonVariants({
                      className:
                        "w-full md:w-1/4 cursor-pointer text-base md:text-xl h-[5vh]",
                    })}
                  >
                    Showcase
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
