"use client";
import RedirectComponent from "@/redirect/redirect-component";
import Image from "next/image";
import { useState } from "react";

export const ContactComponent = () => {
  const [showRedirect, setShowRedirect] = useState(false);
  const phoneNumber = "669 207 1277";

  return (
    <section className="p-6 border-2 border-gray-500 rounded-lg shadow-2xl max-w-xs mx-auto bg-gradient-to-b from-gray-300 to-gray-500 fixed top-16 right-0 m-4 z-10">
      {/* Cuadro de "Llámanos" */}
      <span className="text-center text-2xl font-bold mb-4 text-white drop-shadow-xl">
        Llámanos
      </span>

      {/* Cuadro vertical con número de teléfono y imagen de WhatsApp */}
      <div className="flex flex-col items-center bg-gray-100 p-6 border rounded-lg shadow-lg space-y-4">
        <div className="flex flex-col items-center text-lg space-y-2">
          {/* Renderizar cada dígito verticalmente con más espacio y estilo */}
          {phoneNumber.split("").map((digit, index) => (
            <span
              className="text-black font-mono tracking-widest text-xl"
              key={index}
            >
              {digit}
            </span>
          ))}
        </div>
        <a
          className="pointer-events-auto mt-4 transition-transform transform hover:scale-125 focus:scale-125"
          href="#"
          onClick={() => setShowRedirect(true)}
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"
            alt="WhatsApp Icon"
            width={60}
            height={60}
            className="w-16 h-16 drop-shadow-2xl animate-bounce"
          />
        </a>

        {showRedirect && (
          <RedirectComponent
            url="https://api.whatsapp.com/send?phone=5216692071277&text=Hola!%20Me%20interesa%20uno%20de%20sus%20servicios"
            duration={3000}
            bool={showRedirect}
          />
        )}
      </div>
    </section>
  );
};
