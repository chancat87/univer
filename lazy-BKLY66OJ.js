import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-QVS53T2M.js";
import "./chunk-4DUKKF5B.js";
import "./chunk-M7YIPXG2.js";
import "./chunk-NENHIOGR.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-4UBAF5MM.js";
import "./chunk-E76AX5ER.js";
import "./chunk-MAD3JRBW.js";
import "./chunk-CK4XAVSA.js";
import "./chunk-UQYEOB6K.js";
import "./chunk-UBUTY46K.js";
import "./chunk-M3MJBN7C.js";
import "./chunk-XMQDOTMR.js";
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
