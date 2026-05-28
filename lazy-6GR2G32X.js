import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-VK2XWMYX.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-XICG6I6F.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-KCCOK6P7.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-HL673RFD.js";
import "./chunk-KQYANNBU.js";
import "./chunk-HSKID3FM.js";
import "./chunk-57SCL377.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-RNOBK53O.js";
import "./chunk-WFNK2WW3.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-42YUNXYN.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-PTDHUNK7.js";
import "./chunk-3H64B4ZE.js";
import "./chunk-Q33QYGSC.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-KEB4YN3W.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-3QKY464I.js";
import "./chunk-DXLJTXCB.js";
import "./chunk-NXLBRPSM.js";
import "./chunk-EGU5CICW.js";
import "./chunk-YI67N2NN.js";
import "./chunk-OXQW5F2S.js";
import "./chunk-GMC4FNZY.js";
import "./chunk-6BJ26NAD.js";
import "./chunk-4JSWIADO.js";
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
