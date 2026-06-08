import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-VSUUHH5P.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-OWE5BUJR.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-3KSHHVHQ.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-XGUROYRL.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-RN3GHVMF.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-BQILDS5J.js";
import "./chunk-LPZ6ZQWW.js";
import "./chunk-TJTCVYJW.js";
import "./chunk-ZUFZIKBA.js";
import "./chunk-JSIEMJXQ.js";
import "./chunk-BDBRDHJL.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-XLZJ3R5A.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-QHLXQVBB.js";
import "./chunk-EHU5BXQO.js";
import "./chunk-Q3POQEIN.js";
import "./chunk-2HMY3XBH.js";
import "./chunk-LWWM426T.js";
import "./chunk-3LMEOY6C.js";
import "./chunk-MLKZU577.js";
import "./chunk-CKHMSDDS.js";
import "./chunk-3TEOVAGW.js";
import "./chunk-PRXL3D5H.js";
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
