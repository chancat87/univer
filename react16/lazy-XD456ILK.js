import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-TLKIBHJV.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-V4DGX7T6.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-TWATCJWF.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-3BX6QDVZ.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-WQVN6GQY.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-OOPA6QIW.js";
import "./chunk-U64EXQNE.js";
import "./chunk-BNEXS3NO.js";
import "./chunk-IM6OZM4S.js";
import "./chunk-UMMQHIGW.js";
import "./chunk-5MJIZA7Y.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-LBZ4BWUL.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-73ZCLG2B.js";
import "./chunk-DOH7OYW4.js";
import "./chunk-6V7MZKRN.js";
import "./chunk-NNJ2PAFS.js";
import "./chunk-DFLNXVRZ.js";
import "./chunk-JNKEFL4D.js";
import "./chunk-6FFDUATW.js";
import "./chunk-CXZNL3JJ.js";
import "./chunk-XFPFZZHP.js";
import "./chunk-EGKTDU4O.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-DO7PIA5W.js";

// src/sheets/lazy.ts
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
