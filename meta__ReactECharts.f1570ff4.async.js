!(function(){"use strict";var x=Object.defineProperty,W=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var L=(o,e,n)=>e in o?x(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,A=(o,e)=>{for(var n in e||(e={}))K.call(e,n)&&L(o,n,e[n]);if(N)for(var n of N(e))U.call(e,n)&&L(o,n,e[n]);return o},R=(o,e)=>W(o,B(e));(self.webpackChunklin_lib=self.webpackChunklin_lib||[]).push([[671],{30584:function(o,e,n){var t;n.r(e),n.d(e,{demos:function(){return v}});var i=n(90228),a=n.n(i),l=n(87999),s=n.n(l),r=n(75271),u=n(66677),d=n(48114),O=n(83822),c=n(35811),y=n(82187),b=n.n(y),P=n(35351),v={"src-react-e-charts-demo-0":{component:r.memo(r.lazy(s()(a()().mark(function f(){var h,_;return a()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(n.bind(n,48114));case 2:return h=g.sent,_=h.default,g.abrupt("return",{default:function(){var m=[{value:40,name:"\u957F\u98CE\u6E7E",tb:10,hb:56},{value:65,name:"\u4E2D\u5317",tb:88,hb:78},{value:89,name:"\u767D\u5170",tb:80,hb:65},{value:20,name:"\u767D\u7389",tb:16,hb:88},{value:70,name:"\u76D8\u6E7E\u91CC",tb:10,hb:12},{value:100,name:"\u67A3\u9633",tb:60,hb:11}];return r.createElement(_,{style:{height:200,background:"black",padding:20},datasource:m,series:[{x:"name",y:"value",name:"\u5DE5\u5355\u6570\u91CF",type:"bar"},{x:"name",y:"tb",name:"\u540C\u6BD4"},{x:"name",y:"hb",name:"\u73AF\u6BD4"}],option:{xAxis:{axisLabel:{}}}})}});case 5:case"end":return g.stop()}},f)})))),asset:{type:"BLOCK",id:"src-react-e-charts-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import AxisChart from './AxisChart.jsx';

export default () => {
  const data = [
    { value: 40, name: '\u957F\u98CE\u6E7E', tb: 10, hb: 56 },
    { value: 65, name: '\u4E2D\u5317', tb: 88, hb: 78 },
    { value: 89, name: '\u767D\u5170', tb: 80, hb: 65 },
    { value: 20, name: '\u767D\u7389', tb: 16, hb: 88 },
    { value: 70, name: '\u76D8\u6E7E\u91CC', tb: 10, hb: 12 },
    { value: 100, name: '\u67A3\u9633', tb: 60, hb: 11 },
  ];
  return <AxisChart
      style={{ height: 200, background: 'black', padding: 20 }}
      datasource={data}
      series={[
        { x: 'name', y: 'value', name: '\u5DE5\u5355\u6570\u91CF', type: 'bar' },
        { x: 'name', y: 'tb', name: '\u540C\u6BD4' },
        { x: 'name', y: 'hb', name: '\u73AF\u6BD4' },
      ]}
      option={{
        xAxis: {
          axisLabel: {
            // \u683C\u5F0F\u5316 X \u8F74\u6807\u7B7E\u6587\u672C
            // formatter: function (value) {
            //     if (value.length > 5) {
            //         return value.slice(0, 5);
            //     }
            //     return value;
            // },
            // rotate: -30
          }
        }
      }}
    />
}`},"./AxisChart.jsx":{type:"FILE",value:n(5083).Z}},entry:"index.jsx"},context:{"./AxisChart.jsx":d,"/home/runner/work/lin-lib/lin-lib/src/ReactECharts/AxisChart.jsx":d},renderOpts:{compile:function(){var f=s()(a()().mark(function _(){var p,g=arguments;return a()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,n.e(675).then(n.bind(n,80675));case 2:return m.abrupt("return",(p=m.sent).default.apply(p,g));case 3:case"end":return m.stop()}},_)}));function h(){return f.apply(this,arguments)}return h}()}},"src-react-e-charts-demo-1":{component:r.memo(r.lazy(s()(a()().mark(function f(){var h,_,p;return a()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(n.bind(n,83822));case 2:return h=E.sent,_=h.default,p=h.RingChart,E.abrupt("return",{default:function(){var C=[{name:"\u4F4F\u5BBF",value:162},{name:"\u6279\u53D1",value:94},{name:"\u5C45\u6C11",value:42},{name:"\u623F\u5730\u4EA7",value:5},{name:"\u6559\u80B2",value:6}];return r.createElement("div",{style:{display:"flex",background:"black",padding:20}},r.createElement(p,{style:{height:200,flex:"1 0 auto"},animation:!0,option:{legend:{show:!1}},seriesOpt:{radius:["50%","80%"],center:["50%","50%"]},data:C}),r.createElement(_,{style:{height:200,flex:"1 0 auto"},data:C,option:{legend:{bottom:20,left:"center",width:200}}}))}});case 6:case"end":return E.stop()}},f)})))),asset:{type:"BLOCK",id:"src-react-e-charts-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import PieChart, { RingChart } from './PieChart.jsx'
export default () => {
  const data = [
    { name: '\u4F4F\u5BBF', value: 162 },
    { name: '\u6279\u53D1', value: 94 },
    { name: '\u5C45\u6C11', value: 42 },
    { name: '\u623F\u5730\u4EA7', value: 5 },
    { name: '\u6559\u80B2', value: 6 }
  ];
  return <div
    style={{
      display: 'flex',
      background: 'black',
      padding: 20
    }}
  >
    <RingChart
      style={{ height: 200, flex: '1 0 auto' }}
      animation
      option={{
        legend: {
          show: false,
          // left: 'right'
        }
      }}
      seriesOpt={{
        radius: ['50%', '80%'],
        center: ['50%', '50%']
      }}
      data={data}
    />

    <PieChart
      style={{ height: 200, flex: '1 0 auto' }}
      data={data}
      option={{
        legend: {
          bottom: 20,
          left: 'center',
          width: 200
        }
      }}
    />
  </div>;
}`},"./PieChart.jsx":{type:"FILE",value:n(62355).Z}},entry:"index.jsx"},context:{"./PieChart.jsx":O,"/home/runner/work/lin-lib/lin-lib/src/ReactECharts/PieChart.jsx":O},renderOpts:{compile:function(){var f=s()(a()().mark(function _(){var p,g=arguments;return a()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,n.e(675).then(n.bind(n,80675));case 2:return m.abrupt("return",(p=m.sent).default.apply(p,g));case 3:case"end":return m.stop()}},_)}));function h(){return f.apply(this,arguments)}return h}()}},"src-react-e-charts-demo-rosechartpt":{component:r.memo(r.lazy(function(){return Promise.all([n.e(428),n.e(379),n.e(521),n.e(623),n.e(365),n.e(433)]).then(n.bind(n,62560))})),asset:{type:"BLOCK",id:"src-react-e-charts-demo-rosechartpt",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(34654).Z},"lin-lib":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"},classnames:{type:"NPM",value:"2.5.1"},"./index.module.less":{type:"FILE",value:n(32157).Z}},entry:"index.jsx"},context:{"./index.module.less":P,"@/ReactECharts/RoseChart":c,react:t||(t=n.t(r,2)),classnames:y,"/home/runner/work/lin-lib/lin-lib/src/ReactECharts/demos/RoseChartPT/index.module.less":P},renderOpts:{compile:function(){var f=s()(a()().mark(function _(){var p,g=arguments;return a()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,n.e(675).then(n.bind(n,80675));case 2:return m.abrupt("return",(p=m.sent).default.apply(p,g));case 3:case"end":return m.stop()}},_)}));function h(){return f.apply(this,arguments)}return h}()}}}},48114:function(o,e,n){n.r(e),n.d(e,{default:function(){return y}});var t=n(26068),i=n.n(t),a=n(67825),l=n.n(a),s=n(78983),r={fontSize:s.J,color:"#FFFFFFA6",fontWeight:"bold",margin:4},u={xAxis:{type:"category",axisLabel:r,axisTick:{show:!1},axisLine:{lineStyle:{color:"rgba(255, 255, 255, 0.40)"}}},yAxis:{axisLabel:r,axisLine:{show:!0,lineStyle:{color:"rgba(255, 255, 255, 0.40)"}},splitLine:{showMinLine:!1,lineStyle:{type:"dashed",color:"rgba(255, 255, 255, 0.40)"}}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:26,bottom:26,right:0},legend:{top:0,right:"center"},dataset:{},series:[]},d=n(52676),O=["style","datasource","series","option"],c=["type","x","y"];function y(b){var P=b.style,v=b.datasource,f=b.series,h=b.option,_=l()(b,O);return(0,d.jsx)(s.Z,i()(i()({},_),{},{defaultOption:u,style:P,option:i()(i()({},h),{},{dataset:{source:v||[]},series:f.map(function(p){var g=p.type,E=g===void 0?"line":g,m=p.x,C=m===void 0?"x":m,j=p.y,M=l()(p,c);return i()({type:E,encode:{x:C,y:j}},M)})})}))}},78983:function(o,e,n){n.d(e,{Z:function(){return b},J:function(){return u}});var t=n(48305),i=n.n(t),a=n(75271),l=n(95521),s=n(81247),r=n(72630),u="1.4rem",d={color:"#FFFFFF",fontSize:u},O={color:["#3CF0E1","#FF7373","#FFC674","#3CA5F0","#3C7DFA","#4D00FF"],textStyle:d,legend:{textStyle:d,itemWidth:4,itemHeight:4,padding:0,itemGap:4},label:{textBorderColor:"none",color:"white"},bar:{barWidth:10,itemStyle:{}}},c=n(52676),y=function(v,f){var h=v.className,_=v.style,p=v.option,g=v.defaultOption,E=v.onEvents,m=(0,a.useRef)(null),C=(0,a.useRef)(null);return(0,a.useImperativeHandle)(f,function(){return{getEchartsInstance:function(){return C.current}}}),(0,a.useEffect)(function(){var j=l.S1(m.current,O);C.current=j,g&&C.current.setOption(g),window.addEventListener("resize",j.resize),(0,r.sleep)(10).then(j.resize);var M=function(S){E&&Object.entries(E).forEach(function(D){var I=i()(D,2),T=I[0],F=I[1];j[S](T,F)})};return M("on"),function(){window.removeEventListener("resize",j.resize),M("off"),j.dispose()}},[]),(0,a.useEffect)(function(){p&&C.current.setOption(p)},[p]),p?(0,c.jsx)("div",{style:_,className:h,children:(0,c.jsx)("div",{ref:m,style:{width:"100%",height:"100%"}})}):(0,c.jsx)(s.Z,{})},b=(0,a.forwardRef)(y)},83822:function(o,e,n){n.r(e),n.d(e,{RingChart:function(){return u},default:function(){return d}});var t=n(26068),i=n.n(t),a=n(75271),l=n(78983),s=n(52676),r={tooltip:{trigger:"item"},legend:{bottom:10,left:"center",width:100},series:[{type:"pie",radius:[0,"70%"],center:["50%","35%"],label:{show:!1,position:"center"},emphasis:{},labelLine:{show:!1},data:[]}]};function u(c){var y=c.className,b=c.style,P=c.data,v=c.option,f=c.seriesOpt,h=c.animation;return(0,s.jsx)(d,{seriesOpt:i()({radius:["35%","60%"],emphasis:{label:{show:!0}}},f),className:y,style:b,option:v,data:P,animation:h})}function d(c){var y=c.className,b=c.style,P=c.data,v=c.option,f=c.seriesOpt,h=c.animation,_=(0,a.useRef)();return O({animation:h,chartRef:_,maxLen:P.length}),(0,s.jsx)(l.Z,{ref:_,defaultOption:r,option:i()(i()({},v),{},{series:[i()(i()({},f),{},{data:P})]}),className:y,style:b})}function O(c){var y=c.animation,b=c.chartRef,P=c.maxLen;(0,a.useEffect)(function(){if(y){var v=b.current.getEchartsInstance(),f=0,h=function(m,C){v.dispatchAction({type:m,seriesIndex:0,dataIndex:C})},_,p=function(){h("highlight",f),_=setInterval(function(){h("downplay",f),f=(f+1)%P,h("highlight",f)},2e3)};p();var g=function(){h("downplay",f),clearInterval(_)};return v.on("mouseover",g),v.on("mouseout",function(){p()}),function(){return g()}}},[y])}},35811:function(o,e,n){n.r(e),n.d(e,{default:function(){return O}});var t=n(26068),i=n.n(t),a=n(67825),l=n.n(a),s=n(78983),r=n(52676),u=["className","style","data"],d=function(y,b){return{type:"pie",radius:y,hoverAnimation:!1,label:{show:!1},emphasis:{scale:!1},data:[{value:100,itemStyle:{color:b}}]}};function O(c){var y=c.className,b=c.style,P=c.data,v=l()(c,u),f={tooltip:{trigger:"item",show:!1},legend:{show:!1},series:[d(["75%","80%"],"rgba(25, 61, 126, 1)"),d(["60%","61%"],"rgba(255, 255, 255, 0.12)"),d(["50%","51%"],"rgba(255, 255, 255, 0.12)"),{type:"pie",radius:["20%","60%"],center:["50%","50%"],roseType:"area",itemStyle:{},labelLine:{showAbove:!0,length:6,length2:2},z:3,data:P},d(["0%","8%"],"#F3F6FF"),d(["8%","20%"],"#0080FF"),d(["19%","20%"],"rgba(255, 255, 255, 0.22)")]};return(0,r.jsx)(s.Z,i()({className:y,style:b,option:f},v))}},35351:function(o,e,n){n.r(e),e.default={chart:"jPrHU7f9QgYkXAS77cO6",acceptTooltip:"H5K6Gwh3rlUzW8emvrDi",title:"mORdyTcBI1A5dp9vLE27",info:"cMSuXdRlSPkgOk1Ow8Lz",line1:"OMRO64yLLA8ZXAO_9w1W",divider:"HV1tNllEKoIxYoT7koJw",middle:"bDKRdaJeTnkD4T6GBdjI"}},42646:function(o,e,n){n.r(e),n.d(e,{texts:function(){return i}});var t=n(66677);const i=[{value:"npm i echarts",paraId:0,tocIndex:0},{value:"\u4F7F\u7528 dataset \u65B9\u5F0F\u7EC4\u7EC7 Echarts \u4EE3\u7801",paraId:1,tocIndex:1}]},5083:function(o,e){e.Z=`// \u57FA\u4E8E dataset \u7684 echarts \u7EC4\u4EF6
import { axisOption } from "./axisOption";
import CommonChart from "./CommonChart";

export default function AxisChart({ style, datasource, series, option, ...props }) {

  return <CommonChart
    {...props}
    defaultOption={axisOption}
    style={style}
    option={{
      ...option,
      dataset: { source: datasource || [] },
      series: series.map(({ type = 'line', x = 'x', y, ...ext }) => ({
        // type echarts \u7684 series \u7C7B\u578B\uFF0C \u5982\uFF1A 'line|bar'
        type,
        encode: {
          x, y
        },
        ...ext
      }))
    }}

  />
}
`},62355:function(o,e){e.Z=`// \u997C\u56FE
import { useEffect, useRef } from "react";
import CommonChart from "./CommonChart";

const chartOption = {
  tooltip: {
    trigger: 'item',
    // show: false
  },
  legend: {
    bottom: 10,
    left: 'center',
    width: 100,
  },
  series: [{
    type: 'pie',
    radius: [0, '70%'],
    center: ['50%', '35%'],
    label: {
      show: false,
      position: 'center'
    },
    emphasis: {
      // label: {
      //   show: true,
      // }
    },
    labelLine: {
      show: false
    },
    data: []
  }],
};
export function RingChart({ className, style, data, option, seriesOpt, animation }) {
  return <PieChart
    seriesOpt={{
      radius: ['35%', '60%'],
      emphasis: {
        label: {
          show: true,
        }
      },
      ...seriesOpt
    }}
    {...{ className, style, option, data, animation }}
  />
}

/**
 *
 * @param {Array} data [{ value, name }]
 * @returns
 */
export default function PieChart({
  className, style, data, option, seriesOpt,
  animation
}) {
  const chartRef = useRef();
  useAnimation({ animation, chartRef, maxLen: data.length });
  return <CommonChart
    ref={chartRef}
    defaultOption={chartOption}
    option={{
      ...option,
      series: [{
        ...seriesOpt,
        data
      }]
    }}
    {...{ className, style }}
  />;
}

function useAnimation({ animation, chartRef, maxLen }) {
  useEffect(() => {
    if (!animation) return;
    const chartInst = chartRef.current.getEchartsInstance();
    // \u81EA\u52A8\u8F6E\u64AD\u903B\u8F91
    let currentIndex = 0;
    const dispatchAction = (type, dataIndex) => {
      // \u9AD8\u4EAE\u5F53\u524D\u6247\u533A
      chartInst.dispatchAction({
        type,
        seriesIndex: 0,
        dataIndex
      });
    }
    let timer;

    const run = () => {
      dispatchAction('highlight', currentIndex);
      timer = setInterval(function () {
        // \u53D6\u6D88\u4E0A\u4E00\u4E2A\u9AD8\u4EAE\u7684\u6247\u533A
        dispatchAction('downplay', currentIndex);
        currentIndex = (currentIndex + 1) % maxLen;
        dispatchAction('highlight', currentIndex);
      }, 2000); // \u6BCF 2 \u79D2\u5207\u6362\u4E00\u6B21
    }
    run();

    const clear = () => {
      dispatchAction('downplay', currentIndex);
      clearInterval(timer);
    }
    // \u5F53\u9F20\u6807\u60AC\u505C\u5728\u997C\u56FE\u4E0A\u65F6\uFF0C\u6682\u505C\u8F6E\u64AD
    chartInst.on('mouseover', clear);

    // \u5F53\u9F20\u6807\u79FB\u51FA\u997C\u56FE\u65F6\uFF0C\u6062\u590D\u8F6E\u64AD
    chartInst.on('mouseout', () => {
      run();
    });
    return () => clear();
  }, [animation]);
}`},34654:function(o,e){e.Z=`// list = [
//   { value: 40, name: '\u957F\u98CE\u6E7E\u7EFC\u5408\u7F51\u683C' },
//   { value: 65, name: '\u4E2D\u5317\u7F51\u683C' },
//   { value: 89, name: '\u767D\u5170\u7F51\u683C' },
//   { value: 20, name: '\u767D\u7389\u7F51\u683C' },
//   { value: 70, name: '\u76D8\u6E7E\u91CC\u7F51\u683C' },
//   { value: 100, name: '\u67A3\u9633\u7F51\u683C' },
// ]

import RoseChart from "@/ReactECharts/RoseChart";
import styles from './index.module.less';
// import { Tag } from "@/components/Indicator";
import { useEffect, useState } from "react";
import classNames from "classnames";

const mockdata = [
  { value: 40, name: '\u957F\u98CE\u6E7E', tb: 10, hb: 56 },
  { value: 65, name: '\u4E2D\u5317', tb: 88, hb: 78 },
  { value: 89, name: '\u767D\u5170', tb: 80, hb: 65 },
  { value: 20, name: '\u767D\u7389', tb: 16, hb: 88 },
  { value: 70, name: '\u76D8\u6E7E\u91CC', tb: 10, hb: 12 },
  { value: 100, name: '\u67A3\u9633', tb: 60, hb: 11 },
]
/**
 * @param {string} type \u5F53\u524D\u6570\u636E\u7C7B\u578B\uFF0C\u5C55\u793A\u5728\u53F3\u4FA7\u5185\u5BB9\u533A\uFF1A \u5DF2\u53D7\u7406
 *
 * data = [{ value, name, tb, hb }]
 * middle: \u4E2D\u5C4F\u5C3A\u5BF8
 * */
export default function RoseChartPT({ className, type, data = mockdata, middle }) {
  const [selected, setSeletected] = useState({});

  useEffect(() => {
    if (!data?.length) return;

    setSeletected(data[0]);
  }, [data])
  return  <div className={classNames(styles.chart, middle && styles.middle, className)}>
    <RoseChart
      style={middle ? { height: 231, width: 285 } : { width: 343, height: 262 }}
      data={data}
      onEvents={{
        click: (params) => {
          setSeletected(params.data);
        }
      }}
    />
    <div className={styles.acceptTooltip}>
      <div className={styles.title}>{selected.name}</div>
      <div className={styles.info}>
        <div className={styles.line1}>
          <span>{type || '\u5DF2\u53D7\u7406'}</span>
          {selected.value}\u4EF6
          {/* <Tag num={selected.value} unit="\u4EF6" size="normal" /> */}
        </div>
        <div className={styles.divider}></div>
        <span>\u540C\u6BD4 / \u73AF\u6BD4</span>
        <span className="highlight">
          +{selected.tb}% / -{selected.hb}%
        </span>
        <div className={styles.line}></div>
      </div>
    </div>
  </div>
}`},32157:function(o,e){e.Z=`.background(@path) {
  background: @path no-repeat;
  // background-size: 100%;
  background-size: contain;
  background-position: center;
}

.chart {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background-color: black;
  color: white;
}

.acceptTooltip {
  width: 149px;
  height: 247px;

  .background(url(./accept-tooltip-bg.svg));
  background-size: cover;
  .title {
    background-color: #0b6ddd2c;
    font-weight: 500;
    padding: 10px;
  }

  .info {
    display: flex;
    text-align: left;
    padding: 28px 12px;
    flex-direction: column;
    justify-content: center;
    height: 150px;
    gap: 10px;
    .line1 {
      display: flex;
      flex-direction: column;
    }
    .divider {
      width: 100%;
      height: 1px;
      background: linear-gradient(90deg, #3CA5F0, rgba(60, 165, 240, 0));
    }
  }
}

// \u4E2D\u5C4F\u6837\u5F0F
.middle {
  .acceptTooltip {
    height: 200px;
    width: 136px;
    .info {
      padding: 12px;
    }
  }
}`},22648:function(o,e){Object.defineProperty(e,"__esModule",{value:!0});function n(t,i){return t<=0?[]:new Array(t).fill(null).map((a,l)=>i(l))}e.default=n},3174:function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.calculateCentroid=e.appendCentroid=e.convert3857ToWGS84=void 0;function n(a,l){const r=a/6378137*(180/Math.PI),u=(2*Math.atan(Math.exp(l/6378137))-Math.PI/2)*(180/Math.PI);return{longitude:r,latitude:u}}e.convert3857ToWGS84=n;function t(a){const l=a.features.map(s=>R(A({},s),{properties:R(A({},s.properties),{centroid:i(s.geometry)})}));return R(A({},a),{features:l})}e.appendCentroid=t;function i(a){let l=0,s=0,r=0;const u=a.coordinates[0];for(let d=0;d<u.length;d++){const O=(d+1)%u.length,c=u[d][0],y=u[d][1],b=u[O][0],P=u[O][1],v=(c*P-b*y)/2;r+=v,l+=(c+b)*v,s+=(y+P)*v}return r===0?null:[l/(3*r),s/(3*r)]}e.calculateCentroid=i},63838:function(o,e){Object.defineProperty(e,"__esModule",{value:!0});function n(t){if(!t)return{x:1,y:1};const i=t.getBoundingClientRect();return{x:i.width/t.offsetWidth,y:i.height/t.offsetHeight}}e.default=n},22367:function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n=>Object.prototype.toString.call(n).slice(8,-1)},79924:function(o,e){Object.defineProperty(e,"__esModule",{value:!0});function n(t,i){if(i<=0)return[];const a=[];for(let l=0;l<t.length;l+=i)a.push(t.slice(l,l+i));return a}e.default=n},72630:function(o,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.getDomScale=e.urlFormat=e.stringRealLen=e.sleep=e.range2Arr=e.linearScale=e.isPhoneNumber=e.isIdentityCard=e.validFunc=e.timeFormat=e.stringEllipsis=e.reverseArr=e.nonEmptyArr=e.jsonParse=e.isJsonString=e.isBigger=e.getType=e.randomStr=e.genList=e.calculateCentroid=e.appendCentroid=e.convert3857ToWGS84=e.groupArray=e.fmtNumber=e.randomNum=e.isNumber=e.toFixed=e.percent=void 0;const t=n(44751);Object.defineProperty(e,"percent",{enumerable:!0,get:function(){return t.percent}}),Object.defineProperty(e,"toFixed",{enumerable:!0,get:function(){return t.toFixed}}),Object.defineProperty(e,"isNumber",{enumerable:!0,get:function(){return t.isNumber}}),Object.defineProperty(e,"randomNum",{enumerable:!0,get:function(){return t.randomNum}}),Object.defineProperty(e,"fmtNumber",{enumerable:!0,get:function(){return t.fmtNumber}});const i=n(79924);e.groupArray=i.default;const a=n(3174);Object.defineProperty(e,"convert3857ToWGS84",{enumerable:!0,get:function(){return a.convert3857ToWGS84}}),Object.defineProperty(e,"appendCentroid",{enumerable:!0,get:function(){return a.appendCentroid}}),Object.defineProperty(e,"calculateCentroid",{enumerable:!0,get:function(){return a.calculateCentroid}});const l=n(22648);e.genList=l.default;var s=n(86335);Object.defineProperty(e,"randomStr",{enumerable:!0,get:function(){return s.default}});var r=n(22367);Object.defineProperty(e,"getType",{enumerable:!0,get:function(){return r.default}});var u=n(50204);Object.defineProperty(e,"isBigger",{enumerable:!0,get:function(){return u.default}});var d=n(76839);Object.defineProperty(e,"isJsonString",{enumerable:!0,get:function(){return d.default}});var O=n(30386);Object.defineProperty(e,"jsonParse",{enumerable:!0,get:function(){return O.default}});var c=n(26800);Object.defineProperty(e,"nonEmptyArr",{enumerable:!0,get:function(){return c.default}});var y=n(12878);Object.defineProperty(e,"reverseArr",{enumerable:!0,get:function(){return y.default}});var b=n(94829);Object.defineProperty(e,"stringEllipsis",{enumerable:!0,get:function(){return b.default}});var P=n(148);Object.defineProperty(e,"timeFormat",{enumerable:!0,get:function(){return P.default}});var v=n(49273);Object.defineProperty(e,"validFunc",{enumerable:!0,get:function(){return v.default}});var f=n(35512);Object.defineProperty(e,"isIdentityCard",{enumerable:!0,get:function(){return f.default}});var h=n(18887);Object.defineProperty(e,"isPhoneNumber",{enumerable:!0,get:function(){return h.default}});var _=n(65997);Object.defineProperty(e,"linearScale",{enumerable:!0,get:function(){return _.default}});var p=n(73094);Object.defineProperty(e,"range2Arr",{enumerable:!0,get:function(){return p.default}});var g=n(50968);Object.defineProperty(e,"sleep",{enumerable:!0,get:function(){return g.default}});var E=n(36894);Object.defineProperty(e,"stringRealLen",{enumerable:!0,get:function(){return E.default}});var m=n(69956);Object.defineProperty(e,"urlFormat",{enumerable:!0,get:function(){return m.default}});var C=n(63838);Object.defineProperty(e,"getDomScale",{enumerable:!0,get:function(){return C.default}})},50204:function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=(n,t)=>n===null||t===null||Number.isNaN(Number(n))||Number.isNaN(Number(t))?!1:Number(n)>Number(t)},35512:function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n=>{const t=String(n),i=/\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$|^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}[\dXx]$/,a=t.length===15?8:10,l=Number(t.slice(6,a)),s=Number(t.slice(a,a+2)),r=Number(t.slice(a+2,a+4));if(l%400===0||l%4===0&&l%100!==0){if(s===2&&r>29)return!1}else if(s===2&&r>28)return!1;if(i.test(t)&&t.length===18){const u=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],d={0:"1",1:"0",2:"X",3:"9",4:"8",5:"7",6:"6",7:"5",8:"4",9:"3",10:"2"};let O=0;return u.forEach((y,b)=>{const P=Number(t[b]);O+=y*P}),d[O%11]===t[17].toUpperCase()}return i.test(t)}},76839:function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n=>{try{JSON.parse(n)}catch(t){return!1}return!0}},18887:function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n=>/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/.test(String(n))},30386:function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n=>{try{return JSON.parse(n)}catch(t){return""}}},65997:function(o,e){Object.defineProperty(e,"__esModule",{value:!0});function n(t,i){const[a,l]=t,s=(i[1]-i[0])/(l-a);return r=>r<=a?i[0]:r>=l?i[1]:i[0]+(Math.min(l,r)-a)*s}e.default=n},26800:function(o,e,n){Object.defineProperty(e,"__esModule",{value:!0});const t=n(22367);e.default=i=>(0,t.default)(i)==="Array"&&i.length>0},44751:function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.fmtNumber=e.randomNum=e.toFixed=e.isNumber=e.percent=void 0;const n=(r,u)=>`${Math.round(r*1e4/u)/100}%`;e.percent=n;const t=r=>r===0||r==="0"?!0:!!Number(r);e.isNumber=t;const i=(r,u=2)=>{if(!(0,e.isNumber)(r))return r;if(u){const d=Math.pow(10,u);return Math.round(d*r)/d}return Math.round(r)};e.toFixed=i;const a=(r=1,u=0)=>(0,e.toFixed)(Math.random()*r,u);e.randomNum=a;const l=[{value:1e12,symbol:"\u4E07\u4EBF"},{value:1e8,symbol:"\u4EBF"},{value:1e4,symbol:"\u4E07"},{value:1e3,symbol:"\u5343"}];function s(r,u=l){for(const d of u)if(r>=d.value)return{value:(0,e.toFixed)(r/d.value,1),symbol:d.symbol};return{value:r,symbol:""}}e.fmtNumber=s},86335:function(o,e){Object.defineProperty(e,"__esModule",{value:!0});function n(t,i){const a=0<t&&t<12?t+2:13,l=Math.random().toString(32).slice(2,a);return i?i+"-"+l:l}e.default=n},73094:function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=(n=[])=>{if(!n)return[];if(!Array.isArray(n))return[];const{length:t}=n;return t===1?Array(2).fill(n[0]):n.slice(0,-1).map((i,a)=>[i,n[a+1]])}},12878:function(o,e,n){Object.defineProperty(e,"__esModule",{value:!0});const t=n(22367),i=n(26800);e.default=(a,l)=>{if(!(0,i.default)(a))return[];const s=a.length-1,r=[];if((0,t.default)(l)==="Function")for(let u=s;u>=0;u--)r.push(l(a[u],u));else for(let u=s;u>=0;u--)r.push(a[u]);return r}},50968:function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n=>new Promise(t=>{setTimeout(()=>{t()},n)})},94829:function(o,e,n){Object.defineProperty(e,"__esModule",{value:!0});const t=n(36894),i=n(22367),a=n(50204);e.default=(l,s)=>{if((0,i.default)(l)!=="String")return"";if(!(0,a.default)((0,t.default)(l),s))return l;let r=0;for(;r<=s;){r+=1;const u=l.substring(0,r);if((0,t.default)(u)>s)return`${u.substring(0,r-1)}...`}}},36894:function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n=>n.replace(/[\u4e00-\u9fa5]/g,"ss").length},148:function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=(n,t)=>{if(!n||!t)return t;const i=new Date(n);if(i.toString()==="Invalid Date")return t;i.setHours(i.getHours()+8);const[,a,l,s,r,u,d]=i.toISOString().match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/);return t.replace("YYYY",a).replace("YY",a.slice(-2)).replace("MM",l).replace("DD",s).replace("HH",r).replace("mm",u).replace("ss",d)}},69956:function(o,e,n){Object.defineProperty(e,"__esModule",{value:!0});const t=n(22367);function i(a){if((0,t.default)(a)!=="String")throw new Error("the param of urlFormat must be string");const l=a.indexOf("?");if(l===-1)return{};const s=a.substring(l+1),r=new URLSearchParams(s),u={};for(const[d,O]of r.entries())u[d]=O;return u}e.default=i},49273:function(o,e,n){Object.defineProperty(e,"__esModule",{value:!0});const t=n(22367);function i(a,...l){return(0,t.default)(a)==="Function"&&a(...l)}e.default=i}}]);
}());