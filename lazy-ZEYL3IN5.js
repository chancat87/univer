import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-ABTVBNPL.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-TUIAEEAT.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-KNZKFJL4.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-CCSQSQKK.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-5TQJ7CD5.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-THJSAQC3.js";
import "./chunk-XRQNZY7I.js";
import "./chunk-LA7JVRIR.js";
import "./chunk-GLH5V5RZ.js";
import "./chunk-YLE2DYDN.js";
import "./chunk-KKVWMOCX.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-NUW5ZHXO.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-AKFTNMAP.js";
import "./chunk-DYD3JD33.js";
import "./chunk-DYJ2U24P.js";
import "./chunk-ZBWRYDUJ.js";
import "./chunk-FIGZ5VDW.js";
import "./chunk-UKZXZXOR.js";
import "./chunk-JC4PXT54.js";
import "./chunk-2L3NWO5X.js";
import "./chunk-PPZWG4HX.js";
import "./chunk-E3BE2WWO.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-DO7PIA5W.js";

// src/sheets-no-worker/lazy.ts
function getLazyPlugins() {
  return [
    [UniverDocsMentionUIPlugin],
    [UniverSheetsNumfmtUIPlugin],
    [UniverThreadCommentUIPlugin],
    [UniverSheetsThreadCommentUIPlugin],
    [UniverSheetsNoteUIPlugin],
    [UniverSheetsTableUIPlugin],
    [UniverSheetsFormulaUIPlugin],
    [UniverSheetsDataValidationUIPlugin],
    [UniverSheetsConditionalFormattingUIPlugin],
    [UniverSheetsFilterUIPlugin, { useRemoteFilterValuesGenerator: false }],
    [UniverSheetsDrawingUIPlugin]
  ];
}
export {
  getLazyPlugins as default
};
