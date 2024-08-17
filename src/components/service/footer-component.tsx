import Image from "next/image";

export const FooterComponent = () => {
  const fullYear = new Date().getFullYear().toString();
  return (
    <footer className="bg-blue-900 text-white py-6 px-8 relative h-32 flex items-center justify-center">
      <section className="absolute inset-0 flex items-end">
        <Image
          src="/grupocomlogo.webp"
          alt="GrupoCom"
          width={300}
          height={300}
          style={{
            borderRadius: "10px",
          }}
          className="h-full object-contain transform scale-95 hover:scale-100 transition-transform duration-500"
        />
      </section>
      <div className="flex items-center justify-center space-x-16">
        <div className="text-center">
          <span className="text-3xl">Otros {"  "} </span>
          <span className="text-green-500 text-3xl uppercase font-bold">
            soportes
          </span>
          <div className="font-bold mt-2">
            <p>
              CRM para inmobiliarias <br />
              Punto de venta <br />
              Facturacion electronica
            </p>
          </div>
        </div>
        <div>
          <p>
            © {fullYear} GrupoCom. Todos los derechos reservados. reservados.
          </p>
        </div>
        <div className="text-center">
          <span className="text-3xl">Ven {"  "} </span>
          <span className="text-green-500 text-3xl uppercase font-bold">
            conocenos
          </span>
          <div className="font-bold mt-2">
            <p>
              Av. Aquiles Serdán 1007-int. 3 <br />
              Colonia Centro, Mazatlán, Sinaloa <br />
              Telefono: 694 110 2012
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
