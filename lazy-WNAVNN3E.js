import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-LJQU4YQX.js";
import "./chunk-YLE2DYDN.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-MWVVGLEV.js";
import "./chunk-FUD4ZQUE.js";
import "./chunk-DYD3JD33.js";
import "./chunk-467D3BKM.js";
import "./chunk-WC3WXPWM.js";
import "./chunk-NZHRBDP3.js";
import "./chunk-UKZXZXOR.js";
import "./chunk-JC4PXT54.js";
import "./chunk-2L3NWO5X.js";
import "./chunk-PPZWG4HX.js";
import "./chunk-E3BE2WWO.js";
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
