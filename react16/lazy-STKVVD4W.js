import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-SM5XGW6L.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-E73IN3TA.js";
import "./chunk-EHC5QH3R.js";
import "./chunk-BSAX7R4H.js";
import "./chunk-LL3C23MC.js";
import "./chunk-FVDEHCGA.js";
import "./chunk-PQXBTX33.js";
import "./chunk-UYLQVP27.js";
import "./chunk-RDPVWSGF.js";
import "./chunk-CTBLWIU7.js";
import "./chunk-QLAYCCMO.js";
import "./chunk-ADPAOSVN.js";
import "./chunk-P5OMPNXM.js";
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
