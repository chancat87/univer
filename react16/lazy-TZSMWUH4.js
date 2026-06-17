import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-42VLOAOF.js";
import "./chunk-OHQEPDOJ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-RFQ2ZO6U.js";
import "./chunk-PZQ4QCPL.js";
import "./chunk-HGVNYS4M.js";
import "./chunk-ZKQRJE7L.js";
import "./chunk-AU7KVTCM.js";
import "./chunk-DHHCXRED.js";
import "./chunk-LVU262K6.js";
import "./chunk-VA3QBNTQ.js";
import "./chunk-YA6TPXLL.js";
import "./chunk-EZ7I6SAD.js";
import "./chunk-HNUJ6OAX.js";
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
