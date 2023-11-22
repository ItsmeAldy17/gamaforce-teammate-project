"use client";
import React, { useState } from "react";
import PopUp from "./PopUp";
import Button from "./Button";

const ButtonCRUD = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  const handleButtonClick = () => {
    setShowPopUp((prev) => !prev);
  };

  return (
    <>
      {showPopUp && <PopUp onClose={() => setShowPopUp(false)} />}
      <Button
        className="fixed bottom-[50px] z-[9999999] border-white border-4 border-solid bg-transparent text-white font-bold rounded-full p-4 text-3xl"
        onClick={handleButtonClick}
      >
        Plan Mission
      </Button>
    </>
  );
};

export default ButtonCRUD;


