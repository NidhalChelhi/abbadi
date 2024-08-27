/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";

const navItems = [
  { href: "#", label: "Accueil" },
  { href: "#about", label: "Qui sommes-nous" },
  { href: "#program", label: "Programme" },
  { href: "#inscription", label: "Pré-inscription" },
  { href: "#gallery", label: "Activités et photos" },
];

export default function Navbar() {
  return (
    <div className="flex flex-col w-full min-h-[10vh] fixed z-[99]">
      <div className="hidden sm:flex flex-row gap-4 items-center justify-center bg-primary py-2">
        <Image
          src="/icons/announcement.png"
          alt="Annoucement"
          width={38}
          height={38}
        />
        <span className="text-white text-lg">
          Les candidatures sont ouvertes du 01 au 15 Septembre !!!
        </span>
        <Image
          src="/icons/announcement.png"
          alt="Annoucement"
          width={38}
          height={38}
        />
      </div>
      <nav
        className={`mx-auto w-full flex justify-between items-center gap-8 relative z-[10] px-8 py-4 bg-white`}
      >
        <img src="/logos/main.png" alt="Abbadi Garderie" className="h-[60px]" />
        <nav className="hidden lg:flex gap-8 ">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-dark hover:text-secondary text-lg font-semibold app-transition truncate"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <CustomButton className="hidden lg:flex">
          Appliquer Maintenant
        </CustomButton>
      </nav>
    </div>
  );
}
