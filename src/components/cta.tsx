import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import NavbarSpacing from "./home-page/navbar-spacing";

interface CTAProps {
  title: string;
  sub: string;
  href: string;
  button: string;
}

export default function CTA({ title, sub, href, button }: CTAProps) {
  return (
    <>
      {/* <NavbarSpacing /> */}

      <div
        id="featured-section"
        className="w-full min-h-[50vh] p-4 md:p-[clamp(1rem,5vw,3rem)] flex items-center justify-center"
      >
        <div className="w-full max-w-[90vw] space-y-6 text-center">
          <Card className="w-full">
            <CardContent className="p-6 md:p-8 space-y-6 md:space-y-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                {title}
              </h1>
              <p className="text-md md:text-1xl lg:text-2xl text-muted-foreground">
                {sub}
              </p>
              <Link href={href} className="inline-block">
                <Button
                  className="w-full md:w-[30vw] h-[6vh] text-base md:text-xl font-bold cursor-pointer"
                  size="default"
                >
                  {button}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
