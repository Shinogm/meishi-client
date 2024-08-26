import Image from "next/image";

export const FooterComponent = () => {
  const fullYear = new Date().getFullYear().toString();
  return (
    <footer className="bg-blue-900 text-white py-6 px-4 md:px-8 relative flex flex-col md:flex-row items-center justify-center">
      <section className="absolute inset-0 flex items-end justify-between">
        <Image
          src="/grupocomlogo.webp"
          alt="GrupoCom"
          width={150}
          height={150}
          style={{
            borderRadius: "10px",
          }}
          className="object-contain opacity-45 transform scale-90 md:scale-100 hover:scale-105 transition-transform duration-500"
        />
      </section>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
        <div className="text-center">
          <span className="text-xl md:text-3xl">Otros {"  "} </span>
          <span className="text-green-500 text-xl md:text-3xl uppercase font-bold">
            soportes
          </span>
          <div className="font-bold mt-2 text-sm md:text-base">
            <p>
              CRM para inmobiliarias <br />
              Punto de venta <br />
              Facturación electrónica
            </p>
          </div>
        </div>
        <div className="text-center text-sm md:text-base">
          <p>© {fullYear} GrupoCom. Todos los derechos reservados.</p>
        </div>
        <div className="text-center">
          <span className="text-xl md:text-3xl">Ven {"  "} </span>
          <span className="text-green-500 text-xl md:text-3xl uppercase font-bold">
            conocenos
          </span>
          <div className="font-bold mt-2 text-sm md:text-base">
            <p>
              Av. Aquiles Serdán 1007-int. 3 <br />
              Colonia Centro, Mazatlán, Sinaloa <br />
              Teléfono: 694 110 2012
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
