"use client"; // requirement 1
import React from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet"; // requirement 2
import "leaflet/dist/leaflet.css"; // requirement 3
import L from "leaflet"; // requirement 4
import Link from "next/link";
import "leaflet-draw/dist/leaflet.draw.css"; // add icon draw

const LoadMisi = ({ missions = "", searchMission = "" }) => {
  const getAllMissions = JSON.parse(JSON.stringify(missions)); // ubah missins menjadi array of object
  const geoJSON = getAllMissions.map((mission) => { // return array of object geoJSON
    if (mission.name === searchMission) {
      return mission.geoJSONs;
    }
  });
  const geoJSONData = JSON.stringify(geoJSON); // ubah array of object geoJSON menjadi string / format JSON

  const loc = [-7.773796086515779, 110.37834223730684];
  const zoom_level = 20;

  const map_tiler = {
    url: "https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=r5rdGo7BGVTWa7OH6yMv",
    atr: '&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  };

  const iconMarker = new L.Icon({
    iconUrl: "./img/Logo_Gamaforce_Biru.png",
    iconSize: [80, 80],
    anchorSize: [80 / 2, 80], // it centered the icon
    popupAnchor: [0, -80 / 2], // icon will be showed above the marker
  });

  // fix icon marker
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "./img/marker-icon.png",
    iconUrl: "./img/marker-icon.png",
    shadowUrl: "./img/marker-icon.png", // shadow icon
  });

  return (
    <>
      <MapContainer
        center={loc}
        zoom={zoom_level}
        scrollWheelZoom={true}
        className="w-screen h-screen"
      >
        {/* Misalnya, menampilkan data GeoJSON yang disimpan di state */}
        {/* {geoJSONData && ( */}
        <GeoJSON
          data={geoJSONData}
          style={() => ({
            color: "blue",
            weight: 2,
            opacity: 0.5,
          })}
        />
        {/* )} */}

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
