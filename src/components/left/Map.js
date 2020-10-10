import React, { useContext } from "react";
import { caseContext } from "../../context/caseContext";
import { Map as WorldMap, TileLayer } from "react-leaflet";
import { addCircle } from "../../utils/addCircle";

const Map = ({ data }) => {
  let { countries, caseType } = useContext(caseContext);
  let mapProps = {
    position: null,
    zoom: 1,
  };
  if (data.countryInfo) {
    mapProps.position = [data.countryInfo.lat, data.countryInfo.long];
    mapProps.zoom = 5;
  }
  return (
    <div className="map-container">
      <WorldMap center={mapProps.position} zoom={mapProps.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mapProps.position !== null ? addCircle(countries, caseType) : null}
      </WorldMap>
    </div>
  );
};

export default Map;
