"use client";
import RedirectComponent from "@/redirect/redirect-component";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ContactComponent = () => {
  const [showRedirect, setShowRedirect] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "694 110 2012";
  const [isRinging, setIsRinging] = useState(false);

  useEffect(() => {
    const ringInterval = setInterval(() => {
      setIsRinging((prev) => !prev);
    }, 1000);

    return () => clearInterval(ringInterval);
  }, []);

  return (
    <div className="fixed top-16 right-0 m-4 z-10">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={isRinging ? { y: [-5, 0, -5] } : {}}
        transition={isRinging ? { repeat: Infinity, duration: 0.5 } : {}}
        onClick={() => setIsVisible(!isVisible)}
        className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 rounded-full shadow-lg mb-2 flex items-center justify-center"
      >
        {isVisible ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        )}
      </motion.button>

      <AnimatePresence>
        {isVisible && (
          <motion.section
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="p-4 border-2 border-blue-500 rounded-lg shadow-xl max-w-xs mx-auto bg-gradient-to-b from-blue-400 to-purple-500"
          >
            <h2 className="text-xl font-bold mb-3 text-white text-center">
              ¡Llámanos ahora!
            </h2>

            <div className="bg-white p-4 rounded-lg shadow-md space-y-3">
              <div className="flex flex-col items-center">
                {phoneNumber.split("").map((digit, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-blue-600 font-mono text-xl"
                  >
                    {digit}
                  </motion.span>
                ))}
              </div>
              <div className="flex justify-center mt-3">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  onClick={() => setShowRedirect(true)}
                >
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"
                    alt="WhatsApp"
                    width={50}
                    height={50}
                    className="w-12 h-12"
                  />
                </motion.a>
              </div>

              {showRedirect && (
                <RedirectComponent
                  url="https://api.whatsapp.com/send?phone=5216941102012&text=Hola!%20Me%20interesa%20uno%20de%20sus%20servicios"
                  duration={3000}
                  bool={showRedirect}
                />
              )}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};
