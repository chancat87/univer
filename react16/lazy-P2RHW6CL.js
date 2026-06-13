import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-QVTDZDQK.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-JSJ4DQRU.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-OBQHLRL2.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-BHVSB4LT.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-MEMCCI52.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-A7DV5CLR.js";
import "./chunk-EROWMTXR.js";
import "./chunk-YVPJJBJJ.js";
import "./chunk-O4ZMPXLF.js";
import "./chunk-RNPX4WRU.js";
import "./chunk-5MJIZA7Y.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-QSN5EZAZ.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-GXWVLXXZ.js";
import "./chunk-66FMYFLY.js";
import "./chunk-LFWH636K.js";
import "./chunk-XRVR2H52.js";
import "./chunk-GDSMKYWA.js";
import "./chunk-OSRA6HXZ.js";
import "./chunk-QYY2YWST.js";
import "./chunk-G66X4HVS.js";
import "./chunk-3Z2XPC36.js";
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
