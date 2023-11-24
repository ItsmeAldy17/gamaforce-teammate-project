"use client";
import React, { useState } from "react";
import PopUp from "./PopUp";
import Button from "./Button";

const ButtonCRUD = ({geoJSON ="", missions=""}) => {
  const [showPopUp, setShowPopUp] = useState(false);

  const handleButtonClick = () => {
    setShowPopUp((prev) => !prev);
  };

  return (
    <>
      {showPopUp && <PopUp geoJSON={geoJSON} MISSIONS={missions} onClose={() => setShowPopUp(false)} />}
      <Button
        className="fixed bottom-[50px] z-[9999999] border-[#233059] border-4 border-solid bg-transparent text-[#233059] font-bold rounded-full p-4 text-3xl"
        onClick={handleButtonClick}
      >
        Plan Mission
      </Button>
    </>
  );
};

export default ButtonCRUD;


