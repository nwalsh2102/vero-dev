import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function ComingSoon() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl lg:text-4xl text-center font-bold">
            Coming Soon...
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col justify-center items-center space-y-6">
            <p className="text-sm md:text-base text-muted-foreground text-center">
              We're working hard to bring you something amazing. Stay tuned!
            </p>
            <Link href="/">
              <Button
                className="w-full md:w-auto px-8 py-2 text-sm md:text-base hover:bg-accent/90 transition-colors"
                size="lg"
              >
                Return Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
