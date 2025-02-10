import { useState } from "react";
import BaseMap from "@/MapboxPro/BaseMap";
import GeojsonLayer from "@/MapboxPro/GeojsonLayer";
import MarkerLayer from "@/MapboxPro/MarkerLayer";
import { jsonParse } from "uc-fun";
import cxs from "cxs";

const markerCls = cxs({
  fontSize: '8px',
  ' span': {
    width: '0.5em',
    height: '0.5em',
    marginRight: '0.5em',
    background: '#0ff',
    borderRadius: '50%',
    display: 'inline-block'
  }
});
export default function MapboxPro() {
  const [points, setPoints] = useState([]);
  return <BaseMap
    center={{
      longitude: 105,
      latitude: 38,
    }}
    zoom={2.5}
    style={{ width: 800, height: 400 }}
    mapStyle="https://demotiles.maplibre.org/style.json"
  >
    <GeojsonLayer
      id="geojson11"
      fill={{
        opacity: 0.1
      }}
      line={{
        color: '#0aa'
      }}
      data="https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json"
      onDataLoad={(features) => setPoints(features.map(i => {
        const { centroid, name } = i.properties;
        const [longitude, latitude] = jsonParse(centroid);
        return { longitude, latitude, name };
      }))}
    />

    <MarkerLayer
      points={points}
      renderItem={i => <div className={markerCls}>
        <span></span>
        {i.name}
      </div>}
    />
  </BaseMap>
}