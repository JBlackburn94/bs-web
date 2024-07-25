"use client";
import { useEffect } from "react";
import Hero from "./components/Hero";
import Shows from "./components/Shows";

export default function Home() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <main>
      <Hero />
      <Shows />
    </main>
  );
}
