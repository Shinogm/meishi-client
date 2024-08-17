import Image from "next/image";

export const SellComponent = () => {
  return (
    <section className="flex flex-col items-center justify-center py-24 px-4">
      <div className="relative w-full h-[800px]">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <Image
            src="/punto_venta_inicio.webp"
            alt="Fondo"
            className="object-cover w-full h-full"
            width={1920}
            height={1080}
          />
        </div>

        {/* Contenedor de texto principal */}
        <div className="absolute z-20 left-[5%] top-[10%] p-8 bg-white bg-opacity-80 rounded-lg text-center shadow-xl">
          <h2 className="text-black text-5xl font-extrabold mb-2 font-serif drop-shadow-md">
            CONOCE
          </h2>
          <h1 className="text-black text-4xl font-bold mb-4 drop-shadow-md">
            LAS MEJORES SOLUCIONES PARA TU NEGOCIO
          </h1>
          <h2 className="text-black text-5xl font-extralight drop-shadow-md">
            ONLINE
          </h2>
        </div>

        {/* Cuadros con texto */}
        <div className="absolute flex flex-col justify-center items-center h-full z-10 right-[10%] top-[15%]">
          <div className="bg-blue-600 text-white p-4 m-2 w-auto flex items-center justify-center rounded-lg shadow-lg">
            <p className="font-bold font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
              www.grupocom.com.mx
            </p>
          </div>
          <div className="bg-red-500 text-white p-4 m-2 w-auto flex items-center justify-center rounded-lg shadow-lg">
            <p className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
              Mi Punto de Venta
            </p>
          </div>
        </div>

        {/* Texto de características y precios */}
        <div className="absolute z-11 right-[7.9%] top-[4%] p-6 bg-cyan-700 text-white rounded-lg shadow-lg max-w-lg">
          <p className="text-lg sm:text-xl font-mono">
            Para **Ferreterías**, **tienditas**, **papelerías**, **farmacias**,
            **fruterías**, **abarroteras**, **panaderías** a tan solo
            <span className="font-bold text-yellow-300"> $4,999.00 anual.</span>
            <br />
            <span className="font-semibold">
              * Incluye una licencia básica y sistema web.
            </span>
            <br />
            <span className="text-red-300 font-semibold">
              * No incluye equipo de cómputo ni periféricos.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
