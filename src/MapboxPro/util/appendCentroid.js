// 给 geojson 追加中心点坐标
export function appendCentroid(geojson) {
  console.time('calculateCentroid');
  const features = geojson.features.map(i => ({
    ...i,
    properties: {
      ...i.properties,
      centroid: calculateCentroid(i.geometry)
    }
  }));

  console.timeEnd('calculateCentroid', features.map(i => i.centroid));
  return {
    ...geojson,
    features
  };
}

// 计算多边形中心点
function calculateCentroid(polygon) {
  let x = 0.0, y = 0.0, A = 0.0;
  // 假设 polygon.coordinates 是一个二维数组，表示多边形的坐标
  const coordinates = polygon.coordinates[0];

  for (let i = 0; i < coordinates.length; i++) {
      const j = (i + 1) % coordinates.length;
      const xi = coordinates[i][0];
      const yi = coordinates[i][1];
      const xj = coordinates[j][0];
      const yj = coordinates[j][1];
      const a = ((xi * yj) - (xj * yi)) / 2.0;
      A += a;
      x += (xi + xj) * a;
      y += (yi + yj) * a;
  }

  // 防止除以零
  if (A === 0.0) {
      return null;
  }
  return [x / (3.0 * A), y / (3.0 * A)];
}