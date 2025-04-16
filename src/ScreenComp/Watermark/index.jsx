// 水印组件，
// 该组件用于在页面上添加水印，防止内容被盗用。
// 重复显示 text 文本
import { useRef, useEffect } from "react";
import styles from './index.module.less';

export default function Watermark({ text }) {
  const elRef = useRef();

  useEffect(() => {
    if (!text) return;

    generateWatermark({
      word: text,
      el: elRef.current,
      fontSize: 40,
    });
  }, [text]);

  return <div ref={elRef} className={styles.watermark}></div>;
}

/**
     * 生成包含用户姓名的水印图像，并设置为背景
     * @param {string} username - 用户姓名
     * @param {string} canvasSize - Canvas 尺寸，如 '200x100'
     * @param {string} backgroundColor - 背景颜色
     * @param {string} textColor - 文本颜色
     * @param {number} fontSize - 字体大小
     */
function generateWatermark({ word, textColor = '#e0dcdc92', fontSize = 28, el }) {
  const canvas = document.createElement('canvas');
  const width = word.length * fontSize;
  const height = width;

  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  // 设置文本样式
  ctx.font = `${fontSize}px Arial` ;
  ctx.fillStyle = textColor;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // 绘制文本
  ctx.rotate((-45) * Math.PI / 180); // 旋转角度
  ctx.fillText(word, fontSize, height - fontSize);

  // 将 Canvas 转换为 Data URL
  const dataURL = canvas.toDataURL();

  // 设置背景图像
  el.style.backgroundImage = `url(${dataURL})`;
  // document.body.append(canvas);
}
