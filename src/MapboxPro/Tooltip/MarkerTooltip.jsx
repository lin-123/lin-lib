import React from 'react';
import classNames from 'classnames';
import styles from './MarkerTooltip.module.less';
import { Tooltip } from '.';
import { isNumber } from '@/util/number';
import cxs from 'cxs';

export const MarkerInfo = ({
  className, config, point, onClick
}) => {
  if (!point) return null;
  const { width, bgimg } = config;
  const popoverCls = cxs({
    width,
    background: bgimg ? `url(${bgimg}) no-repeat` : 'rgb(0 0 0 / 60%)',
  });
  return <div className={classNames(popoverCls, styles.popover, className)}>
    {point.title && <div className={classNames(styles.title)}>{point.title}</div>}
    <table>
      <tbody>
        {config.lines.map((item, index) => {
          const tmpVal = point[item.value];
          const val = tmpVal.toString() || '--';
          return <tr key={index} className={classNames(styles.popoverItem)}>
            <td className={styles.label}>
              {item.label}
              ：
              {' '}
            </td>
            <td className={styles.value}>{val}</td>
          </tr>;
        })}
      </tbody>
    </table>
    <div className={styles.footer}>
      <span onClick={onClick}>
        {config.footerText || '查看详情>>'}
      </span>
    </div>
  </div>;
};

const MarkerTooltip = ({
  offset, config, point, onClose, onClick
}) => {
  if (!point) return null;
  return <Tooltip
    offset={offset}
    latitude={+point.lat}
    longitude={+point.lon}
    onClose={onClose}
    anchor="bottom"
  >
    <MarkerInfo config={config} point={point} onClick={onClick} />
  </Tooltip>;
};

export default MarkerTooltip;
