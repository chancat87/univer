import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-P7H3MKMZ.js";
import "./chunk-2UNGOZXR.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-42INSGKJ.js";
import "./chunk-EXBIXQP4.js";
import "./chunk-BAPKBPUE.js";
import "./chunk-MPJI6OR4.js";
import "./chunk-UF57BQM6.js";
import "./chunk-NCH7R6DO.js";
import "./chunk-RGECVIMI.js";
import "./chunk-EWNZ5QNE.js";
import "./chunk-4S5OHSTW.js";
import "./chunk-Z4Z3C7ZE.js";
import "./chunk-33LYH36L.js";
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
