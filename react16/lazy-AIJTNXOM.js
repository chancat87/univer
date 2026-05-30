import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-EW4PHSHV.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-P7MKPTZF.js";
import "./chunk-G34OFE5K.js";
import "./chunk-3GQUFSHT.js";
import "./chunk-HA24AIUK.js";
import "./chunk-LSSYQWMR.js";
import "./chunk-F4F2YYY6.js";
import "./chunk-QWPPYM36.js";
import "./chunk-A4ZIYGHQ.js";
import "./chunk-B4NUTUQI.js";
import "./chunk-RBUELYHQ.js";
import "./chunk-UUV633F7.js";
import "./chunk-5IFCPQIO.js";
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
