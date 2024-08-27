"use client";

import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";

export default function InscriptionSection() {
  return (
    <section
      id="inscription"
      className="flex flex-row min-h-[90vh] items-center justify-center px-8 md:px-20 lg:px-60 gap-10"
    >
      <div className="w-full space-y-8">
        <div className=" space-y-2">
          <h1 className="font-bold text-4xl">Pré-inscription</h1>
          <p className="max-w-6xl text-lg">
            Rejoignez notre communauté de parents et d&apos;enfants en procédant
            à une pré-inscription en ligne simple et rapide.
          </p>
        </div>

        <input
          className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          type="text"
          placeholder="Nom complet"
        />

        <input
          className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          type="text"
          placeholder="Adresse email"
        />

        <input
          className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          type="text"
          placeholder="Téléphone"
        />

        <input
          className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
          type="text"
          placeholder="Date de naissance de l'enfant"
        />

        <textarea
          className="w-full h-32 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Message"
        />

        <CustomButton className="w-fit px-20">Envoyer</CustomButton>
      </div>
      <div className="w-full hidden lg:flex">
        <Image
          src="/images/inscription.png"
          alt="about"
          width={890}
          height={720}
        />
      </div>
    </section>
  );
}
