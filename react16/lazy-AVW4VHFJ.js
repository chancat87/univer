import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-UMAOON4I.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-3DUYCVTS.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-VIXHIO2P.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-2A5A7OSD.js";
import "./chunk-CCZYI2IZ.js";
import "./chunk-TMFRTRMK.js";
import "./chunk-3JCWQI65.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-35Z3KEZ2.js";
import "./chunk-X2UEXOMP.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-B5TCZM56.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-AKCGTSP3.js";
import "./chunk-J72NCLUZ.js";
import "./chunk-ND7OY7DY.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-YFKZI4LP.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-4P34EZEB.js";
import "./chunk-XKZYCRHT.js";
import "./chunk-7R4I4WTW.js";
import "./chunk-B2APTGFC.js";
import "./chunk-4QKNKDTI.js";
import "./chunk-U5XU3TS2.js";
import "./chunk-3IJ7FHN5.js";
import "./chunk-BGNMHP4X.js";
import "./chunk-NFVAY4NN.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

// src/sheets-no-worker/lazy.ts
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
