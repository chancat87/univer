import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-NIFSTT3P.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-VBLFG4C4.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-USMDVO7Q.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-TK5W4SCP.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-NTD2IJSL.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-LKGWSBMP.js";
import "./chunk-EGFJMTPO.js";
import "./chunk-JBJKEJZV.js";
import "./chunk-3B72GOSY.js";
import "./chunk-S6JMBF4C.js";
import "./chunk-NY2DSWSQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-XUEKLQVJ.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-VNOZ73SZ.js";
import "./chunk-XCTXJ3NV.js";
import "./chunk-L6PTLA7O.js";
import "./chunk-5KHTBPHV.js";
import "./chunk-LOHY7AAA.js";
import "./chunk-MCLGDLLQ.js";
import "./chunk-BIZC7Y24.js";
import "./chunk-HAF7HUA6.js";
import "./chunk-CCEXUECC.js";
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
