import { useEffect } from "react";

export default function useScale({ width, height, getTarget }) {
  // const [scale, setScale] = useState();

  useEffect(() => {
    const getScale = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const widthScale = screenWidth / width;
      const heightScale = screenHeight / height;
      // 取较小值，防止内容超出屏幕
      const scale = Math.min(widthScale, heightScale);
      const target = getTarget();
      target.style.transform = `scale(${scale})`;
      target.style.transformOrigin = 'left top';
    }
    getScale();
    document.addEventListener('resize', getScale);

    return () => document.removeEventListener('resize', getScale)
  }, []);
  // return scale;
}