import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-HD67YVN4.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-3PVLMVOS.js";
import "./chunk-LCNXKX57.js";
import "./chunk-W2X5ZSFK.js";
import "./chunk-EHDL7PAH.js";
import "./chunk-4UT46N5G.js";
import "./chunk-CEZ3ASA2.js";
import "./chunk-UUF7XU7O.js";
import "./chunk-ECONR6RM.js";
import "./chunk-TVPZ3PEL.js";
import "./chunk-CZ2PTCAX.js";
import "./chunk-ZBHWPOF6.js";
import "./chunk-IDTDYMR7.js";
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
