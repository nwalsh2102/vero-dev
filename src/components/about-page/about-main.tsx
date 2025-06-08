import { aboutText, missionText, valuesText } from "@/lib/text/about";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

export default function AboutMain() {
  return (
    <div className="w-full px-4 py-8 md:px-[clamp(1rem,5vw,3rem)] md:py-12">
      <div className="mx-auto max-w-[90vw] space-y-8 md:space-y-12">
        <div>
          <Card>
            <CardContent className="space-y-6 p-6 md:p-8">
              <h1 className="text-3xl md:text-5xl font-bold">Vero</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        <div>
          <Card>
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col items-center justify-center space-y-6 md:space-y-8">
                <h1 className="text-3xl md:text-5xl font-bold">Mission</h1>
                <p className="text-base md:text-2xl text-center max-w-[80vw]">
                  {missionText}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardContent className="space-y-6 p-6 md:p-8">
              <h1 className="text-3xl md:text-5xl font-bold text-center md:text-right">
                Values
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1 flex items-center justify-center h-full">
                  <Image
                    src="/images/vero-v-icon-large.png"
                    alt="site"
                    width={500}
                    height={500}
                    className="object-contain h-full w-auto"
                  />
                </div>
                <div className="md:col-span-2">
                  <p className="text-base md:text-xl leading-relaxed text-right">
                    {valuesText}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
