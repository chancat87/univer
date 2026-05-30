import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-TWBNUX44.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-OP6ECBEG.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-IYUGM26X.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-YYUGOP2J.js";
import "./chunk-JDKMWY57.js";
import "./chunk-G3IS4JPW.js";
import "./chunk-KZFUNX4V.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-4RE3GBNZ.js";
import "./chunk-HZIHV4KH.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-4X74J3VY.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-KT5KEHPY.js";
import "./chunk-WIMSFAJL.js";
import "./chunk-WSYXK7KQ.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-FWDGLNY4.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-JZGEVVHZ.js";
import "./chunk-CUS7IJC4.js";
import "./chunk-44O7LPIC.js";
import "./chunk-RXK56TCF.js";
import "./chunk-AUWBG7XV.js";
import "./chunk-43TF6VLP.js";
import "./chunk-VTOJ6EY3.js";
import "./chunk-MQVOOHA3.js";
import "./chunk-66WYSUE4.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

// src/sheets/lazy.ts
function getLazyPlugins() {
  return [
    [UniverDocsDrawingUIPlugin],
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
