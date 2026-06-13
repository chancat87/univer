import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-2CN5XG3D.js";
import "./chunk-TQ4OGOD3.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-6XUBQ4BO.js";
import "./chunk-I4TKPU5B.js";
import "./chunk-6TIP2OPB.js";
import "./chunk-ITPY5S42.js";
import "./chunk-VSYBWRXI.js";
import "./chunk-OWRD2DAJ.js";
import "./chunk-V5FG6ZLV.js";
import "./chunk-5ED2IM6Z.js";
import "./chunk-RNEMECLQ.js";
import "./chunk-RQTPWJDA.js";
import "./chunk-5NEQ5UIN.js";
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
