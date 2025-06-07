import { exampleImages } from "@/lib/demo-images";
import { Card, CardContent } from "../ui/card";
import NavbarSpacing from "./navbar-spacing";
import Image from "next/image";

export default function HomeFeatured() {
  return (
    <>
      {/* <NavbarSpacing /> */}

      <div
        id="featured-section"
        className="w-full h-dvh grid place-items-center bg-amber-200"
      >
        <h1 className="text-9xl">Featured</h1>
      </div>
    </>
  );
}
