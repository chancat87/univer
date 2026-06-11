import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-3PUMR5JJ.js";
import "./chunk-STZNXT6X.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-NQKL7SKD.js";
import "./chunk-KVQ7WPET.js";
import "./chunk-SRZVW4DU.js";
import "./chunk-US5ZXWDO.js";
import "./chunk-YCKGGZSC.js";
import "./chunk-5GQ6JDMJ.js";
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
