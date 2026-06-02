import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-4AJ4MWUE.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-DTYBENDE.js";
import "./chunk-AFLUU7PG.js";
import "./chunk-OHU5TY7G.js";
import "./chunk-UJ6OSDMO.js";
import "./chunk-DLJ2RGKD.js";
import "./chunk-ZDMNMDFO.js";
import "./chunk-XAKD2XHU.js";
import "./chunk-3LZR7CGZ.js";
import "./chunk-4CN32JQX.js";
import "./chunk-H7GNFIRV.js";
import "./chunk-NQ5GCUBK.js";
import "./chunk-IFI2CVGR.js";
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
