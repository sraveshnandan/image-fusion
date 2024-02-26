"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Logo from "./logo";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinks } from "@/constants";
import { SignIn, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className="header">
      <Logo />
      <nav className="flex gap-2 items-center">
        {/* User Button  */}
        <UserButton />
        <Sheet>
          <SheetTrigger>
            <Image
              src={"/assets/icons/menu.svg"}
              alt="menu"
              className="cursor-pointer"
              width={24}
              height={24}
            />
          </SheetTrigger>
          <SheetContent className="sheet-content sm:w-64">
            <SheetTitle>
              <Logo />
            </SheetTitle>
            <>
              <SignedIn>
                <ul className="header-nav_elements">
                  {navLinks.map((link, index) => {
                    const isActive = link.route === pathname;
                    return (
                      <li
                        key={index}
                        className={`sidebar-nav_element group ${
                          isActive ? "bg-black/25 text-white" : "text-gray-700"
                        }`}
                      >
                        <Link href={link.route} className="sidebar-link">
                          <Image
                            src={link.icon}
                            alt="menu_icon"
                            width={24}
                            height={24}
                            className={`${
                              isActive &&
                              "brightness-200 drop-shadow-md drop-shadow-red-400"
                            }`}
                          />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </SignedIn>
              <SignedOut>
                <div className="p-4 flex flex-col gap-4 w-full ">
                  <Button
                    variant={"outline"}
                    className="hover:bg-black hover:text-white"
                    asChild
                  >
                    <Link href={"/sign-in"}>Login</Link>
                  </Button>
                  <Button
                    variant={"outline"}
                    className="hover:bg-black hover:text-white"
                    asChild
                  >
                    <Link href={"/sign-up"}>Register</Link>
                  </Button>
                </div>
              </SignedOut>
            </>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default MobileNav;
