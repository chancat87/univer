import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-OWE5BUJR.js";
import "./chunk-JSIEMJXQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-XLZJ3R5A.js";
import "./chunk-QHLXQVBB.js";
import "./chunk-EHU5BXQO.js";
import "./chunk-Q3POQEIN.js";
import "./chunk-2HMY3XBH.js";
import "./chunk-LWWM426T.js";
import "./chunk-3LMEOY6C.js";
import "./chunk-MLKZU577.js";
import "./chunk-CKHMSDDS.js";
import "./chunk-3TEOVAGW.js";
import "./chunk-PRXL3D5H.js";
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
