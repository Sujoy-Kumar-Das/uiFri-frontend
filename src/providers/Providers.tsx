"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { ReactNode, useEffect } from "react";
export default function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    AOS.init({ once: false });
    return () => {
      AOS.refresh();
    };
  }, []);
  return <main>{children}</main>;
}
