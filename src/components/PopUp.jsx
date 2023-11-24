import React, { useState } from "react";
import { useRouter } from "next/navigation";

const PopUp = ({ onClose, geoJSON = "", MISSIONS = "" }) => {
  const geo = JSON.parse(JSON.stringify(MISSIONS)); // json di parse ke string lalu di parse lagi ke object biar bisa dimapping
  // const [missions, setMissions] = useState();
  const [missionName, setMissionName] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const router = useRouter();
  // const geoJSONData = JSON.parse(JSON.stringify(geoJSON));

  // useEffect(() => {
  //   localStorage.setItem("missions", JSON.stringify(missions));
  // }, [missions]);

  // const handleCreateMission = () => {
  //   if (missionName.trim() !== "") {
  //     const newMission = { name: missionName };
  //     setMissions([...missions, newMission]);
  //     setMissionName("");
  //   }
  // };

  // create mission
  const handleCreateMission = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/mission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: missionName, geoJSONs: geoJSON }),
      });
      if (!res.ok) {
        throw new Error("Failed to create mission");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditMission = (index) => {
    setMissionName(missions[index].name);
    setEditMode(true);
    setEditIndex(index);
  };

  const handleUpdateMission = () => {
    if (missionName.trim() !== "" && editIndex !== null) {
      const updatedMissions = [...missions];
      updatedMissions[editIndex].name = missionName;
      setMissions(updatedMissions);
      setMissionName("");
      setEditMode(false);
      setEditIndex(null);
    }
  };

  // delete mission
  const handleDeleteMission = async (id) => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      try {
        const res = await fetch(`http://localhost:3000/api/mission?id=${id}`, {
          method: "DELETE",
        });
        if (res.ok) {
          router.refresh();
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleClose = () => {
    setMissionName("");
    setEditMode(false);
    setEditIndex(null);
    onClose();
  };

  return (
    <section className="fixed top-0 z-[9999999] left-0 w-screen h-screen flex items-center justify-center bg-opacity-50 bg-gray-800 text-white space-x-5">
      {/* <p>{JSON.stringify(MISSIONS)}</p> */}{" "}
      {/* ngetest nilai dari JSON MISSIONS yang diparse menjadi string */}
      <form className="bg-white p-4 rounded-md text-black">
        <h2 className="text-2xl font-bold mb-4">
          {editMode ? "Edit Mission" : "Create Mission"}
        </h2>
        <label className="block mb-2">Mission Name:</label>
        <input
          type="text"
          value={missionName}
          onChange={(e) => setMissionName(e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-gray-300 mb-4"
        />
        <label className="block mb-2">GeoJSON</label>
        <input
          type="text"
          value={JSON.stringify(geoJSON)}
          className="w-full px-4 py-2 rounded-md border border-gray-300 mb-4"
        />
        <div className="flex justify-end">
          {editMode ? (
            <button
              onClick={handleUpdateMission}
              className="mr-2 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Update
            </button>
          ) : (
            <button
              type="submit"
              onClick={handleCreateMission}
              className="mr-2 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Create
            </button>
          )}
          <button
            onClick={handleClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
          >
            Cancel
          </button>
        </div>
      </form>
      <div className="mt-4 bg-white p-4 rounded-md text-black">
        <h2 className="text-2xl font-bold mb-4">Missions List</h2>
        <ul>
          {/* Ngemapping array of object */}
          {geo.missions.map((mission, index) => (
            <li key={index} className="mb-2">
              {mission.name}
              <button
                onClick={() => handleEditMission(index)}
                className="ml-2 bg-yellow-500 text-white px-2 py-1 rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteMission(mission._id)}
                className="ml-2 bg-red-500 text-white px-2 py-1 rounded-md"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PopUp;
