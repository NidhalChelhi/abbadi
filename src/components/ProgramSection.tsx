/* eslint-disable @next/next/no-img-element */
import React from "react";

const programData = [
  {
    image: "/images/program1.png",
    title: "Activités éducatives",
    description:
      "Des ateliers de lecture, d’écriture, et de mathématiques ludiques qui visent à stimuler la curiosité intellectuelle et à développer des compétences fondamentales chez les enfants dès leur plus jeune âge.",
    component: (
      <div className="bg-primary rounded-2xl flex flex-row items-center justify-between px-8 py-2 w-full">
        <div className="space-y-0 text-center text-white">
          <span className="font-bold text-xl">
            4-5
            <br />
            ans
          </span>
          <p className="">Age</p>
        </div>
        <div className="h-10 border-r border-white/60 w-1" />{" "}
        <div className="space-y-0 text-center text-white">
          <span className="font-bold text-xl">
            3
            <br />
            jours
          </span>
          <p className="">Par semaine</p>
        </div>
        <div className="h-10 border-r border-white/60 w-1" />{" "}
        <div className="space-y-0 text-center text-white">
          <span className="font-bold text-xl">
            3.30
            <br />
            heures
          </span>
          <p className="">Période</p>
        </div>
      </div>
    ),
  },
  {
    image: "/images/program2.png",
    title: "Ateliers créatifs",
    description:
      "Peinture, musique, théâtre, et danse – autant d'activités qui permettent aux enfants de s’exprimer et de découvrir leurs talents artistiques dans une atmosphère joyeuse et encourageante.",
    component: (
      <div className="bg-secondary rounded-2xl flex flex-row items-center justify-between px-8 py-2 w-full">
        <div className="space-y-0 text-center text-white">
          <span className="font-bold text-xl">
            4-5
            <br />
            ans
          </span>
          <p className="">Age</p>
        </div>
        <div className="h-10 border-r border-white/60 w-1" />{" "}
        <div className="space-y-0 text-center text-white">
          <span className="font-bold text-xl">
            3
            <br />
            jours
          </span>
          <p className="">Par semaine</p>
        </div>
        <div className="h-10 border-r border-white/60 w-1" />{" "}
        <div className="space-y-0 text-center text-white">
          <span className="font-bold text-xl">
            3.30
            <br />
            heures
          </span>
          <p className="">Période</p>
        </div>
      </div>
    ),
  },
  {
    image: "/images/program3.png",
    title: "Éducation physique",
    description:
      "Des séances de motricité et de jeux en plein air pour développer la coordination, la motricité globale, et promouvoir un mode de vie actif dès le plus jeune âge.",
    component: (
      <div className="bg-tertiary rounded-2xl flex flex-row items-center justify-between px-8 py-2 w-full">
        <div className="space-y-0 text-center text-white">
          <span className="font-bold text-xl">
            4-5
            <br />
            ans
          </span>
          <p className="">Age</p>
        </div>
        <div className="h-10 border-r border-white/60 w-1" />{" "}
        <div className="space-y-0 text-center text-white">
          <span className="font-bold text-xl">
            3
            <br />
            jours
          </span>
          <p className="">Par semaine</p>
        </div>
        <div className="h-10 border-r border-white/60 w-1" />{" "}
        <div className="space-y-0 text-center text-white">
          <span className="font-bold text-xl">
            3.30
            <br />
            heures
          </span>
          <p className="">Période</p>
        </div>
      </div>
    ),
  },
];
export default function ProgramSection() {
  return (
    <section
      id="program"
      className="bg-accent flex flex-col min-h-[100vh] items-center justify-center text-center py-20 px-8 md:px-20 lg:px-60 gap-10"
    >
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Notre Programme</h1>
        <p className="max-w-6xl text-lg">
          Un programme riche et varié pour le développement complet des enfants.
        </p>
      </div>
      <div className="grid xl:grid-cols-3 gap-8">
        {programData.map((data, index) => (
          <div
            key={index}
            className="w-full bg-white p-8 rounded-3xl flex flex-col items-start text-start gap-4"
          >
            <img src={data.image} alt="mision" className="object-contain" />
            <div className="space-y-2">
              <h1 className="font-semibold text-2xl">{data.title}</h1>
              <p className="max-w-6xl text-lg">{data.description}</p>
            </div>
            {data.component}
          </div>
        ))}
      </div>
    </section>
  );
}
