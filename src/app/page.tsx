"use client";

import { useInView } from "react-intersection-observer";
import { SeccionVenta } from "@/components/service/sell-point-component";
import { ContactComponent } from "@/components/sellpoint/contact-component";
import { SellComponent } from "@/components/sellpoint/sell-component";
import Image from "next/image";
import { ProductPresentation } from "@/components/service/service-component";
import { FooterComponent } from "@/components/service/footer-component";
import { ArchivementsComponent } from "@/components/service/archivements-component";
import { TonersComponent } from "@/components/service/tonner-component";

export default function Home() {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: false,
  });
  const { ref: informationRef, inView: informationInView } = useInView({
    triggerOnce: false,
  });
  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: false,
  });
  const { ref: achievementsRef, inView: achievementsInView } = useInView({
    triggerOnce: false,
  });
  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: false,
  });
  const { ref: tonnerRef, inView: tonnerInView } = useInView({
    triggerOnce: false,
  });

  return (
    <main className="bg-white min-h-screen w-full">
      <header className="bg-[#0077B6] text-white py-6 px-8 ">
        <div className="container mx-auto flex items-center justify-between">
          <a className="flex items-center cursor-pointer">
            <Image
              src="/LogoGrupoCom.webp"
              width={100}
              height={100}
              alt="GrupoCom Logo"
              className="h-10 mr-4 transition-transform duration-500 hover:rotate-12"
            />
            <h1 className="text-2xl font-bold text-black/50">GrupoCom</h1>
          </a>
          <nav className="hidden md:flex space-x-6">
            <div className="flex justify-center space-x-4">
              <button
                onClick={() =>
                  (window.location.href =
                    "https://api.whatsapp.com/send?phone=5216692071277&text=Hola!%20Me%20interesa%20uno%20de%20sus%20servicios")
                }
                className="bg-[#FFCC00] text-[#0077B6] font-bold py-2 px-4 rounded hover:bg-[#FFDD33] transition-transform duration-500 hover:scale-105"
              >
                Enviar Mensaje
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div
        ref={contactRef}
        className={`${
          contactInView
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full"
        } transition-all duration-700 z-50 fixed top-0 right-0`}
      >
        <ContactComponent />
      </div>

      <div
        ref={informationRef}
        className={`${
          informationInView
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-full"
        } transition-all duration-700`}
      >
        <SellComponent />
      </div>

      <div
        ref={aboutRef}
        className={`${
          aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transition-all duration-700`}
      >
        <SeccionVenta />
      </div>

      <div
        ref={tonnerRef}
        className={`${
          tonnerInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        } transition-all duration-700`}
      >
        <TonersComponent />
      </div>

      <div
        ref={servicesRef}
        className={`${
          servicesInView ? "opacity-100 scale-100" : "opacity-0 scale-75"
        } transition-all duration-700`}
      >
        <ProductPresentation id="presentation" />
      </div>

      <div
        ref={achievementsRef}
        className={`${
          achievementsInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        } transition-all duration-700`}
      >
        <ArchivementsComponent id="achievements" />
      </div>

      <FooterComponent />
    </main>
  );
}
