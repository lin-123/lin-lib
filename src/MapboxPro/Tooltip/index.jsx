import React from 'react';
import classNames from 'classnames';
import cxs from 'cxs';
import { Popup } from '@vis.gl/react-maplibre';

export function Tooltip({
  className, latitude, longitude, anchor = 'top', onClose, ...props
}) {
  const popupCls = cxs({
    maxWidth: 'none !important',
    // color: 'black',
    ' .maplibregl-popup-tip': {
      display: 'none'
    },
    ' .maplibregl-popup-content': {
      background: 'none',
      padding: 0
    }
  });

  return <Popup
    closeButton={false}

    className={classNames(popupCls, className)}
    style={{ maxWidth: 100 }}
    {...{
      latitude, longitude, anchor, onClose, ...props
    }}
  >
  </Popup>;
}
