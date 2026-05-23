import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-27L77ZCZ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-3QRGJFRL.js";
import "./chunk-7HAYJEO2.js";
import "./chunk-4W2SS6VH.js";
import "./chunk-7FKT5NN7.js";
import "./chunk-OFJPX44K.js";
import "./chunk-4Y6P5EHT.js";
import "./chunk-W7SYDXAF.js";
import "./chunk-WJW75ESZ.js";
import "./chunk-4HP7LWJV.js";
import "./chunk-2CYUCMRJ.js";
import "./chunk-24OJVLNM.js";
import "./chunk-M4NHM7N2.js";
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
