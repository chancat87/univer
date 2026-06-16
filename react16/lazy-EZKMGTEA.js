import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-TXXLYW4J.js";
import "./chunk-4VGEQDVC.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-55NCFCFI.js";
import "./chunk-DSTP7752.js";
import "./chunk-Q3MSHD62.js";
import "./chunk-6YOGPNDD.js";
import "./chunk-FZJJ3243.js";
import "./chunk-NZ7W7U6C.js";
import "./chunk-WWOZJZAI.js";
import "./chunk-W2RJV332.js";
import "./chunk-SWZ2CRIO.js";
import "./chunk-HOO533L5.js";
import "./chunk-XJSFHAOZ.js";
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
