import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-G6FMMQLI.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-BJTCN2U3.js";
import "./chunk-FTQQIO6F.js";
import "./chunk-CXMPIKRB.js";
import "./chunk-7VZWZXCA.js";
import "./chunk-2JMGWK5Q.js";
import "./chunk-BL3GZ76K.js";
import "./chunk-5LSMNLCB.js";
import "./chunk-YHX3PO7Y.js";
import "./chunk-JAO4FOGC.js";
import "./chunk-UPB44MDX.js";
import "./chunk-M6VABHCX.js";
import "./chunk-F6ZBKZEW.js";
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
