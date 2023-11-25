"use client"; // requirement 1
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet"; // requirement 2
import "leaflet/dist/leaflet.css"; // requirement 3
import L from "leaflet"; // requirement 4
import Link from "next/link";
import "leaflet-draw/dist/leaflet.draw.css"; // add icon draw

const LoadMisi = ({ missions = "", searchMission = "" }) => {
  const getAllMissions = JSON.parse(JSON.stringify(missions)); // ubah missins menjadi array of object

  // .find() digunakan untuk mencari objek pertama dalam array getAllMissions yang memenuhi kondisi mission.name === searchMission.
  const geoJSON =
    getAllMissions.find((mission) => mission.name === searchMission)
      ?.geoJSONs || [];

  const geoJSONData = JSON.stringify(geoJSON); // ubah array of object geoJSON menjadi string / format JSON

  const loc = [-7.773796086515779, 110.37834223730684];
  const zoom_level = 20;

  const map_tiler = {
    url: "https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=r5rdGo7BGVTWa7OH6yMv",
    atr: '&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  };

  const [iconMarker, setIconMarker] = useState(null);

  useEffect(() => {
    // Pastikan kode ini hanya dieksekusi di lingkungan browser
    if (typeof window !== "undefined") {
      // inisialisasi iconMarker tanpa useRef
      const newIconMarker = new L.Icon({
        iconUrl: "./img/Logo_Gamaforce_Biru.png",
        iconSize: [80, 80],
        anchorSize: [80 / 2, 80], // it centered the icon
        popupAnchor: [0, -80 / 2], // icon will be showed above the marker
      });

      // Set ikon marker langsung
      setIconMarker(newIconMarker);

      // fix icon marker
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "./img/marker-icon.png",
        iconUrl: "./img/marker-icon.png",
        shadowUrl: "./img/marker-icon.png", // shadow icon
      });
    }
  }, []); // Eksekusi sekali setelah render pertama

  return (
    <>
      {/* <p className="text-center mt-[200px]">{JSON.stringify(geoJSON)}</p> */}
      <MapContainer
        center={loc}
        zoom={zoom_level}
        scrollWheelZoom={true}
        className="w-screen h-screen"
      >
        {/* Misalnya, menampilkan data GeoJSON yang disimpan di state */}
        <GeoJSON
          data={JSON.parse(geoJSONData)} // dia butuh format JSON, jadi harus di parse dulu
          style={() => ({
            color: "blue",
            weight: 2,
            opacity: 0.5,
          })}
        />

        <TileLayer url={map_tiler.url} attribution={map_tiler.atr} />

        <Marker
          position={[-7.773796086515779, 110.37834223730684]}
          icon={iconMarker}
        >
          <Popup>
            <Link
              href="https://gamaforce.wg.ugm.ac.id/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Gamaforce{" "}
            </Link>
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default LoadMisi;
