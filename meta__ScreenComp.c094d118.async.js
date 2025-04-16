!(function(){"use strict";var I=Object.defineProperty,A=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var C=(o,e,n)=>e in o?I(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,j=(o,e)=>{for(var n in e||(e={}))R.call(e,n)&&C(o,n,e[n]);if(D)for(var n of D(e))W.call(e,n)&&C(o,n,e[n]);return o},N=(o,e)=>A(o,L(e));(self.webpackChunklin_lib=self.webpackChunklin_lib||[]).push([[382],{59836:function(o,e,n){n.r(e),n.d(e,{demos:function(){return y}});var t=n(90228),r=n.n(t),a=n(87999),l=n.n(a),c=n(75271),u=n(43239),i=n(44403),d=n(91581),y={"src-screen-comp-demo-0":{component:c.memo(c.lazy(l()(r()().mark(function v(){var m,b;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(n.bind(n,44403));case 2:return m=s.sent,b=m.default,s.abrupt("return",{default:function(){return c.createElement(b,{num:100})}});case 5:case"end":return s.stop()}},v)})))),asset:{type:"BLOCK",id:"src-screen-comp-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import DynamicNum from './DynamicNum';

export default () => {
  return <DynamicNum num={100} />
}`},"./DynamicNum.jsx":{type:"FILE",value:n(47120).Z}},entry:"index.jsx"},context:{"./DynamicNum.jsx":i,"/home/runner/work/lin-lib/lin-lib/src/ScreenComp/DynamicNum/index.jsx":i},renderOpts:{compile:function(){var v=l()(r()().mark(function b(){var _,s=arguments;return r()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([n.e(379),n.e(675)]).then(n.bind(n,80675));case 2:return f.abrupt("return",(_=f.sent).default.apply(_,s));case 3:case"end":return f.stop()}},b)}));function m(){return v.apply(this,arguments)}return m}()}},"src-screen-comp-demo-1":{component:c.memo(c.lazy(l()(r()().mark(function v(){var m,b;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(n.bind(n,91581));case 2:return m=s.sent,b=m.default,s.abrupt("return",{default:function(){return c.createElement(b,{text:"Watermark Watermark"})}});case 5:case"end":return s.stop()}},v)})))),asset:{type:"BLOCK",id:"src-screen-comp-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Watermark from './Watermark';

export default () => {
  return <Watermark text="Watermark Watermark" />
}`},"./Watermark.jsx":{type:"FILE",value:n(24608).Z}},entry:"index.jsx"},context:{"./Watermark.jsx":d,"/home/runner/work/lin-lib/lin-lib/src/ScreenComp/Watermark/index.jsx":d},renderOpts:{compile:function(){var v=l()(r()().mark(function b(){var _,s=arguments;return r()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([n.e(379),n.e(675)]).then(n.bind(n,80675));case 2:return f.abrupt("return",(_=f.sent).default.apply(_,s));case 3:case"end":return f.stop()}},b)}));function m(){return v.apply(this,arguments)}return m}()}}}},44403:function(o,e,n){n.r(e);var t=n(48305),r=n.n(t),a=n(75271),l=n(72630),c=n(52676),u=function(d){var y=d.className,v=d.style,m=d.num,b=d.duration,_=d.loopDuration,s=(0,a.useState)("--"),g=r()(s,2),f=g[0],h=g[1];return(0,a.useEffect)(function(){if(!(0,l.isNumber)(m)){h("--");return}var P,p,M=function E(){var S=m/20,O=0,T=Number.isInteger(+m);P=setInterval(function(){O+=S,O>m&&(clearInterval(P),p=setTimeout(E,_||1e4),O=m),h((0,l.toFixed)(O,T?0:2))},b||50)};return M(),function(){clearInterval(P),clearTimeout(p)}},[m]),(0,c.jsx)("strong",{className:y,style:v,children:f})};e.default=u},91581:function(o,e,n){n.r(e),n.d(e,{default:function(){return l}});var t=n(75271),r={watermark:"YOeSzsirt0JEEa2sdSq5"},a=n(52676);function l(u){var i=u.text,d=(0,t.useRef)();return(0,t.useEffect)(function(){i&&c({word:i,el:d.current,fontSize:40})},[i]),(0,a.jsx)("div",{ref:d,className:r.watermark})}function c(u){var i=u.word,d=u.textColor,y=d===void 0?"#e0dcdc92":d,v=u.fontSize,m=v===void 0?28:v,b=u.el,_=document.createElement("canvas"),s=i.length*m,g=s;_.width=s,_.height=g;var f=_.getContext("2d");f.font="".concat(m,"px Arial"),f.fillStyle=y,f.textAlign="center",f.textBaseline="middle",f.rotate(-45*Math.PI/180),f.fillText(i,m,g-m);var h=_.toDataURL();b.style.backgroundImage="url(".concat(h,")")}},29926:function(o,e,n){n.r(e),n.d(e,{texts:function(){return r}});var t=n(43239);const r=[]},47120:function(o,e){e.Z=`// \u6570\u5B57\u8DF3\u52A8\u7EC4\u4EF6
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
`},24608:function(o,e){e.Z=`// \u6C34\u5370\u7EC4\u4EF6\uFF0C
// \u8BE5\u7EC4\u4EF6\u7528\u4E8E\u5728\u9875\u9762\u4E0A\u6DFB\u52A0\u6C34\u5370\uFF0C\u9632\u6B62\u5185\u5BB9\u88AB\u76D7\u7528\u3002
// \u91CD\u590D\u663E\u793A text \u6587\u672C
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
     * \u751F\u6210\u5305\u542B\u7528\u6237\u59D3\u540D\u7684\u6C34\u5370\u56FE\u50CF\uFF0C\u5E76\u8BBE\u7F6E\u4E3A\u80CC\u666F
     * @param {string} username - \u7528\u6237\u59D3\u540D
     * @param {string} canvasSize - Canvas \u5C3A\u5BF8\uFF0C\u5982 '200x100'
     * @param {string} backgroundColor - \u80CC\u666F\u989C\u8272
     * @param {string} textColor - \u6587\u672C\u989C\u8272
     * @param {number} fontSize - \u5B57\u4F53\u5927\u5C0F
     */
function generateWatermark({ word, textColor = '#e0dcdc92', fontSize = 28, el }) {
  const canvas = document.createElement('canvas');
  const width = word.length * fontSize;
  const height = width;

  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  // \u8BBE\u7F6E\u6587\u672C\u6837\u5F0F
  ctx.font = \`\${fontSize}px Arial\` ;
  ctx.fillStyle = textColor;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // \u7ED8\u5236\u6587\u672C
  ctx.rotate((-45) * Math.PI / 180); // \u65CB\u8F6C\u89D2\u5EA6
  ctx.fillText(word, fontSize, height - fontSize);

  // \u5C06 Canvas \u8F6C\u6362\u4E3A Data URL
  const dataURL = canvas.toDataURL();

  // \u8BBE\u7F6E\u80CC\u666F\u56FE\u50CF
  el.style.backgroundImage = \`url(\${dataURL})\`;
  // document.body.append(canvas);
}
`},22648:function(o,e){Object.defineProperty(e,"__esModule",{value:!0});function n(t,r){return t<=0?[]:new Array(t).fill(null).map((a,l)=>r(l))}e.default=n},3174:function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.calculateCentroid=e.appendCentroid=e.convert3857ToWGS84=void 0;function n(a,l){const u=a/6378137*(180/Math.PI),i=(2*Math.atan(Math.exp(l/6378137))-Math.PI/2)*(180/Math.PI);return{longitude:u,latitude:i}}e.convert3857ToWGS84=n;function t(a){const l=a.features.map(c=>N(j({},c),{properties:N(j({},c.properties),{centroid:r(c.geometry)})}));return N(j({},a),{features:l})}e.appendCentroid=t;function r(a){let l=0,c=0,u=0;const i=a.coordinates[0];for(let d=0;d<i.length;d++){const y=(d+1)%i.length,v=i[d][0],m=i[d][1],b=i[y][0],_=i[y][1],s=(v*_-b*m)/2;u+=s,l+=(v+b)*s,c+=(m+_)*s}return u===0?null:[l/(3*u),c/(3*u)]}e.calculateCentroid=r},63838:function(o,e){Object.defineProperty(e,"__esModule",{value:!0});function n(t){if(!t)return{x:1,y:1};const r=t.getBoundingClientRect();return{x:r.width/t.offsetWidth,y:r.height/t.offsetHeight}}e.default=n},22367:function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n=>Object.prototype.toString.call(n).slice(8,-1)},79924:function(o,e){Object.defineProperty(e,"__esModule",{value:!0});function n(t,r){if(r<=0)return[];const a=[];for(let l=0;l<t.length;l+=r)a.push(t.slice(l,l+r));return a}e.default=n},72630:function(o,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.getDomScale=e.urlFormat=e.stringRealLen=e.sleep=e.range2Arr=e.linearScale=e.isPhoneNumber=e.isIdentityCard=e.validFunc=e.timeFormat=e.stringEllipsis=e.reverseArr=e.nonEmptyArr=e.jsonParse=e.isJsonString=e.isBigger=e.getType=e.randomStr=e.genList=e.calculateCentroid=e.appendCentroid=e.convert3857ToWGS84=e.groupArray=e.fmtNumber=e.randomNum=e.isNumber=e.toFixed=e.percent=void 0;const t=n(44751);Object.defineProperty(e,"percent",{enumerable:!0,get:function(){return t.percent}}),Object.defineProperty(e,"toFixed",{enumerable:!0,get:function(){return t.toFixed}}),Object.defineProperty(e,"isNumber",{enumerable:!0,get:function(){return t.isNumber}}),Object.defineProperty(e,"randomNum",{enumerable:!0,get:function(){return t.randomNum}}),Object.defineProperty(e,"fmtNumber",{enumerable:!0,get:function(){return t.fmtNumber}});const r=n(79924);e.groupArray=r.default;const a=n(3174);Object.defineProperty(e,"convert3857ToWGS84",{enumerable:!0,get:function(){return a.convert3857ToWGS84}}),Object.defineProperty(e,"appendCentroid",{enumerable:!0,get:function(){return a.appendCentroid}}),Object.defineProperty(e,"calculateCentroid",{enumerable:!0,get:function(){return a.calculateCentroid}});const l=n(22648);e.genList=l.default;var c=n(86335);Object.defineProperty(e,"randomStr",{enumerable:!0,get:function(){return c.default}});var u=n(22367);Object.defineProperty(e,"getType",{enumerable:!0,get:function(){return u.default}});var i=n(50204);Object.defineProperty(e,"isBigger",{enumerable:!0,get:function(){return i.default}});var d=n(76839);Object.defineProperty(e,"isJsonString",{enumerable:!0,get:function(){return d.default}});var y=n(30386);Object.defineProperty(e,"jsonParse",{enumerable:!0,get:function(){return y.default}});var v=n(26800);Object.defineProperty(e,"nonEmptyArr",{enumerable:!0,get:function(){return v.default}});var m=n(12878);Object.defineProperty(e,"reverseArr",{enumerable:!0,get:function(){return m.default}});var b=n(94829);Object.defineProperty(e,"stringEllipsis",{enumerable:!0,get:function(){return b.default}});var _=n(148);Object.defineProperty(e,"timeFormat",{enumerable:!0,get:function(){return _.default}});var s=n(49273);Object.defineProperty(e,"validFunc",{enumerable:!0,get:function(){return s.default}});var g=n(35512);Object.defineProperty(e,"isIdentityCard",{enumerable:!0,get:function(){return g.default}});var f=n(18887);Object.defineProperty(e,"isPhoneNumber",{enumerable:!0,get:function(){return f.default}});var h=n(65997);Object.defineProperty(e,"linearScale",{enumerable:!0,get:function(){return h.default}});var P=n(73094);Object.defineProperty(e,"range2Arr",{enumerable:!0,get:function(){return P.default}});var p=n(50968);Object.defineProperty(e,"sleep",{enumerable:!0,get:function(){return p.default}});var M=n(36894);Object.defineProperty(e,"stringRealLen",{enumerable:!0,get:function(){return M.default}});var E=n(69956);Object.defineProperty(e,"urlFormat",{enumerable:!0,get:function(){return E.default}});var S=n(63838);Object.defineProperty(e,"getDomScale",{enumerable:!0,get:function(){return S.default}})},50204:function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=(n,t)=>n===null||t===null||Number.isNaN(Number(n))||Number.isNaN(Number(t))?!1:Number(n)>Number(t)},35512:function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n=>{const t=String(n),r=/\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$|^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}[\dXx]$/,a=t.length===15?8:10,l=Number(t.slice(6,a)),c=Number(t.slice(a,a+2)),u=Number(t.slice(a+2,a+4));if(l%400===0||l%4===0&&l%100!==0){if(c===2&&u>29)return!1}else if(c===2&&u>28)return!1;if(r.test(t)&&t.length===18){const i=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],d={0:"1",1:"0",2:"X",3:"9",4:"8",5:"7",6:"6",7:"5",8:"4",9:"3",10:"2"};let y=0;return i.forEach((m,b)=>{const _=Number(t[b]);y+=m*_}),d[y%11]===t[17].toUpperCase()}return r.test(t)}},76839:function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n=>{try{JSON.parse(n)}catch(t){return!1}return!0}},18887:function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n=>/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/.test(String(n))},30386:function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n=>{try{return JSON.parse(n)}catch(t){return""}}},65997:function(o,e){Object.defineProperty(e,"__esModule",{value:!0});function n(t,r){const[a,l]=t,c=(r[1]-r[0])/(l-a);return u=>u<=a?r[0]:u>=l?r[1]:r[0]+(Math.min(l,u)-a)*c}e.default=n},26800:function(o,e,n){Object.defineProperty(e,"__esModule",{value:!0});const t=n(22367);e.default=r=>(0,t.default)(r)==="Array"&&r.length>0},44751:function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.fmtNumber=e.randomNum=e.toFixed=e.isNumber=e.percent=void 0;const n=(u,i)=>`${Math.round(u*1e4/i)/100}%`;e.percent=n;const t=u=>u===0||u==="0"?!0:!!Number(u);e.isNumber=t;const r=(u,i=2)=>{if(!(0,e.isNumber)(u))return u;if(i){const d=Math.pow(10,i);return Math.round(d*u)/d}return Math.round(u)};e.toFixed=r;const a=(u=1,i=0)=>(0,e.toFixed)(Math.random()*u,i);e.randomNum=a;const l=[{value:1e12,symbol:"\u4E07\u4EBF"},{value:1e8,symbol:"\u4EBF"},{value:1e4,symbol:"\u4E07"},{value:1e3,symbol:"\u5343"}];function c(u,i=l){for(const d of i)if(u>=d.value)return{value:(0,e.toFixed)(u/d.value,1),symbol:d.symbol};return{value:u,symbol:""}}e.fmtNumber=c},86335:function(o,e){Object.defineProperty(e,"__esModule",{value:!0});function n(t,r){const a=0<t&&t<12?t+2:13,l=Math.random().toString(32).slice(2,a);return r?r+"-"+l:l}e.default=n},73094:function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=(n=[])=>{if(!n)return[];if(!Array.isArray(n))return[];const{length:t}=n;return t===1?Array(2).fill(n[0]):n.slice(0,-1).map((r,a)=>[r,n[a+1]])}},12878:function(o,e,n){Object.defineProperty(e,"__esModule",{value:!0});const t=n(22367),r=n(26800);e.default=(a,l)=>{if(!(0,r.default)(a))return[];const c=a.length-1,u=[];if((0,t.default)(l)==="Function")for(let i=c;i>=0;i--)u.push(l(a[i],i));else for(let i=c;i>=0;i--)u.push(a[i]);return u}},50968:function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n=>new Promise(t=>{setTimeout(()=>{t()},n)})},94829:function(o,e,n){Object.defineProperty(e,"__esModule",{value:!0});const t=n(36894),r=n(22367),a=n(50204);e.default=(l,c)=>{if((0,r.default)(l)!=="String")return"";if(!(0,a.default)((0,t.default)(l),c))return l;let u=0;for(;u<=c;){u+=1;const i=l.substring(0,u);if((0,t.default)(i)>c)return`${i.substring(0,u-1)}...`}}},36894:function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n=>n.replace(/[\u4e00-\u9fa5]/g,"ss").length},148:function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=(n,t)=>{if(!n||!t)return t;const r=new Date(n);if(r.toString()==="Invalid Date")return t;r.setHours(r.getHours()+8);const[,a,l,c,u,i,d]=r.toISOString().match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/);return t.replace("YYYY",a).replace("YY",a.slice(-2)).replace("MM",l).replace("DD",c).replace("HH",u).replace("mm",i).replace("ss",d)}},69956:function(o,e,n){Object.defineProperty(e,"__esModule",{value:!0});const t=n(22367);function r(a){if((0,t.default)(a)!=="String")throw new Error("the param of urlFormat must be string");const l=a.indexOf("?");if(l===-1)return{};const c=a.substring(l+1),u=new URLSearchParams(c),i={};for(const[d,y]of u.entries())i[d]=y;return i}e.default=r},49273:function(o,e,n){Object.defineProperty(e,"__esModule",{value:!0});const t=n(22367);function r(a,...l){return(0,t.default)(a)==="Function"&&a(...l)}e.default=r}}]);
}());