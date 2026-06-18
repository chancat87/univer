import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-KTDVXO44.js";
import "./chunk-RDE4N4UE.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-6WKDVGJP.js";
import "./chunk-YLLESA75.js";
import "./chunk-ZYLZ4AM5.js";
import "./chunk-LJQQEGH7.js";
import "./chunk-24DSUN32.js";
import "./chunk-R57BLDMF.js";
import "./chunk-6GMDXAUM.js";
import "./chunk-GIASHSLF.js";
import "./chunk-TNPXDSFM.js";
import "./chunk-YFZT4CFH.js";
import "./chunk-JAAZE2FX.js";
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
