import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-IAECGMOP.js";
import "./chunk-N22XZ366.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-HUKUPM6I.js";
import "./chunk-426AM33U.js";
import "./chunk-SB2KM3E7.js";
import "./chunk-DXBLSXJT.js";
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
