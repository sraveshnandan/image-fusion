import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="sidebar-logo hover:bg-gray-200 duration-300 transition-all p-1 rounded-md"
    >
      <Image
        src={"/assets/images/logo-text.svg"}
        alt="logo"
        width={180}
        height={40}
      />
    </Link>
  );
};

export default Logo;
