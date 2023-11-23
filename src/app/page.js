import Navbar from "@/components/Navbar";
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

const getMissions = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/mission", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch missions");
    }
    return res.json();
  } catch (err) {
    console.log(`Error loading missions: ${err}`);
  }
};

export default async function Home() {
  const { missions } = await getMissions();
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-transparent">
      <Navbar />
      <Map missions={missions} />
    </main>
  );
}
