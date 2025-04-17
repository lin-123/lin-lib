// 水印组件，
// 该组件用于在页面上添加水印，防止内容被盗用。
// 重复显示 text 文本
import { useRef, useEffect } from "react";
import styles from './index.module.less';

export default function Watermark({ size, text, fontSize, color }) {
  const elRef = useRef();

  useEffect(() => {
    if (!text) return;
    generateWatermark({
      text,
      size,
      el: elRef.current,
      fontSize,
      color,
    });
  }, [text]);

  return <div ref={elRef} className={styles.watermark}></div>;
}

/**
     * 生成包含用户姓名的水印图像，并设置为背景
     * @param {string} username - 用户姓名
     * @param {string} canvasSize - Canvas 尺寸，如 '200x100'
     * @param {string} backgroundColor - 背景颜色
     * @param {string} color - 文本颜色
     * @param {number} fontSize - 字体大小
     */
function generateWatermark({
  size = 200,
  text,
  color = '#e0dcdc92',
  fontSize = 16,
  el
}) {
  const canvas = document.createElement('canvas');
  // canvas.style.border = '1px solid #ccc';

  const ctx = canvas.getContext('2d');

  // 设置文字内容和样式
  // const text = "第一行\n这是第二行\n这是第三行";
  const lineHeight = fontSize * 1.5; // 行高
  // 计算每行文字的高度和总高度
  const lines = text.split('\n');
  debugger;
  const totalHeight = lines.length * lineHeight;

  canvas.width = size; // Canvas 宽度
  canvas.height = size; // Canvas 高度

  ctx.font = `${fontSize}px Arial`;
  ctx.textAlign = "center"; // 水平居中对齐
  ctx.textBaseline = "middle"; // 垂直居中对齐
  ctx.fillStyle = color;


  // 清除 Canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 保存初始状态
  ctx.save();

  ctx.translate(size / 2, size / 2);
  // 旋转 Canvas 45 度（以弧度为单位）
  const rotationAngle = - Math.PI / 4; // 45度
  ctx.rotate(rotationAngle);

  // 计算文字的起始 Y 位置，使整体文字在旋转后居中
  const startY = -totalHeight / 2 + lineHeight / 2;

  // 绘制多行文字
  lines.forEach((line, index) => {
      const y = startY + index * lineHeight;
      // const x = (size - ctx.measureText(line).width) / 2;
      ctx.fillText(line, 0, y);
  });

  // 恢复 Canvas 状态
  ctx.restore();

  // 将 Canvas 转换为 Data URL
  const dataURL = canvas.toDataURL();

  // 设置背景图像
  el.style.backgroundImage = `url(${dataURL})`;
  // document.body.append(canvas);
}
