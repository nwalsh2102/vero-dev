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
        className="w-full h-dvh p-[clamp(1rem,5vw,3rem)] bg-p-200"
      >
        <div className="h-[70vh] mx-auto max-w-[90vw] space-y-6">
          <Card>
            <CardContent>
              <h1 className="text-6xl">Featured Sites</h1>
            </CardContent>
          </Card>
          <div className="h-full">
            <Card className="h-full">
              <CardContent className="space-y-5 h-full flex flex-col">
                <div className="flex flex-row justify-between items-center">
                  <div className="space-y-3.5">
                    <h1 className="text-5xl">Vero QR Code Generator</h1>
                    <p>QR Code generator built with the vero account system</p>
                  </div>
                  <div>
                    <a
                      href="https://www.medusmo.com/?ref=siteinspire"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="cursor-pointer text-lg flex" size="lg">
                        Goto <ExternalLinkIcon />
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="w-full flex-1 relative">
                  <Image
                    src="/images/medusmo-girl.png"
                    alt="globe"
                    className="object-cover"
                    fill
                  />
                </div>
                <div className="w-full flex items-center justify-center">
                  <Link
                    href="/showcase"
                    className={buttonVariants({
                      className: "w-1/6 cursor-pointer text-xl h-[5vh]",
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
