"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Show navbar by default on all pages except home
    if (pathname !== "/") {
      setIsVisible(true);
      return;
    }

    // Function to check scroll position
    const checkScrollPosition = () => {
      const heroSection = document.querySelector(".hero-section");
      if (heroSection) {
        const heroHeight = heroSection.getBoundingClientRect().height;
        const scrollPosition = window.scrollY;

        if (scrollPosition > heroHeight * 0.8) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    // Check scroll position immediately on load
    checkScrollPosition();

    // Then add scroll listener
    window.addEventListener("scroll", checkScrollPosition);
    return () => window.removeEventListener("scroll", checkScrollPosition);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-white/80 backdrop-blur-sm`}
    >
      <div className="flex w-full justify-center p-[clamp(1rem,2vw,1.5rem)] border-black shadow-md h-[clamp(4rem,8vh,6rem)] bg-white/80 backdrop-blur-sm">
        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="space-x-[clamp(1rem,3vw,2.5rem)]">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about"
                data-active={pathname === "/about"}
                className="data-[active=true]:bg-accent! text-[clamp(0.875rem,1.5vw,1.125rem)]"
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/pricing"
                data-active={pathname === "/pricing"}
                className="data-[active=true]:bg-accent! text-[clamp(0.875rem,1.5vw,1.125rem)]"
              >
                Pricing
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild data-active={pathname === "/"}>
                <Link
                  href="/"
                  className="data-[active=true]:bg-accent! text-[clamp(1rem,2vw,1.5rem)] font-bold px-[clamp(1rem,2vw,1.5rem)]"
                >
                  VERO DESIGN
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/showcase"
                data-active={pathname === "/showcase"}
                className="data-[active=true]:bg-accent! text-[clamp(0.875rem,1.5vw,1.125rem)]"
              >
                Showcase
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contact"
                data-active={pathname === "/contact"}
                className="data-[active=true]:bg-accent! text-[clamp(0.875rem,1.5vw,1.125rem)]"
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
