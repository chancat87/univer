import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-FDX63IRK.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-6UEQRBAV.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-7QMYTK5L.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-3TZTZ7FI.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-JRXON6TK.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-5RG3VDPQ.js";
import "./chunk-RNC72QLS.js";
import "./chunk-5ENTU6ZX.js";
import "./chunk-XQA6W3WD.js";
import "./chunk-IZY6T5UU.js";
import "./chunk-R3NKUFJR.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-YZIZMSII.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-GL3WHIUS.js";
import "./chunk-QN2QVGT7.js";
import "./chunk-HWPT7HAO.js";
import "./chunk-IO7A2VQU.js";
import "./chunk-NF47Z4XV.js";
import "./chunk-MCVGNO2H.js";
import "./chunk-W7WW4R4Y.js";
import "./chunk-FP57X2T3.js";
import "./chunk-XDSP77UU.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

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
