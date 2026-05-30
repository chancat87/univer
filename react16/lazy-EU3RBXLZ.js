import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-4X74J3VY.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-KT5KEHPY.js";
import "./chunk-WIMSFAJL.js";
import "./chunk-WSYXK7KQ.js";
import "./chunk-JZGEVVHZ.js";
import "./chunk-CUS7IJC4.js";
import "./chunk-44O7LPIC.js";
import "./chunk-RXK56TCF.js";
import "./chunk-AUWBG7XV.js";
import "./chunk-43TF6VLP.js";
import "./chunk-VTOJ6EY3.js";
import "./chunk-MQVOOHA3.js";
import "./chunk-66WYSUE4.js";
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
