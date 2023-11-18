"use client";
import React from "react";
import { useState, useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const mapRef = useRef();
  const [loc, setLoc] = useState({
    lat: -7.773796086515779,
    lng: 110.37834223730684,
  });
  const zoom_level = 20;

  const map_tiler = {
    url: "https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=r5rdGo7BGVTWa7OH6yMv",
    atr: '&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  };

  return (
    <>
      <MapContainer
        center={loc}
        zoom={zoom_level}
        ref={mapRef}
        scrollWheelZoom={true}
        className="w-screen h-screen"
      >
        <TileLayer url={map_tiler.url} attribution={map_tiler.atr} />
      </MapContainer>
    </>
  );
};

export default Map;
