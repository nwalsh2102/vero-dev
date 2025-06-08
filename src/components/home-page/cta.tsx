import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import NavbarSpacing from "./navbar-spacing";

export default function HomeCTA() {
  return (
    <>
      {/* <NavbarSpacing /> */}

      <div
        id="featured-section"
        className="w-full min-h-[50vh] p-[clamp(1rem,5vw,3rem)] flex items-center justify-center"
      >
        <div className="w-full max-w-[90vw] space-y-6 text-center">
          <Card className="w-full">
            <CardContent className="space-y-8">
              <h1 className="text-6xl">Ready to transform your vision?</h1>
              <p className="text-3xl">
                Every great project starts with a conversation. Tell us about
                your goals, challenges, and ideas – let's explore what's
                possible together.
              </p>
              <Button className="w-[30vw] h-[6vh] text-xl font-bold cursor-pointer">
                Let's Talk About your Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
