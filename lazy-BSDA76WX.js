import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-B5TCZM56.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-AKCGTSP3.js";
import "./chunk-J72NCLUZ.js";
import "./chunk-ND7OY7DY.js";
import "./chunk-4P34EZEB.js";
import "./chunk-XKZYCRHT.js";
import "./chunk-7R4I4WTW.js";
import "./chunk-B2APTGFC.js";
import "./chunk-4QKNKDTI.js";
import "./chunk-U5XU3TS2.js";
import "./chunk-3IJ7FHN5.js";
import "./chunk-BGNMHP4X.js";
import "./chunk-NFVAY4NN.js";
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
