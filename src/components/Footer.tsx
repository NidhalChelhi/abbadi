/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Footer() {
  return (
    <footer className="py-10 w-full bg-accent px-8 md:px-20 lg:px-40">
      <div className="flex flex-col xl:flex-row justify-between items-start w-full gap-20 xl:gap-40">
        {/* Left Section */}
        <div className="max-w-lg">
          <img src="/logos/main.png" alt="Abbadi Logo" />
          <p className="mt-4 text-gray-600 text-lg">
            Notre objectif est de fournir une opportunité adaptée à l&apos;âge
            pour chaque enfant inscrit aux cours d&apos;enrichissement du
            garderie ABBADI.
          </p>
        </div>

        {/* Center Section */}
        <div className="w-full">
          <h3 className="font-bold text-2xl text-black mb-4">Liens Rapides</h3>
          <div className="flex flex-col lg:flex-row gap-8 justify-between">
            <ul className="space-y-2 text-gray-600">
              <li>À propos</li>
              <li>Cours</li>
              <li>Boutique</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
            <ul className="space-y-2 text-gray-600">
              <li>Récemment Consulté</li>
              <li>Nouveaux Programmes</li>
              <li>Programmes</li>
              <li>Carrière</li>
              <li>Affaires Scolaires</li>
            </ul>

            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center space-x-2">
                <img
                  src="/icons/location.png"
                  alt="Location Icon"
                  className="w-5 h-5"
                />
                <span>123, Rue de la Liberté, 1002 Tunis, Tunisie</span>
              </li>
              <li className="flex items-center space-x-2">
                <img
                  src="/icons/phone.png"
                  alt="Phone Icon"
                  className="w-5 h-5"
                />
                <span>+216 22 222 222</span>
              </li>
              <li className="flex items-center space-x-2">
                <img
                  src="/icons/mail.png"
                  alt="Email Icon"
                  className="w-5 h-5"
                />
                <span>abbadi.garderie@email.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
