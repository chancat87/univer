import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-CKCDTJ67.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-C2EMEFPE.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-RSUODNVQ.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-UYOZ225F.js";
import "./chunk-C5NRCCOC.js";
import "./chunk-RR44BENI.js";
import "./chunk-IIXKWGJP.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-EGNQIECW.js";
import "./chunk-PYGNDIBI.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-FXKLHA5Q.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-S56OP6OB.js";
import "./chunk-VI53KP2W.js";
import "./chunk-A2OOC2ZY.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-TCVUOFOB.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-PT6I5QRE.js";
import "./chunk-6QX7AJ42.js";
import "./chunk-AWDSMMM7.js";
import "./chunk-TMQGZNIJ.js";
import "./chunk-Z2IVZDG5.js";
import "./chunk-JVAUVJXG.js";
import "./chunk-IJXT2JU6.js";
import "./chunk-DSDMX7LI.js";
import "./chunk-63HVW4WP.js";
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
