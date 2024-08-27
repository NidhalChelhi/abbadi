import React from "react";
import CustomButton from "./CustomButton";

export default function BannerSection() {
  return (
    <section className="flex flex-col min-h-[600px] w-full items-center justify-center text-center gap-10 text-white bg-banner-image bg-cover bg-center relative">
      <div className="absolute inset-0 bg-primary opacity-80" />
      <div className="space-y-8 relative flex flex-col items-center justify-center">
        <h1 className="font-bold text-4xl">Rejoignez notre nouvelle session</h1>
        <p className="max-w-5xl text-xl">
          À ABBADI, nous croyons fermement que chaque enfant mérite un
          environnement sûr, stimulant, et chaleureux pour grandir et
          s&apos;épanouir. Fondée par une équipe passionnée d&apos;éducateurs
          expérimentés, notre garderie se dédie à offrir un espace où
          l&apos;éducation et le bien-être des enfants sont au cœur de toutes
          nos activités.
        </p>
        <CustomButton className="w-fit place-self-center">
          En Savoir Plus
        </CustomButton>
      </div>
    </section>
  );
}
