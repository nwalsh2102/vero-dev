"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const aboutText =
  "Vero Design brings premium web development and graphic design services directly to your local community, combining the personalized attention of a boutique agency with cutting-edge digital solutions. We specialize in creating sophisticated, minimalist designs that elevate small to mid-sized businesses, while our exclusive Vero Dashboards system sets us apart from the competition. Every client receives their own personalized dashboard—whether for website analytics and management or graphic design asset organization—complete with integrated payment systems that streamline your entire experience. By staying rooted in our local community while leveraging innovative technology, we deliver the premium service and ongoing partnership your business deserves, not just another transaction.";

const missionText =
  "Our mission is to empower your business through premium web design and development solutions that drive real results. We combine cutting-edge design expertise with our exclusive Vero Dashboards system to deliver personalized, transparent experiences that build lasting partnerships with local businesses. By staying true to our commitment to trust, loyalty, and honest communication, we transform your digital presence into a powerful tool for growth. Every website we create and every dashboard we customize reflects our dedication to your success, because when your business thrives, our community thrives.";

const valuesText =
  "At Vero Design, our values drive everything we do. Trust and truth guide our transparent communication throughout your project journey, while loyalty ensures we're building lasting partnerships focused on your long-term success. We pursue innovation through our evolving Vero Dashboards system and cutting-edge design trends that give your business a competitive edge. Quality remains non-negotiable in every line of code and design element, because your brand deserves premium standards. Through genuine partnership, we treat your business goals as our own, celebrating shared victories in our local community.";

export default function TestAboutPage() {
  return (
    <div className="min-h-screen pt-[calc(4rem+clamp(1rem,2vw,1.5rem))] pb-[clamp(1rem,5vw,3rem)] bg-background">
      <div className="container mx-auto px-4 space-y-12 md:space-y-16">
        {/* Header Section */}
        <header className="text-center space-y-4 md:space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
            About Vero Design
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Combining personalized attention with cutting-edge digital solutions
            to elevate your business.
          </p>
        </header>

        {/* Our Story Section */}
        <Card className="p-4 md:p-8">
          <CardContent className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center md:text-left">
              Our Story
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  {aboutText}
                </p>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <Image
                  src="/images/medusmo-girl.png"
                  alt="Vero Design Team"
                  width={500}
                  height={400}
                  className="object-contain rounded-lg shadow-lg w-full max-w-sm md:max-w-md"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Our Mission Section */}
        <Card className="p-4 md:p-8">
          <CardContent className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center">
              Our Mission
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground text-center max-w-4xl mx-auto">
              {missionText}
            </p>
          </CardContent>
        </Card>

        {/* Our Values Section */}
        <Card className="p-4 md:p-8">
          <CardContent className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center md:text-left">
              Our Values
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              {valuesText}
            </p>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <section className="text-center space-y-6 md:space-y-8 pt-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to start your next project?
          </h2>
          <Link href="/contact">
            <Button size="lg" className="text-base md:text-lg px-8 py-4">
              Contact Us Today
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
