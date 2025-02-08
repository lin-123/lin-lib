// mapbox hooks

import { useMap } from "@vis.gl/react-maplibre";
import { useEffect } from "react";

// 图层点击事件
export function useMapLayerClick(layerId, handler) {
  const { current: map } = useMap();

  useEffect(() => {
    map.on('click', layerId, handler);
    return () => {
      map.off('click', layerId, handler);
    };
  }, [layerId, handler]);
}

// map 的 zoom 事件
export function useMapZoom(callback) {
  const mapRef = useMap();
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const handler = () => {
      const zoom = map.getZoom();
      callback(zoom);
    }
    map.on('zoom', handler);
    return () => {
      map.off('zoom', handler);
    };
  }, [mapRef, callback]);
}