import Navbar from "@/components/Navbar";
import ButtonCRUD from "@/components/ButtonCRUD";
import dynamic from "next/dynamic";
import React from "react";

// import Layout from "@/components/Layout";

const Map = dynamic(() => import("@/components/Map"), {
  loading: () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
    </div>
  ),
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-transparent">
      <Navbar />
      <Map />
      <ButtonCRUD />
    </main>
  );
}
