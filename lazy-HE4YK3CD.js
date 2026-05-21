import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-GZP2TWQ7.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-HSJ4AMUF.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-O35BDTOB.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-PSQDX7HM.js";
import "./chunk-Z5XHI7PO.js";
import "./chunk-TSZJ5FWG.js";
import "./chunk-S5JUJZLG.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-TDMZD2OC.js";
import "./chunk-PYSVIXUP.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-A3AFMM7C.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-C65RQ2JR.js";
import "./chunk-6O7KDPHO.js";
import "./chunk-Y4ZPO4RD.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-YM5MM6UP.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-BRM4Q4S3.js";
import "./chunk-BBXUS2VP.js";
import "./chunk-JUXR4H2I.js";
import "./chunk-LYXQRSZ3.js";
import "./chunk-BJILIWTN.js";
import "./chunk-VTJS4LWT.js";
import "./chunk-WRUL4T3Z.js";
import "./chunk-KRIGFYA2.js";
import "./chunk-QXSHBFLW.js";
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
