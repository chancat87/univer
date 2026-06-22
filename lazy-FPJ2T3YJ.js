import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-HRS7BS4O.js";
import "./chunk-QTO2H6RN.js";
import "./chunk-4NPMPVHI.js";
import "./chunk-YR5UNHC6.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-D6M66X3V.js";
import "./chunk-WZIS5H2B.js";
import "./chunk-6RUFGJLY.js";
import "./chunk-3QW3A2DW.js";
import "./chunk-RVRSM6WU.js";
import "./chunk-SZGQ3BB2.js";
import "./chunk-3WNTGTNW.js";
import "./chunk-HHTIJANW.js";
import "./chunk-TSO7IYVY.js";
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
