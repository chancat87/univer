import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-JSJ4DQRU.js";
import "./chunk-RNPX4WRU.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-QSN5EZAZ.js";
import "./chunk-GXWVLXXZ.js";
import "./chunk-66FMYFLY.js";
import "./chunk-LFWH636K.js";
import "./chunk-XRVR2H52.js";
import "./chunk-GDSMKYWA.js";
import "./chunk-OSRA6HXZ.js";
import "./chunk-QYY2YWST.js";
import "./chunk-G66X4HVS.js";
import "./chunk-3Z2XPC36.js";
import "./chunk-EGKTDU4O.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-DO7PIA5W.js";

// src/sheets-multi-units/lazy.ts
function getLazyPlugins() {
  return [
    [UniverSheetsDataValidationUIPlugin],
    [UniverSheetsConditionalFormattingUIPlugin],
    [UniverSheetsFilterUIPlugin, { useRemoteFilterValuesGenerator: false }],
    [UniverSheetsDrawingUIPlugin]
  ];
}
export {
  getLazyPlugins as default
};
