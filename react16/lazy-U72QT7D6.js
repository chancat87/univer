import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-JGW7KILV.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-IAECGMOP.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-LFH5PZSU.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-NMGYYCY4.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-BLE4A3EJ.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-BVNPNBXK.js";
import "./chunk-YSZAIWUS.js";
import "./chunk-XK6B3T5S.js";
import "./chunk-NQJP32X7.js";
import "./chunk-N22XZ366.js";
import "./chunk-W4QGCLCX.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-HUKUPM6I.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-426AM33U.js";
import "./chunk-SB2KM3E7.js";
import "./chunk-DXBLSXJT.js";
import "./chunk-FADFDPJO.js";
import "./chunk-NCMWFBVU.js";
import "./chunk-NCOHMOMQ.js";
import "./chunk-C5ZDEYK2.js";
import "./chunk-G5QND7UH.js";
import "./chunk-F2DPNTXI.js";
import "./chunk-6UZK77F2.js";
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
