"use client";
import RedirectComponent from "@/redirect/redirect-component";
import Image from "next/image";
import { useState } from "react";
interface SectionProps {
  id: string;
  ref?: any;
}

export const ProductPresentation = ({ id, ref }: SectionProps) => {
  const [showRedirect, setShowRedirect] = useState(false);
  return (
    <section
      id={id}
      ref={ref}
      className="bg-gradient-to-r from-cyan-500 via-green-400 to-blue-500 text-black p-12 rounded-3xl max-w-6xl mx-auto border-4 border-green-500 mb-12 shadow-lg"
    >
      <div className="text-center mb-16 animate-fadeIn animate-delay-500">
        <h1 className="text-5xl font-bold mb-4">
          ¿Necesitas soporte <span className="text-white">técnico?</span>
        </h1>
        <p className="text-xl text-justify text-black/70">
          Con más de 7 años de experiencia en el sector, ofrecemos soluciones
          personalizadas que aseguran el éxito en un mundo digital competitivo.
          PC y laptop, Impresoras, Redes, Toners, CCTV (circuito cerrado de TV)
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 items-center">
        <div className="flex flex-col items-start animate-fadeIn animate-delay-1000">
          <h2 className="text-3xl font-bold mb-4">
            Soporte técnico de computadoras
          </h2>
          <h3 className="text-xl font-semibold mb-4">
            Nuestra prioridad es ayudarte a mantener tus operaciones sin
            interrupciones.
          </h3>
          <p className="text-lg mb-6">
            Brindamos soporte técnico excepcional, resolviendo cualquier
            problema con rapidez y eficacia.
          </p>
          <button
            onClick={() => setShowRedirect(true)}
            className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-300"
          >
            ¡Contáctanos!
          </button>
          {showRedirect ? (
            <RedirectComponent
              url="https://api.whatsapp.com/send?phone=5216692071277&text=Hola!%20Me%20interesa%20uno%20de%20sus%20servicios"
              duration={750}
              bool={showRedirect}
            />
          ) : (
            <div></div>
          )}
        </div>
        <div className="flex justify-center animate-fadeIn animate-delay-1500">
          <Image
            src="/logo_soporte.webp"
            alt="Soporte Técnico PC"
            className="w-72 h-72 object-contain transform hover:scale-105 transition-transform duration-500 rounded-xl"
            width={1200}
            height={1200}
          />
        </div>
      </div>

      <div className="grid gap-12 md:grid-cols-2 items-center mt-12">
        <div className="flex justify-center animate-fadeIn animate-delay-2000">
          <Image
            src="/impresora_logo.webp"
            alt="Soporte Técnico Impresoras"
            className="w-72 h-72 object-cover transform hover:scale-105 transition-transform duration-500 rounded-xl"
            width={1200}
            height={1200}
          />
        </div>
        <div className="flex flex-col items-start animate-fadeIn animate-delay-2500">
          <h2 className="text-3xl font-bold mb-4">Soporte para Impresoras</h2>
          <h3 className="text-xl font-semibold mb-4">
            Garantizamos la fiabilidad de tu equipo.
          </h3>
          <p className="text-lg mb-6">
            Ofrecemos soporte especializado para impresoras, asegurando que tus
            equipos funcionen sin problemas.
          </p>
          <button
            onClick={() => setShowRedirect(true)}
            className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-300"
          >
            ¡Solicita soporte!
          </button>{" "}
          {showRedirect ? (
            <RedirectComponent
              url="https://api.whatsapp.com/send?phone=5216692071277&text=Hola!%20Me%20interesa%20uno%20de%20sus%20servicios"
              duration={750}
              bool={showRedirect}
            />
          ) : (
            <div></div>
          )}
        </div>
      </div>

      <div className="grid gap-12 md:grid-cols-2 items-center mt-12">
        <div className="flex flex-col items-start animate-fadeIn animate-delay-3000">
          <h2 className="text-3xl font-bold mb-4">Soporte en Redes</h2>
          <h3 className="text-xl font-semibold mb-4">
            Aseguramos la seguridad y fiabilidad de tus redes.
          </h3>
          <p className="text-lg mb-6">
            Con nuestra experiencia en gestión de redes, proporcionamos
            soluciones especializadas que garantizan el rendimiento y la
            seguridad de tu infraestructura.
          </p>
          <button
            onClick={() => setShowRedirect(true)}
            className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-300"
          >
            ¡Consulta más!
          </button>{" "}
          {showRedirect ? (
            <RedirectComponent
              url="https://api.whatsapp.com/send?phone=5216692071277&text=Hola!%20Me%20interesa%20uno%20de%20sus%20servicios"
              duration={750}
              bool={showRedirect}
            />
          ) : (
            <div></div>
          )}
        </div>
        <div className="flex justify-center animate-fadeIn animate-delay-3500">
          <Image
            src="/redes_logo.webp"
            alt="Soporte en Redes"
            className="w-72 h-72 object-cover transform hover:scale-105 transition-transform duration-500 rounded-xl"
            width={1200}
            height={1200}
          />
        </div>
      </div>
    </section>
  );
};
