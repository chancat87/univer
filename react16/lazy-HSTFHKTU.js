import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-HH5GIY7L.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-T7D4YDUK.js";
import "./chunk-QTW2EQKI.js";
import "./chunk-62ECU7WE.js";
import "./chunk-VQWZLQWB.js";
import "./chunk-CMSWCGWC.js";
import "./chunk-RM6MVR4X.js";
import "./chunk-JPCPMZLQ.js";
import "./chunk-FVB32MRB.js";
import "./chunk-IV6OFMXB.js";
import "./chunk-IPFNFSLG.js";
import "./chunk-MM44YIF4.js";
import "./chunk-4JSWIADO.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

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
