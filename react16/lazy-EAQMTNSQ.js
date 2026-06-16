import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-2WSFCF5Y.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-TXXLYW4J.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-KG37GFMD.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-O3EGNNJC.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-DJRNUUAW.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-UVD5KU6K.js";
import "./chunk-7DMLPDXV.js";
import "./chunk-RI7BYRQQ.js";
import "./chunk-I44LXAYU.js";
import "./chunk-4VGEQDVC.js";
import "./chunk-F6RRDDP3.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-55NCFCFI.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-DSTP7752.js";
import "./chunk-Q3MSHD62.js";
import "./chunk-6YOGPNDD.js";
import "./chunk-FZJJ3243.js";
import "./chunk-NZ7W7U6C.js";
import "./chunk-WWOZJZAI.js";
import "./chunk-W2RJV332.js";
import "./chunk-SWZ2CRIO.js";
import "./chunk-HOO533L5.js";
import "./chunk-XJSFHAOZ.js";
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
