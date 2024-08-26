"use client";
import RedirectComponent from "@/redirect/redirect-component";
import Image from "next/image";
import { useState } from "react";

export const SeccionVenta = () => {
  const [showRedirect, setShowRedirect] = useState(false);
  const [openImage, setOpenImage] = useState<string | null>(null);
  const [redirectUrl, setRedirectUrl] = useState("");

  const images = ["/punto_img3.webp", "/punto_img2.webp", "/punto_img1.webp"];

  const handleButtonClick = (url: string) => {
    setShowRedirect(true);
    setRedirectUrl(url);
  };

  const buttons = [
    { text: "www.ctrl-c.com.mx", url: "https://ctrl-c.com.mx" },
    { text: "www.grupocom.com.mx", url: "https://grupocom.com.mx" },
    { text: "www.meishi.com.mx", url: "https://meishi.com.mx" },
    {
      text: "¡Quiero saber más!",
      url: "https://api.whatsapp.com/send?phone=5216941102012&text=Hola!%20Me%20interesa%20uno%20de%20sus%20servicios",
    },
  ];

  return (
    <section className="bg-white text-black p-4 sm:p-8 md:p-12 rounded-3xl max-w-6xl mx-auto border-4 border-green-500 mb-12 shadow-lg">
      <div className="text-center mb-8 md:mb-16 animate-fadeIn animate-delay-500">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Punto de Venta <span className="text-green-500">WEB</span>
        </h1>
        <p className="text-base md:text-xl text-justify text-black/70">
          Implementa un punto de venta en línea perfecto para restaurantes,
          taquerías y negocios de comida para llevar.
          <br />
          <span className="text-green-500 font-bold">$9,999.00 anual.</span>
          <br />
          *Incluye licencia básica y sistema web. <br />
          *Equipo de cómputo y periféricos no incluidos.
        </p>
      </div>
      <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
        <div className="flex flex-col items-start animate-fadeIn animate-delay-1000">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Simplifica la gestión de tu negocio
          </h2>

          <p className="text-base md:text-lg mb-6">
            Con nuestro punto de venta web, podrás gestionar tus ventas de
            manera fácil y eficiente, sin complicaciones.
            <br />
            <span className="text-green-500 font-bold">$9,999.00 anual.</span>
            <br />
            *Incluye licencia básica y sistema web. <br />
            <span className="text-red-300 font-semibold">
              *Equipo de cómputo y periféricos no incluidos.
            </span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full">
            {buttons.map((button, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(button.url)}
                className="px-4 py-2 md:px-6 md:py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-300 text-sm md:text-base"
              >
                {button.text}
              </button>
            ))}
          </div>
          {showRedirect && (
            <RedirectComponent
              url={redirectUrl}
              duration={750}
              bool={showRedirect}
            />
          )}
        </div>
        <div className="flex justify-center animate-fadeIn animate-delay-1500">
          <Image
            src="/sell_point.webp"
            alt="Punto de venta web"
            className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500 rounded-xl"
            width={1200}
            height={800}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 md:mt-12">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative cursor-pointer overflow-hidden rounded-lg group"
            onClick={() => setOpenImage(src)}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-auto object-cover transition-transform duration-500 transform group-hover:scale-110"
              width={600}
              height={400}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">
                Ver Imagen
              </span>
            </div>
          </div>
        ))}
      </div>
      {openImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
          onClick={() => setOpenImage(null)}
        >
          <Image
            src={openImage}
            alt="Open Image"
            className="w-auto h-auto object-contain rounded-lg"
            width={1200}
            height={800}
          />
        </div>
      )}
    </section>
  );
};
