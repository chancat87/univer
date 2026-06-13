import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-ZHIJYZKC.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-2CN5XG3D.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-RYFGXZWC.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-QETDJ3WG.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-CZCIAS6S.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-FPUPASMG.js";
import "./chunk-A7MLXFGP.js";
import "./chunk-AIUC26FK.js";
import "./chunk-MNBQ3BDD.js";
import "./chunk-TQ4OGOD3.js";
import "./chunk-QYV3PGEQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-6XUBQ4BO.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-I4TKPU5B.js";
import "./chunk-6TIP2OPB.js";
import "./chunk-ITPY5S42.js";
import "./chunk-VSYBWRXI.js";
import "./chunk-OWRD2DAJ.js";
import "./chunk-V5FG6ZLV.js";
import "./chunk-5ED2IM6Z.js";
import "./chunk-RNEMECLQ.js";
import "./chunk-RQTPWJDA.js";
import "./chunk-5NEQ5UIN.js";
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
