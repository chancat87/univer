import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-LFO47AIY.js";
import "./chunk-6ADN4SWR.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-R6IISLB3.js";
import "./chunk-WTK7JTVT.js";
import "./chunk-SDZBQQ4M.js";
import "./chunk-FEDSVBAQ.js";
import "./chunk-XRVQCUPD.js";
import "./chunk-GPJNXDNJ.js";
import "./chunk-7QG5NMCL.js";
import "./chunk-L2LRQXJ3.js";
import "./chunk-R53I7K3Y.js";
import "./chunk-5J4ZCI76.js";
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
