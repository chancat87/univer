import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-LBME6IIT.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-4EHCIDQB.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-DP676T3V.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-475EVTGW.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-LQHS55BN.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-YD6IAARF.js";
import "./chunk-BE77UY3F.js";
import "./chunk-BMOFAAJZ.js";
import "./chunk-XOJIPTRL.js";
import "./chunk-HJ5L3MIF.js";
import "./chunk-OTNST6V2.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-5LA75ADK.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-NJAQLUVB.js";
import "./chunk-I4FN2AVD.js";
import "./chunk-MA64BJZM.js";
import "./chunk-YY5M73BR.js";
import "./chunk-VRCEW6HR.js";
import "./chunk-UHWK2B2L.js";
import "./chunk-2A7UPOAL.js";
import "./chunk-4ZVQCU3Y.js";
import "./chunk-ZABWMRUZ.js";
import "./chunk-2RCPMKBJ.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

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
