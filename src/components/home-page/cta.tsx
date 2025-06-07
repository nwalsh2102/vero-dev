import { Card, CardContent } from "../ui/card";
import NavbarSpacing from "./navbar-spacing";

export default function HomeCTA() {
  return (
    <>
      {/* <NavbarSpacing /> */}

      <div
        id="about"
        className="w-full h-dvh grid place-items-center z-10 relative bg-red-200"
      >
        <h1 className="text-9xl">Call to Action</h1>
      </div>
    </>
  );
}
