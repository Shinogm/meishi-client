"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface Props {
  url?: string;
  duration?: number; // tiempo de espera en milisegundos
  bool?: boolean;
}

const RedirectComponent = ({ url, duration = 1000, bool }: Props) => {
  const router = useRouter();

  useEffect(() => {
    if (bool) {
      const timer = setTimeout(() => {
        router.push(url ?? "");
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [bool, url, router, duration]);

  return null;
};

export default RedirectComponent;
