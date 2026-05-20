import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-TJB5R6UT.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-E65EDFNL.js";
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
} from "./chunk-JJPHOOJZ.js";
import "./chunk-PYSVIXUP.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-YBVW43HL.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-A3XB3BIV.js";
import "./chunk-6O7KDPHO.js";
import "./chunk-Y4ZPO4RD.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-NPXL6NL4.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-MDTS46IY.js";
import "./chunk-BBXUS2VP.js";
import "./chunk-MWDP76KP.js";
import "./chunk-LYXQRSZ3.js";
import "./chunk-BJILIWTN.js";
import "./chunk-VTJS4LWT.js";
import "./chunk-WRUL4T3Z.js";
import "./chunk-KRIGFYA2.js";
import "./chunk-QXSHBFLW.js";
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
