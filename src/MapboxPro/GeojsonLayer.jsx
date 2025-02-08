import useUUID from "@/hooks/useUUID";
import { Layer, Source, useMap } from "@vis.gl/react-maplibre";
import { useMapLayerClick } from "./hooks";
import { jsonParse } from "uc-fun";
import { useEffect } from "react";

/**
 *
 * @param {boolean} appendCentroid 是否追加中心点
 * @returns
 */
export default function GeojsonLayer({
  id, data, fill = {}, line = {},
  minzoom = 0, maxzoom = 24,
  onClick, onDataLoad
}) {
  const uuid = useUUID(id);
  const fillLayerId = `fill-${uuid}`;
  useMapLayerClick(fillLayerId, (e) => {
    const { properties } = e.features[0];
    const payload = { ...properties, centroid: jsonParse(properties.centroid)};
    // console.log('geojson onclick', payload);
    onClick && onClick(payload);
  });

  const map = useMap().current;

  useEffect(() => {
    const handler = e => {
      if (e.sourceId === id && e.isSourceLoaded) {
        const features = map.querySourceFeatures(id);
        // console.log('数据源数据已更新', e, features);
        onDataLoad && onDataLoad(features)
      }
    };
    map.on('data', handler);
    return () => {
      map.off('data', handler)
    }
  }, []);
  return <Source
    id={id}
    type="geojson"
    data={data}
  >
    <Layer
      {...{
        id: `fill-${uuid}`,
        type: 'fill-extrusion',
        minzoom,
        maxzoom,
        paint: {
          'fill-extrusion-color': fill.color || '#2d76e933',
          'fill-extrusion-height': fill.height || 10,
          'fill-extrusion-opacity': fill.opacity !== undefined ? fill.opacity : 0.6
        }
      }}
    />
    <Layer
      {...{
        id: `line-${uuid}`,
        type: 'line',
        minzoom, maxzoom,
        paint: {
          'line-color': line.color || '#3887be',
          'line-width': line.width || 2
        }
      }}
    />
  </Source>;
}