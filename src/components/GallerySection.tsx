/* eslint-disable @next/next/no-img-element */
import React from "react";

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
];

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="flex flex-col min-h-[90vh] items-center justify-center text-center py-20 px-8 md:px-20 lg:px-60 gap-10"
    >
      <div className="space-y-4">
        <h1 className="font-bold text-4xl">Activités et Photos</h1>
        <p className="max-w-6xl text-lg">
          Découvrez les moments forts de la vie à la garderie à travers des
          photos et des descriptions d’activités captivantes.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="object-cover w-full h-full hover:scale-110 app-transition"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
