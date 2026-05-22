import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-IOYRNBCW.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-GNRDEWOE.js";
import "./chunk-7ZKTD25D.js";
import "./chunk-CVFQBAJX.js";
import "./chunk-MVDG47K5.js";
import "./chunk-EUBS5GCX.js";
import "./chunk-LPOXF6YM.js";
import "./chunk-KDLVHEZD.js";
import "./chunk-WMC5D3J2.js";
import "./chunk-EKO4WRKA.js";
import "./chunk-F55CLEHK.js";
import "./chunk-RK6SZT5J.js";
import "./chunk-EJHY6CWE.js";
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
