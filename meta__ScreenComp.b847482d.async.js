!(function(){"use strict";var I=Object.defineProperty,R=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var T=(c,e,n)=>e in c?I(c,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):c[e]=n,M=(c,e)=>{for(var n in e||(e={}))z.call(e,n)&&T(c,n,e[n]);if(D)for(var n of D(e))W.call(e,n)&&T(c,n,e[n]);return c},S=(c,e)=>R(c,L(e));(self.webpackChunklin_lib=self.webpackChunklin_lib||[]).push([[382],{59836:function(c,e,n){n.r(e),n.d(e,{demos:function(){return g}});var t=n(90228),r=n.n(t),a=n(87999),i=n.n(a),d=n(75271),u=n(43239),l=n(44403),o=n(91581),g={"src-screen-comp-demo-0":{component:d.memo(d.lazy(i()(r()().mark(function b(){var s,_;return r()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(n.bind(n,44403));case 2:return s=f.sent,_=s.default,f.abrupt("return",{default:function(){return d.createElement(_,{num:100})}});case 5:case"end":return f.stop()}},b)})))),asset:{type:"BLOCK",id:"src-screen-comp-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import DynamicNum from './DynamicNum';

export default () => {
  return <DynamicNum num={100} />
}`},"./DynamicNum.jsx":{type:"FILE",value:n(47120).Z}},entry:"index.jsx"},context:{"./DynamicNum.jsx":l,"/home/runner/work/lin-lib/lin-lib/src/ScreenComp/DynamicNum/index.jsx":l},renderOpts:{compile:function(){var b=i()(r()().mark(function _(){var v,f=arguments;return r()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([n.e(379),n.e(675)]).then(n.bind(n,80675));case 2:return m.abrupt("return",(v=m.sent).default.apply(v,f));case 3:case"end":return m.stop()}},_)}));function s(){return b.apply(this,arguments)}return s}()}},"src-screen-comp-demo-1":{component:d.memo(d.lazy(i()(r()().mark(function b(){var s,_;return r()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(n.bind(n,91581));case 2:return s=f.sent,_=s.default,f.abrupt("return",{default:function(){return d.createElement(_,{text:`\u7B2C\u4E00\u884C
\u7B2C\u4E8C\u884C222
\u7B2C\u4E09\u884C33333`,size:400,fontSize:18,color:"#e0dcdc92"})}});case 5:case"end":return f.stop()}},b)})))),asset:{type:"BLOCK",id:"src-screen-comp-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Watermark from './Watermark';

export default () => {
  return <Watermark
    text={\`\u7B2C\u4E00\u884C\\n\u7B2C\u4E8C\u884C222\\n\u7B2C\u4E09\u884C33333\`}
    size={400}
    fontSize={18}
    color="#e0dcdc92"
  />
}`},"./Watermark.jsx":{type:"FILE",value:n(24608).Z}},entry:"index.jsx"},context:{"./Watermark.jsx":o,"/home/runner/work/lin-lib/lin-lib/src/ScreenComp/Watermark/index.jsx":o},renderOpts:{compile:function(){var b=i()(r()().mark(function _(){var v,f=arguments;return r()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([n.e(379),n.e(675)]).then(n.bind(n,80675));case 2:return m.abrupt("return",(v=m.sent).default.apply(v,f));case 3:case"end":return m.stop()}},_)}));function s(){return b.apply(this,arguments)}return s}()}}}},44403:function(c,e,n){n.r(e);var t=n(48305),r=n.n(t),a=n(75271),i=n(72630),d=n(52676),u=function(o){var g=o.className,b=o.style,s=o.num,_=o.duration,v=o.loopDuration,f=(0,a.useState)("--"),y=r()(f,2),m=y[0],h=y[1];return(0,a.useEffect)(function(){if(!(0,i.isNumber)(s)){h("--");return}var P,p,j=function N(){var E=s/20,O=0,C=Number.isInteger(+s);P=setInterval(function(){O+=E,O>s&&(clearInterval(P),p=setTimeout(N,v||1e4),O=s),h((0,i.toFixed)(O,C?0:2))},_||50)};return j(),function(){clearInterval(P),clearTimeout(p)}},[s]),(0,d.jsx)("strong",{className:g,style:b,children:m})};e.default=u},91581:function(c,e,n){n.r(e),n.d(e,{default:function(){return i}});var t=n(75271),r={watermark:"YOeSzsirt0JEEa2sdSq5"},a=n(52676);function i(u){var l=u.size,o=u.text,g=u.fontSize,b=u.color,s=(0,t.useRef)();return(0,t.useEffect)(function(){o&&d({text:o,size:l,el:s.current,fontSize:g,color:b})},[o]),(0,a.jsx)("div",{ref:s,className:r.watermark})}function d(u){var l=u.size,o=l===void 0?200:l,g=u.text,b=u.color,s=b===void 0?"#e0dcdc92":b,_=u.fontSize,v=_===void 0?16:_,f=u.el,y=document.createElement("canvas"),m=y.getContext("2d"),h=v*1.5,P=g.split(`
`);debugger;var p=P.length*h;y.width=o,y.height=o,m.font="".concat(v,"px Arial"),m.textAlign="center",m.textBaseline="middle",m.fillStyle=s,m.clearRect(0,0,y.width,y.height),m.save(),m.translate(o/2,o/2);var j=-Math.PI/4;m.rotate(j);var N=-p/2+h/2;P.forEach(function(O,C){var A=N+C*h;m.fillText(O,0,A)}),m.restore();var E=y.toDataURL();f.style.backgroundImage="url(".concat(E,")")}},29926:function(c,e,n){n.r(e),n.d(e,{texts:function(){return r}});var t=n(43239);const r=[]},47120:function(c,e){e.Z=`// \u6570\u5B57\u8DF3\u52A8\u7EC4\u4EF6
import { useEffect } from "react";
import { useState } from "react";
import { isNumber, toFixed } from "uc-fun";

const DynamicNum = ({ className, style, num, duration, loopDuration }) => {
  const [curNum, setCurNum] = useState('--');

  useEffect(() => {
    if (!isNumber(num)) {
      setCurNum('--');
      return;
    }
    let timer;
    let timeoutTimer;
    const tickNum = () => {
      const step = num / 20;
      let cur = 0;
      const isInt = Number.isInteger(+num);
      timer = setInterval(() => {
        cur += step;
        if (cur > num) {
          clearInterval(timer);
          // \u5FAA\u73AF\u8F6E\u64AD
          timeoutTimer = setTimeout(tickNum, loopDuration || 10000);
          cur = num;
        }
        setCurNum(toFixed(cur, isInt ? 0 : 2));
      }, duration || 50);
    }
    tickNum();
    return () => {
      clearInterval(timer);
      clearTimeout(timeoutTimer);
    };
  }, [num]);
  return <strong className={className} style={style}>{curNum}</strong>
}

export default DynamicNum;
`},24608:function(c,e){e.Z=`// \u6C34\u5370\u7EC4\u4EF6\uFF0C
// \u8BE5\u7EC4\u4EF6\u7528\u4E8E\u5728\u9875\u9762\u4E0A\u6DFB\u52A0\u6C34\u5370\uFF0C\u9632\u6B62\u5185\u5BB9\u88AB\u76D7\u7528\u3002
// \u91CD\u590D\u663E\u793A text \u6587\u672C
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
     * \u751F\u6210\u5305\u542B\u7528\u6237\u59D3\u540D\u7684\u6C34\u5370\u56FE\u50CF\uFF0C\u5E76\u8BBE\u7F6E\u4E3A\u80CC\u666F
     * @param {string} username - \u7528\u6237\u59D3\u540D
     * @param {string} canvasSize - Canvas \u5C3A\u5BF8\uFF0C\u5982 '200x100'
     * @param {string} backgroundColor - \u80CC\u666F\u989C\u8272
     * @param {string} color - \u6587\u672C\u989C\u8272
     * @param {number} fontSize - \u5B57\u4F53\u5927\u5C0F
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

  // \u8BBE\u7F6E\u6587\u5B57\u5185\u5BB9\u548C\u6837\u5F0F
  // const text = "\u7B2C\u4E00\u884C\\n\u8FD9\u662F\u7B2C\u4E8C\u884C\\n\u8FD9\u662F\u7B2C\u4E09\u884C";
  const lineHeight = fontSize * 1.5; // \u884C\u9AD8
  // \u8BA1\u7B97\u6BCF\u884C\u6587\u5B57\u7684\u9AD8\u5EA6\u548C\u603B\u9AD8\u5EA6
  const lines = text.split('\\n');
  debugger;
  const totalHeight = lines.length * lineHeight;

  canvas.width = size; // Canvas \u5BBD\u5EA6
  canvas.height = size; // Canvas \u9AD8\u5EA6

  ctx.font = \`\${fontSize}px Arial\`;
  ctx.textAlign = "center"; // \u6C34\u5E73\u5C45\u4E2D\u5BF9\u9F50
  ctx.textBaseline = "middle"; // \u5782\u76F4\u5C45\u4E2D\u5BF9\u9F50
  ctx.fillStyle = color;


  // \u6E05\u9664 Canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // \u4FDD\u5B58\u521D\u59CB\u72B6\u6001
  ctx.save();

  ctx.translate(size / 2, size / 2);
  // \u65CB\u8F6C Canvas 45 \u5EA6\uFF08\u4EE5\u5F27\u5EA6\u4E3A\u5355\u4F4D\uFF09
  const rotationAngle = - Math.PI / 4; // 45\u5EA6
  ctx.rotate(rotationAngle);

  // \u8BA1\u7B97\u6587\u5B57\u7684\u8D77\u59CB Y \u4F4D\u7F6E\uFF0C\u4F7F\u6574\u4F53\u6587\u5B57\u5728\u65CB\u8F6C\u540E\u5C45\u4E2D
  const startY = -totalHeight / 2 + lineHeight / 2;

  // \u7ED8\u5236\u591A\u884C\u6587\u5B57
  lines.forEach((line, index) => {
      const y = startY + index * lineHeight;
      // const x = (size - ctx.measureText(line).width) / 2;
      ctx.fillText(line, 0, y);
  });

  // \u6062\u590D Canvas \u72B6\u6001
  ctx.restore();

  // \u5C06 Canvas \u8F6C\u6362\u4E3A Data URL
  const dataURL = canvas.toDataURL();

  // \u8BBE\u7F6E\u80CC\u666F\u56FE\u50CF
  el.style.backgroundImage = \`url(\${dataURL})\`;
  // document.body.append(canvas);
}
`},22648:function(c,e){Object.defineProperty(e,"__esModule",{value:!0});function n(t,r){return t<=0?[]:new Array(t).fill(null).map((a,i)=>r(i))}e.default=n},3174:function(c,e){Object.defineProperty(e,"__esModule",{value:!0}),e.calculateCentroid=e.appendCentroid=e.convert3857ToWGS84=void 0;function n(a,i){const u=a/6378137*(180/Math.PI),l=(2*Math.atan(Math.exp(i/6378137))-Math.PI/2)*(180/Math.PI);return{longitude:u,latitude:l}}e.convert3857ToWGS84=n;function t(a){const i=a.features.map(d=>S(M({},d),{properties:S(M({},d.properties),{centroid:r(d.geometry)})}));return S(M({},a),{features:i})}e.appendCentroid=t;function r(a){let i=0,d=0,u=0;const l=a.coordinates[0];for(let o=0;o<l.length;o++){const g=(o+1)%l.length,b=l[o][0],s=l[o][1],_=l[g][0],v=l[g][1],f=(b*v-_*s)/2;u+=f,i+=(b+_)*f,d+=(s+v)*f}return u===0?null:[i/(3*u),d/(3*u)]}e.calculateCentroid=r},63838:function(c,e){Object.defineProperty(e,"__esModule",{value:!0});function n(t){if(!t)return{x:1,y:1};const r=t.getBoundingClientRect();return{x:r.width/t.offsetWidth,y:r.height/t.offsetHeight}}e.default=n},22367:function(c,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n=>Object.prototype.toString.call(n).slice(8,-1)},79924:function(c,e){Object.defineProperty(e,"__esModule",{value:!0});function n(t,r){if(r<=0)return[];const a=[];for(let i=0;i<t.length;i+=r)a.push(t.slice(i,i+r));return a}e.default=n},72630:function(c,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.getDomScale=e.urlFormat=e.stringRealLen=e.sleep=e.range2Arr=e.linearScale=e.isPhoneNumber=e.isIdentityCard=e.validFunc=e.timeFormat=e.stringEllipsis=e.reverseArr=e.nonEmptyArr=e.jsonParse=e.isJsonString=e.isBigger=e.getType=e.randomStr=e.genList=e.calculateCentroid=e.appendCentroid=e.convert3857ToWGS84=e.groupArray=e.fmtNumber=e.randomNum=e.isNumber=e.toFixed=e.percent=void 0;const t=n(44751);Object.defineProperty(e,"percent",{enumerable:!0,get:function(){return t.percent}}),Object.defineProperty(e,"toFixed",{enumerable:!0,get:function(){return t.toFixed}}),Object.defineProperty(e,"isNumber",{enumerable:!0,get:function(){return t.isNumber}}),Object.defineProperty(e,"randomNum",{enumerable:!0,get:function(){return t.randomNum}}),Object.defineProperty(e,"fmtNumber",{enumerable:!0,get:function(){return t.fmtNumber}});const r=n(79924);e.groupArray=r.default;const a=n(3174);Object.defineProperty(e,"convert3857ToWGS84",{enumerable:!0,get:function(){return a.convert3857ToWGS84}}),Object.defineProperty(e,"appendCentroid",{enumerable:!0,get:function(){return a.appendCentroid}}),Object.defineProperty(e,"calculateCentroid",{enumerable:!0,get:function(){return a.calculateCentroid}});const i=n(22648);e.genList=i.default;var d=n(86335);Object.defineProperty(e,"randomStr",{enumerable:!0,get:function(){return d.default}});var u=n(22367);Object.defineProperty(e,"getType",{enumerable:!0,get:function(){return u.default}});var l=n(50204);Object.defineProperty(e,"isBigger",{enumerable:!0,get:function(){return l.default}});var o=n(76839);Object.defineProperty(e,"isJsonString",{enumerable:!0,get:function(){return o.default}});var g=n(30386);Object.defineProperty(e,"jsonParse",{enumerable:!0,get:function(){return g.default}});var b=n(26800);Object.defineProperty(e,"nonEmptyArr",{enumerable:!0,get:function(){return b.default}});var s=n(12878);Object.defineProperty(e,"reverseArr",{enumerable:!0,get:function(){return s.default}});var _=n(94829);Object.defineProperty(e,"stringEllipsis",{enumerable:!0,get:function(){return _.default}});var v=n(148);Object.defineProperty(e,"timeFormat",{enumerable:!0,get:function(){return v.default}});var f=n(49273);Object.defineProperty(e,"validFunc",{enumerable:!0,get:function(){return f.default}});var y=n(35512);Object.defineProperty(e,"isIdentityCard",{enumerable:!0,get:function(){return y.default}});var m=n(18887);Object.defineProperty(e,"isPhoneNumber",{enumerable:!0,get:function(){return m.default}});var h=n(65997);Object.defineProperty(e,"linearScale",{enumerable:!0,get:function(){return h.default}});var P=n(73094);Object.defineProperty(e,"range2Arr",{enumerable:!0,get:function(){return P.default}});var p=n(50968);Object.defineProperty(e,"sleep",{enumerable:!0,get:function(){return p.default}});var j=n(36894);Object.defineProperty(e,"stringRealLen",{enumerable:!0,get:function(){return j.default}});var N=n(69956);Object.defineProperty(e,"urlFormat",{enumerable:!0,get:function(){return N.default}});var E=n(63838);Object.defineProperty(e,"getDomScale",{enumerable:!0,get:function(){return E.default}})},50204:function(c,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=(n,t)=>n===null||t===null||Number.isNaN(Number(n))||Number.isNaN(Number(t))?!1:Number(n)>Number(t)},35512:function(c,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n=>{const t=String(n),r=/\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$|^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}[\dXx]$/,a=t.length===15?8:10,i=Number(t.slice(6,a)),d=Number(t.slice(a,a+2)),u=Number(t.slice(a+2,a+4));if(i%400===0||i%4===0&&i%100!==0){if(d===2&&u>29)return!1}else if(d===2&&u>28)return!1;if(r.test(t)&&t.length===18){const l=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],o={0:"1",1:"0",2:"X",3:"9",4:"8",5:"7",6:"6",7:"5",8:"4",9:"3",10:"2"};let g=0;return l.forEach((s,_)=>{const v=Number(t[_]);g+=s*v}),o[g%11]===t[17].toUpperCase()}return r.test(t)}},76839:function(c,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n=>{try{JSON.parse(n)}catch(t){return!1}return!0}},18887:function(c,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n=>/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/.test(String(n))},30386:function(c,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n=>{try{return JSON.parse(n)}catch(t){return""}}},65997:function(c,e){Object.defineProperty(e,"__esModule",{value:!0});function n(t,r){const[a,i]=t,d=(r[1]-r[0])/(i-a);return u=>u<=a?r[0]:u>=i?r[1]:r[0]+(Math.min(i,u)-a)*d}e.default=n},26800:function(c,e,n){Object.defineProperty(e,"__esModule",{value:!0});const t=n(22367);e.default=r=>(0,t.default)(r)==="Array"&&r.length>0},44751:function(c,e){Object.defineProperty(e,"__esModule",{value:!0}),e.fmtNumber=e.randomNum=e.toFixed=e.isNumber=e.percent=void 0;const n=(u,l)=>`${Math.round(u*1e4/l)/100}%`;e.percent=n;const t=u=>u===0||u==="0"?!0:!!Number(u);e.isNumber=t;const r=(u,l=2)=>{if(!(0,e.isNumber)(u))return u;if(l){const o=Math.pow(10,l);return Math.round(o*u)/o}return Math.round(u)};e.toFixed=r;const a=(u=1,l=0)=>(0,e.toFixed)(Math.random()*u,l);e.randomNum=a;const i=[{value:1e12,symbol:"\u4E07\u4EBF"},{value:1e8,symbol:"\u4EBF"},{value:1e4,symbol:"\u4E07"},{value:1e3,symbol:"\u5343"}];function d(u,l=i){for(const o of l)if(u>=o.value)return{value:(0,e.toFixed)(u/o.value,1),symbol:o.symbol};return{value:u,symbol:""}}e.fmtNumber=d},86335:function(c,e){Object.defineProperty(e,"__esModule",{value:!0});function n(t,r){const a=0<t&&t<12?t+2:13,i=Math.random().toString(32).slice(2,a);return r?r+"-"+i:i}e.default=n},73094:function(c,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=(n=[])=>{if(!n)return[];if(!Array.isArray(n))return[];const{length:t}=n;return t===1?Array(2).fill(n[0]):n.slice(0,-1).map((r,a)=>[r,n[a+1]])}},12878:function(c,e,n){Object.defineProperty(e,"__esModule",{value:!0});const t=n(22367),r=n(26800);e.default=(a,i)=>{if(!(0,r.default)(a))return[];const d=a.length-1,u=[];if((0,t.default)(i)==="Function")for(let l=d;l>=0;l--)u.push(i(a[l],l));else for(let l=d;l>=0;l--)u.push(a[l]);return u}},50968:function(c,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n=>new Promise(t=>{setTimeout(()=>{t()},n)})},94829:function(c,e,n){Object.defineProperty(e,"__esModule",{value:!0});const t=n(36894),r=n(22367),a=n(50204);e.default=(i,d)=>{if((0,r.default)(i)!=="String")return"";if(!(0,a.default)((0,t.default)(i),d))return i;let u=0;for(;u<=d;){u+=1;const l=i.substring(0,u);if((0,t.default)(l)>d)return`${l.substring(0,u-1)}...`}}},36894:function(c,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n=>n.replace(/[\u4e00-\u9fa5]/g,"ss").length},148:function(c,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=(n,t)=>{if(!n||!t)return t;const r=new Date(n);if(r.toString()==="Invalid Date")return t;r.setHours(r.getHours()+8);const[,a,i,d,u,l,o]=r.toISOString().match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/);return t.replace("YYYY",a).replace("YY",a.slice(-2)).replace("MM",i).replace("DD",d).replace("HH",u).replace("mm",l).replace("ss",o)}},69956:function(c,e,n){Object.defineProperty(e,"__esModule",{value:!0});const t=n(22367);function r(a){if((0,t.default)(a)!=="String")throw new Error("the param of urlFormat must be string");const i=a.indexOf("?");if(i===-1)return{};const d=a.substring(i+1),u=new URLSearchParams(d),l={};for(const[o,g]of u.entries())l[o]=g;return l}e.default=r},49273:function(c,e,n){Object.defineProperty(e,"__esModule",{value:!0});const t=n(22367);function r(a,...i){return(0,t.default)(a)==="Function"&&a(...i)}e.default=r}}]);
}());