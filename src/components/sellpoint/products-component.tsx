"use client";
import RedirectComponent from "@/redirect/redirect-component";
import Image from "next/image";
import { useState } from "react";

interface SectionProps {
  title: string;
  description: string;
  href: string;
  image?: string;
}

export const SectionProducts = ({
  title,
  description,
  href,
  image,
}: SectionProps) => {
  const [showRedirect, setShowRedirect] = useState(false);

  return (
    <div>
      <div className="bg-white text-[#333333] p-6 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 motion-safe:animate-fadeIn motion-safe:animate-delay-1000">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <div className="flex items-center justify-center mb-4 transform scale-95 hover:scale-100 transition-transform duration-500">
          <div className="w-80 h-48 relative overflow-hidden">
            <Image
              src={image || "/placeholder.webp"}
              layout="fill"
              objectFit="contain"
              alt={title}
              className="rounded-lg"
            />
          </div>
        </div>
        <p className="mb-4">{description}</p>
        <a
          href={href ?? "#"}
          className="text-[#0077B6] font-bold hover:text-[#005A8E]"
          onClick={() => setShowRedirect(true)}
        >
          Más información
        </a>{" "}
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
  );
};
