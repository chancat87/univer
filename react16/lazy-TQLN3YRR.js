import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-V4DGX7T6.js";
import "./chunk-UMMQHIGW.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-LBZ4BWUL.js";
import "./chunk-73ZCLG2B.js";
import "./chunk-DOH7OYW4.js";
import "./chunk-6V7MZKRN.js";
import "./chunk-NNJ2PAFS.js";
import "./chunk-DFLNXVRZ.js";
import "./chunk-JNKEFL4D.js";
import "./chunk-6FFDUATW.js";
import "./chunk-CXZNL3JJ.js";
import "./chunk-XFPFZZHP.js";
import "./chunk-EGKTDU4O.js";
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
