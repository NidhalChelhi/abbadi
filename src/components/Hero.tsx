import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[90vh] w-full bg-accent flex flex-row items-center justify-center mt-[10vh]">
      <div className="flex flex-col items-center sm:items-start text-center sm:text-start">
        <h1 className="text-primary font-semibold text-2xl">
          Bienvenue sur le site de notre garderie
        </h1>
        <h2 className="text-black font-bold text-4xl sm:text-6xl">
          Meilleur programme <br />
          d’éducation pour enfants
        </h2>
        <span className="text-dark underline font-medium my-8">
          Entrée ouverte du 01 au 15 Septembre
        </span>
        <CustomButton>Appliquer Maintenant</CustomButton>
      </div>
      <Image
        src="/images/hero.png"
        alt="Hero image"
        width={800}
        height={700}
        className="hidden lg:flex"
      />
    </section>
  );
}
