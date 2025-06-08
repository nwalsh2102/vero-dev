"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import NavbarSpacing from "./navbar-spacing";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import Link from "next/link";

const aboutText =
  "Vero Design brings premium web development and graphic design services directly to your local community, combining the personalized attention of a boutique agency with cutting-edge digital solutions. We specialize in creating sophisticated, minimalist designs that elevate small to mid-sized businesses, while our exclusive Vero Dashboards system sets us apart from the competition. Every client receives their own personalized dashboard—whether for website analytics and management or graphic design asset organization—complete with integrated payment systems that streamline your entire experience. By staying rooted in our local community while leveraging innovative technology, we deliver the premium service and ongoing partnership your business deserves, not just another transaction.";

const missionText =
  "Our mission is to empower your business through premium web design and development solutions that drive real results. We combine cutting-edge design expertise with our exclusive Vero Dashboards system to deliver personalized, transparent experiences that build lasting partnerships with local businesses. By staying true to our commitment to trust, loyalty, and honest communication, we transform your digital presence into a powerful tool for growth. Every website we create and every dashboard we customize reflects our dedication to your success, because when your business thrives, our community thrives.";

const valuesText =
  "At Vero Design, our values drive everything we do. Trust and truth guide our transparent communication throughout your project journey, while loyalty ensures we're building lasting partnerships focused on your long-term success. We pursue innovation through our evolving Vero Dashboards system and cutting-edge design trends that give your business a competitive edge. Quality remains non-negotiable in every line of code and design element, because your brand deserves premium standards. Through genuine partnership, we treat your business goals as our own, celebrating shared victories in our local community.";

export default function HomeAbout() {
  const router = useRouter();

  return (
    <>
      <div id="about" className="w-full p-[clamp(1rem,5vw,3rem)] bg-b-200">
        <div className="mx-auto max-w-[90vw] space-y-6">
          <Card className="">
            <CardContent>
              <div className="flex flex-row w-full justify-between items-center">
                <h1 className="text-6xl">About</h1>
                <Link href="/about">
                  <Button size="lg" className="text-lg cursor-pointer">
                    About
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          <div className="">
            <Card>
              <CardContent className="space-y-4 pb-0">
                <h1 className="text-5xl">Vero</h1>
                <div className="grid grid-cols-3">
                  <div className="col-span-2">
                    <p className="text-xl">{aboutText}</p>
                  </div>
                  <div className="col-span-1 flex items-center justify-center">
                    <Image
                      src="/images/medusmo-girl.png"
                      alt="site"
                      width={500}
                      height={400}
                      className="object-contain"
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

{
  /* <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 grid-rows-3">
          <div className="col-span-full md:col-span-2 md:col-start-1 lg:col-span-3 lg:col-start-1 lg:col-end-4 row-span-1 p-4">
            <h1 className="text-[clamp(3rem,15vw,9rem)] font-calendas">
              About
            </h1>
            <Separator className="mb-10" />
            <p className="break-words">{aboutText}</p>
          </div>
          <div className="col-span-full md:col-span-1 md:col-start-3 lg:col-span-2 lg:col-start-4 row-span-1">
            <div className="grid h-full place-items-center">
              <img
                src="globe.svg"
                alt="globe"
                className="w-[clamp(8rem,20vw,16rem)] mx-auto"
              />
            </div>
          </div> */
}

{
  /* Mission Section: Centered Text */
}
{
  /* <div className="row-span-1 col-span-full">
            <h1 className="text-[clamp(3rem,15vw,9rem)] font-calendas text-center">
              Mission
            </h1>
            <Separator className="mb-10 max-w-[80vw] mx-auto" />
            <p className="break-words text-center">{missionText}</p>
          </div> */
}

{
  /* Values Section: Image Left, Text Right */
}
{
  /* <div className="col-span-full md:col-span-3 lg:col-span-5 row-span-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">

            <div className="col-span-full md:col-span-1 md:col-start-1 lg:col-span-2 lg:col-start-1 row-span-1">
              <div className="grid h-full place-items-center">
                <img
                  src="globe.svg"
                  alt="globe"
                  className="w-[clamp(8rem,20vw,16rem)] mx-auto"
                />
              </div>
            </div> */
}

{
  /* Text content on the right (Mobile: full width, stacks) */
}
{
  /* <div className="col-span-full md:col-span-2 md:col-start-2 lg:col-span-3 lg:col-start-3 row-span-1 p-4 text-right">
              <h1 className="text-[clamp(3rem,15vw,9rem)] font-calendas">
                Values
              </h1>
              <Separator className="mb-10 max-w-[80vw] mx-auto" />
              <p className="break-words">{valuesText}</p>
            </div>
          </div> */
}
