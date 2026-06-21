import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-VBLFG4C4.js";
import "./chunk-S6JMBF4C.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-XUEKLQVJ.js";
import "./chunk-VNOZ73SZ.js";
import "./chunk-XCTXJ3NV.js";
import "./chunk-L6PTLA7O.js";
import "./chunk-5KHTBPHV.js";
import "./chunk-LOHY7AAA.js";
import "./chunk-MCLGDLLQ.js";
import "./chunk-BIZC7Y24.js";
import "./chunk-HAF7HUA6.js";
import "./chunk-CCEXUECC.js";
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
