import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-F5OC5IPX.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-55J5B6JV.js";
import "./chunk-4SHXUNWP.js";
import "./chunk-M5KARBFS.js";
import "./chunk-7IHWFKAL.js";
import "./chunk-CUGZH6GC.js";
import "./chunk-LL4GZLYH.js";
import "./chunk-OOIWN6DP.js";
import "./chunk-WMC5D3J2.js";
import "./chunk-TO4WQNEE.js";
import "./chunk-RJPALBRL.js";
import "./chunk-RK6SZT5J.js";
import "./chunk-EJHY6CWE.js";
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
