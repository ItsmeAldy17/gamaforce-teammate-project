import App from "@/components/App";

import React from "react";

// import Layout from "@/components/Layout";

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
  const missions = await getMissions(); // variabel missions bertipe array of object
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-transparent">
      <App missions={missions} />
    </main>
  );
}
