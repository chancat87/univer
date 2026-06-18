import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-4YG64VDK.js";
import "./chunk-PQKLAQ4G.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-VLT6BNVC.js";
import "./chunk-57HBUP6B.js";
import "./chunk-FR7SS27L.js";
import "./chunk-7XAEPTV5.js";
import "./chunk-7SZIUZPE.js";
import "./chunk-YKMLQ5FL.js";
import "./chunk-WR3KZCUZ.js";
import "./chunk-TIITL5XZ.js";
import "./chunk-LO3AO4I4.js";
import "./chunk-TOWBRTW6.js";
import "./chunk-2NTMFV4P.js";
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
