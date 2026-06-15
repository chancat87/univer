import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-NOMJISXN.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-IFADAZPO.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-TS4BAJWU.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-27NMF5YV.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-EQM23BU2.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-S7ERW7Q6.js";
import "./chunk-A7MLXFGP.js";
import "./chunk-AIUC26FK.js";
import "./chunk-MNBQ3BDD.js";
import "./chunk-TQ4OGOD3.js";
import "./chunk-QYV3PGEQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-IHX7OEFL.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-SV4UHXXJ.js";
import "./chunk-6TIP2OPB.js";
import "./chunk-WMR2C3XU.js";
import "./chunk-X2CHE2KP.js";
import "./chunk-VEIZZIWA.js";
import "./chunk-V5FG6ZLV.js";
import "./chunk-KBL3NUOK.js";
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
