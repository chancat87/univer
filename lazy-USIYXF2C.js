import {
  UniverDocsMentionUIPlugin
} from "./chunk-AKQOU4LG.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-B2KUFF6H.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-QVS53T2M.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-TH5R62RU.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-2LSXDUTJ.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-D667LWGJ.js";
import "./chunk-2DJZTWJ5.js";
import "./chunk-56G5Y6SP.js";
import "./chunk-USCC6GVR.js";
import "./chunk-4DUKKF5B.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-M7YIPXG2.js";
import "./chunk-NENHIOGR.js";
import "./chunk-VANE5BSS.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-4UBAF5MM.js";
import "./chunk-E76AX5ER.js";
import "./chunk-MAD3JRBW.js";
import "./chunk-CK4XAVSA.js";
import "./chunk-UQYEOB6K.js";
import "./chunk-UBUTY46K.js";
import "./chunk-M3MJBN7C.js";
import "./chunk-XMQDOTMR.js";
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
