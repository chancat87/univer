import {
  UniverDocsMentionUIPlugin
} from "./chunk-HMUYBKYV.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-DGHWQJ4N.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-PSDECFMZ.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-54LI2EUW.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-X6PXPP7H.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-PN4ZLFQP.js";
import "./chunk-LHCPJCEG.js";
import "./chunk-RIE7YTA4.js";
import "./chunk-Q2ISKF2I.js";
import "./chunk-EG4UUNSJ.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-G43PDGIS.js";
import "./chunk-GE3T6SEC.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-CGXH6VRT.js";
import "./chunk-OC22TYMG.js";
import "./chunk-RWIIW5II.js";
import "./chunk-OT2HLRQE.js";
import "./chunk-L6Q3TYX6.js";
import "./chunk-VDSGT5AZ.js";
import "./chunk-RLB6KXB7.js";
import "./chunk-RJX7H74E.js";
import "./chunk-QSEVI5FA.js";
import "./chunk-TGSCZSOP.js";
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
