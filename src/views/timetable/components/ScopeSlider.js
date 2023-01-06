import React from "react";
import moment from 'moment';

import Slider from "@material-ui/core/Slider";
import { Box } from "@material-ui/core";
import ZoomInIcon from '@material-ui/icons/ZoomIn';




export const createScopesSettings = (datetime = null) => {
  const dt = datetime || moment();
  return {
    1: [
      dt,
      dt.clone().add(2, "hour")
    ],
    2: [
      dt.clone().add(-3, "hour"),
      dt.clone().add(7, "hour")
    ],
    3: [
      dt.clone().startOf("day"),
      dt.clone().startOf("day").add(1, "day")
    ]
  }
};

export const defaultScopeKey = 2;

const scopes = [
  '3',
  '6',
  '24'
];
const marks = scopes.map((item, index) => ({value: index + 1, label: `${item} ч.`}));

const titleMeta = `
shift + mousewheel = scrolling left/right
alt + mousewheel = zoom in/zoom out
ctrl + mousewheel = zoom in/zoom out (speed х10)
meta (win/сmd) + mousewheel = zoom in/zoom out (speed х3)
`;

export const ZoomMeta = (props) => (
  <div title={titleMeta} onClick={() => props.raiseLabel('Do not touch, just hover', 3000)}>
    <ZoomInIcon />
  </div>
);

export const ScopeSlider = (props) => {
  return (
    <Box width={150} display="flex" >
      {/* <ZoomMeta /> */}
      <Slider
        style={{"marginLeft": "10px"}}
        defaultValue={scopes.length}
        getAriaValueText={props.setValue}
        aria-labelledby="discrete-slider"
        step={1}
        marks={marks}
        min={1}
        max={scopes.length}
        disabled
      />
    </Box>
  );
}
