import {
  UniverDocsMentionUIPlugin
} from "./chunk-TC2BDVQQ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-ST744DEI.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-HIZOKV3O.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-EY3DEE66.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-YCPVXK2A.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-XNDTQN43.js";
import "./chunk-LHCPJCEG.js";
import "./chunk-RIE7YTA4.js";
import "./chunk-Q2ISKF2I.js";
import "./chunk-EG4UUNSJ.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-V52LKIHX.js";
import "./chunk-GE3T6SEC.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-ENDVM62Q.js";
import "./chunk-TIX3PPGF.js";
import "./chunk-RWIIW5II.js";
import "./chunk-N6CKGHHZ.js";
import "./chunk-URO7IPH2.js";
import "./chunk-5LNBNADJ.js";
import "./chunk-RLB6KXB7.js";
import "./chunk-GBCPMXX7.js";
import "./chunk-QSEVI5FA.js";
import "./chunk-TGSCZSOP.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

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
