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
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import Image from "next/image";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Add this function to be called from outside
  const showNavbar = () => {
    setIsVisible(true);
  };

  // Make the function available globally
  useEffect(() => {
    // @ts-ignore
    window.showNavbar = showNavbar;
  }, []);

  useEffect(() => {
    // Show navbar by default on all pages except home
    if (pathname !== "/") {
      setIsVisible(true);
      return;
    }

    // Add event listener for showing navbar
    const handleShowNavbar = () => {
      setIsVisible(true);
    };
    window.addEventListener("showNavbar", handleShowNavbar);

    // Function to check scroll position
    const checkScrollPosition = () => {
      const heroSection = document.querySelector(".hero-section");
      const navbar = document.querySelector("nav");
      if (heroSection && navbar) {
        const heroHeight = heroSection.getBoundingClientRect().height;
        const navbarHeight = navbar.getBoundingClientRect().height;
        const scrollPosition = window.scrollY;

        // Show navbar when scroll position + navbar height equals hero height - 5px
        if (scrollPosition >= heroHeight - navbarHeight - 10) {
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

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("showNavbar", handleShowNavbar);
    };
  }, [pathname]);

  const NavLinks = () => (
    <>
      <NavigationMenuItem>
        <NavigationMenuLink
          href="/about"
          data-active={pathname === "/about"}
          className="data-[active=true]:bg-accent! text-[clamp(0.875rem,1.5vw,1.125rem)] hover:bg-accent/10 transition-colors"
        >
          About
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          href="/dashboards"
          data-active={pathname === "/dashboards"}
          className="data-[active=true]:bg-accent! text-[clamp(0.875rem,1.5vw,1.125rem)] hover:bg-accent/10 transition-colors"
        >
          Dashboards
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild data-active={pathname === "/"}>
          <Link
            href="/"
            className="data-[active=true]:bg-accent! text-[clamp(1rem,2vw,1.5rem)] font-bold px-[clamp(1rem,2vw,1.5rem)] hover:bg-accent/10 transition-colors"
          >
            VERO DESIGN
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          href="/showcase"
          data-active={pathname === "/showcase"}
          className="data-[active=true]:bg-accent! text-[clamp(0.875rem,1.5vw,1.125rem)] hover:bg-accent/10 transition-colors"
        >
          Showcase
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          href="/contact"
          data-active={pathname === "/contact"}
          className="data-[active=true]:bg-accent! text-[clamp(0.875rem,1.5vw,1.125rem)] hover:bg-accent/10 transition-colors"
        >
          Contact
        </NavigationMenuLink>
      </NavigationMenuItem>
    </>
  );

  const MobileNavLinks = () => (
    <>
      <Link
        href="/"
        className="text-lg font-bold hover:text-accent transition-colors"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        VERO DESIGN
      </Link>
      <Link
        href="/about"
        className="text-lg font-medium hover:text-accent transition-colors"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        About
      </Link>
      <Link
        href="/dashboards"
        className="text-lg font-medium hover:text-accent transition-colors"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Dashboards
      </Link>

      <Link
        href="/showcase"
        className="text-lg font-medium hover:text-accent transition-colors"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Showcase
      </Link>
      <Link
        href="/contact"
        className="text-lg font-medium hover:text-accent transition-colors"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Contact
      </Link>
    </>
  );

  return (
    <nav
      className={`fixed top-[3vh] left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-white/80 backdrop-blur-sm`}
    >
      <div className="flex w-full justify-between items-center p-[clamp(1rem,2vw,1.5rem)] border-foreground shadow-md h-[clamp(4rem,8vh,6rem)] bg-background/80 backdrop-blur-sm">
        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <MobileNavLinks />
              </div>
            </SheetContent>
          </Sheet>
          <span className="ml-3 text-lg font-semibold">
            <Image
              src="/images/vero-v-icon-large.png"
              alt="Logo"
              onClick={() => window.location.replace("/")}
              width={32}
              height={32}
              className="object-contain h-8 w-auto max-w-[80px]"
              priority
            />
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block w-full">
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="space-x-[clamp(1rem,3vw,2.5rem)]">
              <NavLinks />
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
}
