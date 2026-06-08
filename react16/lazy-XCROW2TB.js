import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-OSOY2D3J.js";
import "./chunk-XNNZZF66.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-Q3WBWJGU.js";
import "./chunk-CVWXJ7EC.js";
import "./chunk-N6SQANXB.js";
import "./chunk-P7PYTPQ3.js";
import "./chunk-2CZ5W5IK.js";
import "./chunk-CBDIEJPE.js";
import "./chunk-VTLXXVY6.js";
import "./chunk-PRLSOEOE.js";
import "./chunk-367XZEO6.js";
import "./chunk-NHNIOZYL.js";
import "./chunk-JNYF3CQV.js";
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
