import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link href="/">
          <Image src="/nutrify.svg" width={60} height={60} alt="logo" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
