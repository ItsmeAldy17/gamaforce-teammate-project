import Navbar from "../components/Navbar";
import Map from "../components/Map";
import Button from "@/components/Button";
import PopUp from "@/components/PopUp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <Map/>
      <Button/>
      {
        <PopUp/>
      }
    </main>
  );
}
