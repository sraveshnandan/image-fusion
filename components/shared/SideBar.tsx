"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "./logo";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { UserButton, SignedOut, SignedIn } from "@clerk/nextjs";
import { Button } from "../ui/button";

const SideBar = () => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(true);
  return (
    <aside className={`sidebar`}>
      <div className=" flex flex-col gap-4">
        {/* SideBar Logo  */}
        <Logo />

        {/* Side bar Links  */}

        <nav className={`sidebar-nav`}>
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((link, index) => {
                const isActive = link.route === pathname;
                return (
                  <li
                    key={index}
                    className={`sidebar-nav_element group ${
                      isActive ? "bg-black/30 text-white" : "text-gray-700"
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
            <hr />
            <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map((link, index) => {
                const isActive = link.route === pathname;
                return (
                  <li
                    key={index}
                    className={`sidebar-nav_element group ${
                      isActive ? "bg-black/30 text-white" : "text-gray-700"
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
              <li className="flex items-center w-full cursor-pointer gap-2 p-4 ">
                <UserButton showName afterSignOutUrl="/" />
              </li>
            </ul>
          </SignedIn>
          <SignedOut>
            <div className="p-4  flex flex-col gap-4 w-full ">
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
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
