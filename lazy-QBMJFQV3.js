import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-Z6PU2L7M.js";
import "./chunk-STZNXT6X.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-F5CDAC6W.js";
import "./chunk-LV5V6Y6W.js";
import "./chunk-SRZVW4DU.js";
import "./chunk-3B6IQAI6.js";
import "./chunk-6CUJERGO.js";
import "./chunk-UELYZQA7.js";
import "./chunk-GORRS47O.js";
import "./chunk-ELKFKEHS.js";
import "./chunk-75Z4XWR6.js";
import "./chunk-EXOHZCIQ.js";
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
