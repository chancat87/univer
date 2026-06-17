import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-H6OA4ZBK.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-42VLOAOF.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-IBHE5PF4.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-36PDURAD.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-CVHJ32K7.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-MXHXQQT4.js";
import "./chunk-PFSAMQPH.js";
import "./chunk-CTXJDOU3.js";
import "./chunk-J4I3YWJC.js";
import "./chunk-OHQEPDOJ.js";
import "./chunk-WKTMTJPB.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-RFQ2ZO6U.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-PZQ4QCPL.js";
import "./chunk-HGVNYS4M.js";
import "./chunk-ZKQRJE7L.js";
import "./chunk-AU7KVTCM.js";
import "./chunk-DHHCXRED.js";
import "./chunk-LVU262K6.js";
import "./chunk-VA3QBNTQ.js";
import "./chunk-YA6TPXLL.js";
import "./chunk-EZ7I6SAD.js";
import "./chunk-HNUJ6OAX.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

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
