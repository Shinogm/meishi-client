"use client";
import RedirectComponent from "@/redirect/redirect-component";
import Image from "next/image";
import { useState } from "react";

export const TonersComponent = () => {
  const [showRedirect, setShowRedirect] = useState(false);

  return (
    <section className="bg-gray-50 text-black p-12 rounded-3xl max-w-6xl mx-auto border-4 border-blue-500 mb-12 shadow-lg">
      <div className="text-center mb-16 animate-fadeIn animate-delay-500">
        <h1 className="text-5xl font-bold mb-4">
          Toners para Impresoras <span className="text-blue-500">Premium</span>
        </h1>
        <p className="text-xl text-justify text-black/70">
          Mejora la calidad de tus impresiones con nuestros toners de alta
          durabilidad y rendimiento.
          <br />
          <span className="text-blue-500 font-bold">
            El precio depende del modelo de tu impresora.
          </span>
          <br />
          *Compatible con una amplia gama de impresoras. <br />
        </p>
      </div>
      <div className="grid gap-12 md:grid-cols-2 items-center">
        <div className="flex flex-col items-start animate-fadeIn animate-delay-1000">
          <h2 className="text-3xl font-bold mb-4">
            Rendimiento y Calidad Superior
          </h2>

          <p className="text-lg mb-6">
            Nuestros toners garantizan colores vibrantes y una calidad de
            impresión nítida en cada página.
            <br />
            *Compatible con una amplia gama de impresoras. <br />
            <span className="text-red-300 font-semibold">
              *Consulta la compatibilidad específica con tu modelo.
            </span>
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <button
              onClick={() => setShowRedirect(true)}
              className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300"
            >
              www.grupocom.com.mx
            </button>
            {showRedirect ? (
              <RedirectComponent
                url="https://grupocom.com.mx/"
                duration={750}
                bool={showRedirect}
              />
            ) : null}
            <button
              onClick={() => setShowRedirect(true)}
              className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300"
            >
              www.meishi.com.mx
            </button>
            {showRedirect ? (
              <RedirectComponent
                url="https://meishi.com.mx/"
                duration={750}
                bool={showRedirect}
              />
            ) : null}
            <button
              onClick={() => setShowRedirect(true)}
              className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300"
            >
              www.crt-c.com.mx
            </button>{" "}
            {showRedirect ? (
              <RedirectComponent
                url="https://ctrl-c.com.mx/"
                duration={750}
                bool={showRedirect}
              />
            ) : null}
            <button
              onClick={() => setShowRedirect(true)}
              className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300"
            >
              ¡Quiero saber más!
            </button>
            {showRedirect ? (
              <RedirectComponent
                url="https://api.whatsapp.com/send?phone=5216692071277&text=Hola!%20Me%20interesa%20uno%20de%20sus%20toners"
                duration={750}
                bool={showRedirect}
              />
            ) : null}
          </div>
        </div>{" "}
        <div className="flex justify-center animate-fadeIn animate-delay-2500">
          <Image
            src="/toner1.webp"
            alt="Alta durabilidad"
            className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500 rounded-xl"
            width={1200}
            height={800}
          />
        </div>
      </div>
    </section>
  );
};
