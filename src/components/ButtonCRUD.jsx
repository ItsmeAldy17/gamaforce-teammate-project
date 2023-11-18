"use client";
import { useState } from "react";
import React from "react";
import PopUp from "./PopUp";
import Button from "./Button";

const ButtonCRUD = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <>
      {showPopUp && <PopUp />}
      <Button className="fixed bottom-[50px] z-[9999999] border-black border-4 border-solid bg-transparent text-black font-bold rounded-full p-4 text-3xl" onClick={() => setShowPopUp((prev) => !prev)} >Plan Mission</Button>
    </>
  );
};

export default ButtonCRUD;
