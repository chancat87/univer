import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-XY5ANQKR.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-74UYJFST.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-SXQRNEBK.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-HTRSISJJ.js";
import "./chunk-MCU7VS5Z.js";
import "./chunk-74HFMGP5.js";
import "./chunk-CLVCDLYQ.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-IF37WRIX.js";
import "./chunk-IETYKXRU.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-SM5XGW6L.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-E73IN3TA.js";
import "./chunk-EHC5QH3R.js";
import "./chunk-BSAX7R4H.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-SRSJZRBD.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-LL3C23MC.js";
import "./chunk-FVDEHCGA.js";
import "./chunk-PQXBTX33.js";
import "./chunk-UYLQVP27.js";
import "./chunk-RDPVWSGF.js";
import "./chunk-CTBLWIU7.js";
import "./chunk-QLAYCCMO.js";
import "./chunk-ADPAOSVN.js";
import "./chunk-P5OMPNXM.js";
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
