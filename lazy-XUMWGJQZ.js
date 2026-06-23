import {
  UniverDocsMentionUIPlugin
} from "./chunk-75LSLSFK.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-WQDBWIBE.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-OKSBY2IJ.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-6JRPPN4T.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-TE47Q5VG.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-OYNTQE7A.js";
import "./chunk-LHCPJCEG.js";
import "./chunk-RIE7YTA4.js";
import "./chunk-Q2ISKF2I.js";
import "./chunk-EG4UUNSJ.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-5ARVCA6J.js";
import "./chunk-GE3T6SEC.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-XDJQRT7P.js";
import "./chunk-QI2AEB5F.js";
import "./chunk-RWIIW5II.js";
import "./chunk-6JGXY3LE.js";
import "./chunk-RUBWMXYG.js";
import "./chunk-VDSGT5AZ.js";
import "./chunk-RLB6KXB7.js";
import "./chunk-RJX7H74E.js";
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
