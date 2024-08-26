"use client";
import RedirectComponent from "@/redirect/redirect-component";
import Image from "next/image";
import { useState } from "react";

interface SectionProps {
  id: string;
  ref?: React.RefObject<HTMLElement>;
}

export const ProductPresentation = ({ id, ref }: SectionProps) => {
  const [showRedirect, setShowRedirect] = useState(false);

  const handleRedirect = () => {
    setShowRedirect(true);
  };

  return (
    <section
      id={id}
      ref={ref}
      className="bg-gradient-to-r from-cyan-500 via-green-400 to-blue-500 text-black p-4 sm:p-8 md:p-12 rounded-3xl max-w-6xl mx-auto border-4 border-green-500 mb-12 shadow-lg"
    >
      <div className="text-center mb-8 md:mb-16 animate-fadeIn animate-delay-500">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          ¿Necesitas soporte <span className="text-white">técnico?</span>
        </h1>
        <p className="text-base md:text-xl text-justify text-black/70">
          Con más de 7 años de experiencia en el sector, ofrecemos soluciones
          personalizadas que aseguran el éxito en un mundo digital competitivo.
          PC y laptop, Impresoras, Redes, Toners, CCTV (circuito cerrado de TV)
        </p>
      </div>

      {[
        {
          title: "Soporte técnico de computadoras",
          subtitle:
            "Nuestra prioridad es ayudarte a mantener tus operaciones sin interrupciones.",
          description:
            "Brindamos soporte técnico excepcional, resolviendo cualquier problema con rapidez y eficacia.",
          buttonText: "¡Contáctanos!",
          imageSrc: "/logo_soporte.webp",
          imageAlt: "Soporte Técnico PC",
        },
        {
          title: "Soporte para Impresoras",
          subtitle: "Garantizamos la fiabilidad de tu equipo.",
          description:
            "Ofrecemos soporte especializado para impresoras, asegurando que tus equipos funcionen sin problemas.",
          buttonText: "¡Solicita soporte!",
          imageSrc: "/impresora_logo.webp",
          imageAlt: "Soporte Técnico Impresoras",
        },
        {
          title: "Soporte en Redes",
          subtitle: "Aseguramos la seguridad y fiabilidad de tus redes.",
          description:
            "Con nuestra experiencia en gestión de redes, proporcionamos soluciones especializadas que garantizan el rendimiento y la seguridad de tu infraestructura.",
          buttonText: "¡Consulta más!",
          imageSrc: "/redes_logo.webp",
          imageAlt: "Soporte en Redes",
        },
      ].map((section, index) => (
        <div
          key={index}
          className={`grid gap-8 md:gap-12 md:grid-cols-2 items-center ${
            index > 0 ? "mt-12" : ""
          }`}
        >
          <div
            className={`flex flex-col items-start animate-fadeIn animate-delay-${
              1000 + index * 500
            }`}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {section.title}
            </h2>
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              {section.subtitle}
            </h3>
            <p className="text-base md:text-lg mb-6">{section.description}</p>
            <button
              onClick={handleRedirect}
              className="px-4 py-2 md:px-6 md:py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-300 text-sm md:text-base"
            >
              {section.buttonText}
            </button>
          </div>
          <div
            className={`flex justify-center animate-fadeIn animate-delay-${
              1500 + index * 500
            }`}
          >
            <Image
              src={section.imageSrc}
              alt={section.imageAlt}
              className="w-48 h-48 md:w-72 md:h-72 object-contain transform hover:scale-105 transition-transform duration-500 rounded-xl"
              width={1200}
              height={1200}
            />
          </div>
        </div>
      ))}

      {showRedirect && (
        <RedirectComponent
          url="https://api.whatsapp.com/send?phone=5216692071277&text=Hola!%20Me%20interesa%20uno%20de%20sus%20servicios"
          duration={750}
          bool={showRedirect}
        />
      )}
    </section>
  );
};
