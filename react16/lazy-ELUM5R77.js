import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-6LM3KUQD.js";
import "./chunk-WCON5HUC.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-JL6L3JSD.js";
import "./chunk-SQ4FJZVL.js";
import "./chunk-UWVRURRP.js";
import "./chunk-ZNI6WOM4.js";
import "./chunk-PLVAV62H.js";
import "./chunk-IUZQOUIN.js";
import "./chunk-GZTNYRSD.js";
import "./chunk-7K5RKTUX.js";
import "./chunk-X6PSTXJS.js";
import "./chunk-SXPNKO5K.js";
import "./chunk-SGLSU3TV.js";
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
