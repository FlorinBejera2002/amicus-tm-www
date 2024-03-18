import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <Link href="/" >
        <Image
          src="/img/logo_horizontal_white.png"
          alt="Promptopia Logo"
          width={300}
          height={300}
          className="object-contain"
        />
        <p className="log_text"></p>
      </Link>
    </nav>
  );
}
