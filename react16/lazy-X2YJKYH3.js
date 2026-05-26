import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-UIX6URAS.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-A72YPYZE.js";
import "./chunk-FTQQIO6F.js";
import "./chunk-CXMPIKRB.js";
import "./chunk-6FHKAI2Z.js";
import "./chunk-2JMGWK5Q.js";
import "./chunk-PQNRBMEV.js";
import "./chunk-UNXLYMKH.js";
import "./chunk-6XPX7EDB.js";
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
