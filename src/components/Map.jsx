"use client";
import "leaflet/dist/leaflet.css"; // Import styles
import './styles/map.css'; // Import gaya kustom Anda
import leaflet from "leaflet";
import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
import { Popup } from "react-leaflet";
import Link from "next/link";
import { EditControl } from "react-leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css"; // add icon draw
import ButtonCRUD from "@/components/ButtonCRUD";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  {
    ssr: false,
  }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  {
    ssr: false,
  }
);

const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  {
    ssr: false,
  }
);

const FeatureGroup = dynamic(
  () => import("react-leaflet").then((mod) => mod.FeatureGroup),
  {
    ssr: false,
  }
);

const GeoJSON = dynamic(
  () => import("react-leaflet").then((mod) => mod.GeoJSON),
  {
    ssr: false,
  }
);

const { Icon } = leaflet;

const Map = ({ missions = "" }) => {
  // missions itu udah array of object
  // const { geoJSONs } = missions; 
  const [geoJSONData, setGeoJSONData] = useState([]);

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

  const iconMarker = new Icon({
    iconUrl: "./img/Logo_Gamaforce_Biru.png",
    iconSize: [80, 80],
    iconAnchor: [40, 80], // Mengubah anchor agar sesuai dengan posisi marker
    popupAnchor: [0, -80], // Icon akan muncul di atas marker
  });

  // fix icon marker
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "./img/marker-icon.png",
    iconUrl: "./img/marker-icon.png",
    shadowUrl: "./img/marker-icon.png", // shadow icon
  });

  const _created = (e) => {
    const { layerType, layer } = e; // layerType: jenis layer (e.g., 'polygon', 'polyline', 'rectangle', 'circle')
    const { _leaflet_id } = layer; // _leaflet_id: id dari layer yang baru dibuat
    const newGeoJSON = layer.toGeoJSON(); // Mendapatkan data GeoJSON dari layer yang baru dibuat
    newGeoJSON.properties.id = _leaflet_id; // Menambahkan id ke data GeoJSON
    setGeoJSONData((prev) => [...prev, newGeoJSON]); // Menyimpan data GeoJSON di state
  };

  const _edited = (e) => {
    const { layers } = e;
    const editedLayers = layers.getLayers(); // Mendapatkan semua layer yang diedit
    const editedGeoJSONData = editedLayers.map((layer) => {
      const { _leaflet_id } = layer; // Mendapatkan id dari layer yang diedit
      const editedGeoJSON = layer.toGeoJSON(); // Mendapatkan data GeoJSON dari layer yang diedit
      editedGeoJSON.properties.id = _leaflet_id; // Menambahkan id ke data GeoJSON
      return editedGeoJSON; // Mengembalikan data GeoJSON yang sudah diedit
    });

    setGeoJSONData((prev) =>
      prev.map((geoJSON) => {
        const edited = editedGeoJSONData.find(
          (editedGeoJSON) =>
            editedGeoJSON.properties.id === geoJSON.properties.id
        ); // Mencari data GeoJSON yang diedit
        return edited || geoJSON;
      })
    );
  };

  const _deleted = (e) => {
    const { layers } = e;
    const deletedLayers = layers.getLayers(); // Mendapatkan semua layer yang dihapus
    const deletedGeoJSONData = deletedLayers.map((layer) => {
      const { _leaflet_id } = layer; // Mendapatkan id dari layer yang dihapus
      return _leaflet_id; // Mengembalikan id dari layer yang dihapus
    });

    setGeoJSONData((prev) =>
      prev.filter(
        (geoJSON) => !deletedGeoJSONData.includes(geoJSON.properties.id)
      )
    );
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
        <FeatureGroup>
          <EditControl
            position="topleft"
            onCreated={_created}
            onEdited={_edited}
            onDeleted={_deleted}
          />
        </FeatureGroup>

        {/* Misalnya, menampilkan data GeoJSON yang disimpan di state */}
        {/* {geoJSONData && (
          <GeoJSON
            data={geoJSONs}
            style={() => ({
              color: "blue",
              weight: 2,
              opacity: 0.5,
            })}
          />
        )} */}

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
      {/* melihat apakah nilai semua data dari database kepanggil apa tidak */}
      {/* <p className="absolute top-1/2 z-[9999999] text-center font-bold text-black">
        {JSON.stringify(missions)}
      </p> */}
      <ButtonCRUD missions={missions} geoJSON={geoJSONData} />
    </>
  );
};

export default Map;
