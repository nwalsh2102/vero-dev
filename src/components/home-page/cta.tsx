import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import NavbarSpacing from "./navbar-spacing";

export default function HomeCTA() {
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
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
                Ready to transform your vision?
              </h1>
              <p className="text-lg md:text-2xl lg:text-3xl text-muted-foreground">
                Every great project starts with a conversation. Tell us about
                your goals, challenges, and ideas – let's explore what's
                possible together.
              </p>
              <Link href="/contact" className="inline-block">
                <Button
                  className="w-full md:w-[30vw] h-[6vh] text-base md:text-xl font-bold cursor-pointer"
                  size="lg"
                >
                  Let's Talk About your Project
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
