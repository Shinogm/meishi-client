import Image from "next/image";

export const SellComponent = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative w-full min-h-[600px] md:h-[831px]">
        <Image
          src="/punto_venta_inicio.webp"
          alt="Fondo"
          className="object-cover w-full h-full rounded-lg"
          layout="fill"
          priority
        />

        <div className="absolute inset-0 z-10 flex flex-col md:flex-row items-center justify-between p-4 md:p-16">
          {/* Contenedor de texto principal */}
          <div className="bg-white bg-opacity-80 rounded-lg text-center shadow-xl p-4 md:p-6 mb-4 md:mb-0 md:mr-8 w-full md:w-auto">
            <h2 className="text-black text-2xl md:text-5xl font-extrabold mb-2 font-serif drop-shadow-md">
              CONOCE
            </h2>
            <h1 className="text-black text-xl md:text-4xl font-bold mb-2 md:mb-4 drop-shadow-md">
              LAS MEJORES SOLUCIONES PARA TU NEGOCIO
            </h1>
            <h2 className="text-black text-2xl md:text-5xl font-extralight drop-shadow-md">
              ONLINE
            </h2>
          </div>

          <div className="flex flex-col items-center md:items-end w-full md:w-auto">
            {/* Texto de características y precios */}
            <div className="bg-cyan-700 text-white rounded-lg shadow-lg p-4 mb-4 w-full md:max-w-sm">
              <p className="text-xs md:text-base font-mono">
                Para <strong>Ferreterías</strong>, <strong>tienditas</strong>,{" "}
                <strong>papelerías</strong>, <strong>farmacias</strong>,
                <strong>fruterías</strong>, <strong>abarroteras</strong>,{" "}
                <strong>panaderías</strong> a tan solo
                <span className="block font-bold text-yellow-300 mt-2">
                  $4,999.00 anual.
                </span>
                <span className="block font-semibold mt-2">
                  * Incluye una licencia básica y sistema web.
                </span>
                <span className="block text-red-300 font-semibold mt-2">
                  * No incluye equipo de cómputo ni periféricos.
                </span>
              </p>
            </div>

            {/* Cuadros con texto */}
            <div className="flex flex-col items-center w-full md:w-auto">
              <div className="bg-blue-600 text-white p-3 md:p-4 mb-4 w-full flex items-center justify-center rounded-lg shadow-lg">
                <p className="font-bold font-serif text-lg md:text-3xl text-center">
                  www.grupocom.com.mx
                </p>
              </div>
              <div className="bg-red-500 text-white p-3 md:p-4 w-full flex items-center justify-center rounded-lg shadow-lg">
                <p className="font-bold text-lg md:text-3xl text-center">
                  Mi Punto de Venta
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
