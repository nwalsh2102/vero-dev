"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import NavbarSpacing from "./navbar-spacing";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { aboutText } from "@/lib/text/about";

export default function HomeAbout() {
  const router = useRouter();

  return (
    <>
      <div
        id="about"
        className="w-full p-4 md:p-[clamp(1rem,5vw,3rem)] bg-b-200"
      >
        <div className="mx-auto max-w-[90vw] space-y-6">
          <Card>
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col md:flex-row w-full justify-between items-center gap-4">
                <h1 className="text-4xl md:text-6xl font-bold">About</h1>
                <Link href="/about">
                  <Button
                    size="lg"
                    className="text-base md:text-lg cursor-pointer w-full md:w-auto"
                  >
                    About
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          <div>
            <Card>
              <CardContent className="space-y-6 p-4 md:p-6">
                <h1 className="text-3xl md:text-5xl font-bold">Vero</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <p className="text-base md:text-xl leading-relaxed">
                      {aboutText}
                    </p>
                  </div>
                  <div className="md:col-span-1 flex items-center justify-center">
                    <Image
                      src="/images/medusmo-girl.png"
                      alt="site"
                      width={500}
                      height={400}
                      className="object-contain w-full h-auto max-w-[300px] md:max-w-none"
                    />
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
