import { Map } from '@vis.gl/react-maplibre';
import 'maplibre-gl/dist/maplibre-gl.css'; // See notes below
import './mapbox.less';

export default function BaseMap({
  center, zoom, pitch, mapStyle, children,
  style
}) {
  return <Map
    style={style}
    initialViewState={{
      ...center,
      zoom,
      pitch,
    }}
    mapStyle={mapStyle}
  >
    {children}
  </Map>;
}
