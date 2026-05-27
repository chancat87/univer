import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-JYJEAYWC.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-JFK3A6IW.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-LFUFXGHK.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-WEHD7PBG.js";
import "./chunk-KQYANNBU.js";
import "./chunk-HSKID3FM.js";
import "./chunk-57SCL377.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-6Y42HTA3.js";
import "./chunk-WFNK2WW3.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-3PLDZ4VH.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-6QR2RXAQ.js";
import "./chunk-3H64B4ZE.js";
import "./chunk-Q33QYGSC.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-ZC6DIDIH.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-QFLFXVSG.js";
import "./chunk-DXLJTXCB.js";
import "./chunk-6DOBQSM7.js";
import "./chunk-H7EOKAK7.js";
import "./chunk-YI67N2NN.js";
import "./chunk-OXQW5F2S.js";
import "./chunk-GMC4FNZY.js";
import "./chunk-6BJ26NAD.js";
import "./chunk-4JSWIADO.js";
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
