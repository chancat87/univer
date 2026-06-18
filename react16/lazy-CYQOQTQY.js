import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-6UEQRBAV.js";
import "./chunk-IZY6T5UU.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-YZIZMSII.js";
import "./chunk-GL3WHIUS.js";
import "./chunk-QN2QVGT7.js";
import "./chunk-HWPT7HAO.js";
import "./chunk-IO7A2VQU.js";
import "./chunk-NF47Z4XV.js";
import "./chunk-MCVGNO2H.js";
import "./chunk-W7WW4R4Y.js";
import "./chunk-FP57X2T3.js";
import "./chunk-XDSP77UU.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

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
