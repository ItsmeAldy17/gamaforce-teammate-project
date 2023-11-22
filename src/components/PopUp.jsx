import React, { useState } from "react";

const PopUp = ({ onClose }) => {
  const [missionName, setMissionName] = useState("");
  const [missionCreated, setMissionCreated] = useState(false);

  const handleCreateMission = () => {
    console.log("Mission created:", missionName);

    // Tampilkan PopUp berhasil jika misi berhasil dibuat
    setMissionCreated(true);

    // Sembunyikan PopUp pembuatan misi setelah beberapa detik (misalnya, 3 detik)
    setTimeout(() => {
      setMissionCreated(false);
      onClose();
    }, 3000);
  };

  const handleMissionCreatedClose = () => {
    setMissionCreated(false);
    onClose();
  };

  return (
    <section className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-opacity-50 bg-gray-800 text-white">
      <div className={`bg-white p-4 rounded-md text-black ${missionCreated ? 'hidden' : ''}`}>
        <h2 className="text-2xl font-bold mb-4">Create Mission</h2>
        <label className="block mb-2">Mission Name:</label>
        <input
          type="text"
          value={missionName}
          onChange={(e) => setMissionName(e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-gray-300 mb-4"
        />
        <div className="flex justify-end">
          <button
            onClick={handleCreateMission}
            className="mr-2 bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Create
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
      {missionCreated && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-opacity-50 bg-green-500 text-white">
          <div className="bg-white p-4 rounded-md text-black">
            <h2 className="text-2xl font-bold mb-4">Mission Created!</h2>
            <p>Your mission "{missionName}" has been successfully created.</p>
            <button
              onClick={handleMissionCreatedClose}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PopUp;
