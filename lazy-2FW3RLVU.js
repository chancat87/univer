import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-YCAOZH7E.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-LIEOYTQM.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-5BUYUCEA.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-ZY4T6RAG.js";
import "./chunk-UILKQLTV.js";
import "./chunk-CSNLX77K.js";
import "./chunk-OLFSUVVB.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-IDAF5KQV.js";
import "./chunk-WFNK2WW3.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-LURNFXWC.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-4PFEKCVZ.js";
import "./chunk-T6YQGTX4.js";
import "./chunk-2ROSD5A5.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-N3JJGLZC.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-LWII4FG3.js";
import "./chunk-H7C5TOBW.js";
import "./chunk-YSII74MQ.js";
import "./chunk-XFVBBIHA.js";
import "./chunk-PZXAACJY.js";
import "./chunk-LMTAFAGU.js";
import "./chunk-47V545ES.js";
import "./chunk-7PNPXMSO.js";
import "./chunk-4JSWIADO.js";
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
