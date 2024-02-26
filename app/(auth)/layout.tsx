import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="md:flex-row flex-col max-w-[1440px] mx-auto h-fit object-contain flex items-center justify-center">
      <div className="md:w-1/2 w-full auth-container min-h-screen hidden md:flex items-center justify-center">
        <div className="self-end bg-black  w-full px-5 py-4">
          <Link href={"/"} className="flex flex-row text-white text-2xl items-center gap-2"> <Image src={"/assets/images/logo-icon.svg"} alt="logo" width={30} height={30}/> Image Fusion</Link>
          <h4 className="mt-2 text-white text-lg ml-5 ">Unleash Your Creative Vision with Image Fusion</h4>
        </div>

      </div>
      <div className="md:w-1/2 w-full bg-black/40 flex min-h-screen overflow-y-auto items-center justify-center py-4">
        {children}
      </div>
     
    </main>
  );
}
