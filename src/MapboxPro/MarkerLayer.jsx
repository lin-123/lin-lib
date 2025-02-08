import Location from './location.svg'
import { Marker } from '@vis.gl/react-maplibre';

// points = { centroid }
export default function MarkerLayer({ points, renderItem }) {
  if (!points.length) return null;

  return points.map((i, idx) => i.latitude && i.longitude && (
    <Marker
      key={idx}
      latitude={i.latitude}
      longitude={i.longitude}
    >
      {renderItem ? renderItem(i) : <img src={Location} />}
    </Marker>
  ))
}