import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-6YE6LI3T.js";
import "./chunk-N22XZ366.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-DZG24DRY.js";
import "./chunk-RGR2G2GE.js";
import "./chunk-SB2KM3E7.js";
import "./chunk-UWQ4OTPN.js";
import "./chunk-FADFDPJO.js";
import "./chunk-NCMWFBVU.js";
import "./chunk-NCOHMOMQ.js";
import "./chunk-C5ZDEYK2.js";
import "./chunk-G5QND7UH.js";
import "./chunk-F2DPNTXI.js";
import "./chunk-6UZK77F2.js";
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
