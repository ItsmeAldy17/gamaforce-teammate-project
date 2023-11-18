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
      <Button className="fixed bottom-0 z-50 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-full" onClick={() => setShowPopUp((prev) => !prev)} >Plan Mission</Button>
    </>
  );
};

export default ButtonCRUD;
