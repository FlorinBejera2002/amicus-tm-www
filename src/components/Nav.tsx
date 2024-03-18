import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-between w-screen p-10 items-center">
      <Link href="/">
        <Image
          alt="arise for christ logo"
          className="object-contain"
          height={130}
          src="/img/logo_horizontal_white.png"
          width={130}
        />
      </Link>

      <div className="flex items-center text-white gap-8">
        <div>Home</div>
        <div>About Us</div>
        <div>Services</div>
        <div>Blog</div>
        <div>Portfolio</div>
        <div>Elements</div>
        <button className="bg-yellow-400 p-4 px-9 text-black font-semibold">
          Contact Us
        </button>
      </div>
    </nav>
  );
}
