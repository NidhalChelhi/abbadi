/* eslint-disable @next/next/no-img-element */
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";

const aboutData = [
  {
    icon: "/icons/target.png",
    title: "Notre Mission",
    description:
      "Notre mission est d’accompagner chaque enfant dans son développement global en lui offrant une multitude d’activités éducatives et ludiques qui favorisent l’apprentissage, la créativité, et la socialisation. Nous nous engageons à créer un environnement inclusif où chaque enfant se sent valorisé et encouragé à explorer ses intérêts et ses talents uniques.",
  },
  {
    icon: "/icons/heart.png",
    title: "Notre Vision",
    description:
      "Notre vision est de devenir un leader dans le domaine de la petite enfance en offrant des services éducatifs de qualité qui répondent aux besoins uniques de chaque enfant. Nous aspirons à être reconnus pour notre engagement envers l’excellence, notre approche holistique de l’éducation, et notre passion pour le bien-être des enfants.",
  },
  {
    icon: "/icons/hand.png",
    title: "Nos Valeurs",
    description:
      "Chez ABBADI, nous sommes guidés par des valeurs fortes qui orientent notre travail au quotidien. Nous croyons en l’importance de l’intégrité, du respect, de la collaboration, et de l’engagement envers l’excellence. Nous nous efforçons de créer un environnement où chaque enfant se sent en sécurité, aimé, et soutenu dans son développement.",
  },
];
export default function AboutSection() {
  return (
    <>
      <section
        id="about"
        className="flex flex-col min-h-[90vh] items-center justify-center text-center px-8 md:px-20 lg:px-60 pt-20 gap-10"
      >
        <div className="space-y-4">
          <h1 className="font-bold text-4xl">À propos de nous</h1>
          <p className="max-w-6xl text-lg">
            À ABBADI, nous croyons fermement que chaque enfant mérite un
            environnement sûr, stimulant, et chaleureux pour grandir et
            s&apos;épanouir. Fondée par une équipe passionnée d&apos;éducateurs
            expérimentés, notre garderie se dédie à offrir un espace où
            l&apos;éducation et le bien-être des enfants sont au cœur de toutes
            nos activités.
          </p>
        </div>
        <div className="grid xl:grid-cols-3 gap-8">
          {aboutData.map((data, index) => (
            <div
              key={index}
              className="w-full border border-dashed border-secondary/80 p-8 rounded-3xl flex flex-col items-center gap-4"
            >
              <div className="rounded-full bg-accent w-28 h-28 flex items-center justify-center p-6">
                <img src={data.icon} alt="mision" className="object-contain" />
              </div>
              <div className="space-y-2">
                <h1 className="font-semibold text-2xl">{data.title}</h1>
                <p className="max-w-6xl text-lg">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-row min-h-[90vh] items-center justify-center pt-10 pb-20 px-8 md:px-20 lg:px-60 gap-10">
        <div className="w-full hidden lg:flex">
          <Image src="/images/about.png" alt="about" width={890} height={720} />
        </div>
        <div className="w-full space-y-8">
          <div className=" space-y-2">
            <h1 className="font-bold text-4xl">Notre Programme</h1>
            <p className="max-w-6xl text-lg">
              Un programme riche et varié pour le développement complet des
              enfants.
              <br />À ABBADI, nous avons conçu un programme qui encourage le
              développement global des enfants, alliant apprentissage
              académique, développement personnel, et épanouissement créatif.
              Notre approche est centrée sur l’enfant, et nous veillons à ce que
              chaque activité soit adaptée à l&apos;âge et aux intérêts des
              enfants.
            </p>
          </div>
          <div className="bg-primary rounded-2xl flex flex-row items-center justify-between px-10 py-4">
            <div className="space-y-2 text-center text-white">
              <span className="font-bold text-3xl">14+</span>
              <p className="">Années d&apos;expérience</p>
            </div>
            <div className="h-10 border-r border-white/60 w-1" />{" "}
            <div className="space-y-2 text-center text-white">
              <span className="font-bold text-3xl">200+</span>
              <p className="">Enfants chaque année</p>
            </div>
            <div className="h-10 border-r border-white/60 w-1" />{" "}
            <div className="space-y-2 text-center text-white">
              <span className="font-bold text-3xl">10+</span>
              <p className="">Programmes éducatifs</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-row items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center bg-primary/20 rounded-full">
                <ChevronRight size={24} className="text-primary" />
              </div>
              <p className="text-lg">
                We believe every child is intelligent so we care.
              </p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center bg-primary/20 rounded-full">
                <ChevronRight size={24} className="text-primary" />
              </div>
              <p className="text-lg">
                Nos maîtres font une différence pour votre enfant.
              </p>
            </div>
          </div>
          <CustomButton className="w-fit px-20">Voir Plus</CustomButton>
        </div>
      </section>
    </>
  );
}
