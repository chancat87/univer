import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-TUIAEEAT.js";
import "./chunk-YLE2DYDN.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-NUW5ZHXO.js";
import "./chunk-AKFTNMAP.js";
import "./chunk-DYD3JD33.js";
import "./chunk-DYJ2U24P.js";
import "./chunk-ZBWRYDUJ.js";
import "./chunk-FIGZ5VDW.js";
import "./chunk-UKZXZXOR.js";
import "./chunk-JC4PXT54.js";
import "./chunk-2L3NWO5X.js";
import "./chunk-PPZWG4HX.js";
import "./chunk-E3BE2WWO.js";
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
