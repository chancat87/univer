import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-U2243ASE.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-55WHY5FX.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-MVKKWAS2.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-BXJBVOZC.js";
import "./chunk-ARFEALVQ.js";
import "./chunk-X7NOSDIV.js";
import "./chunk-CYRKAB6L.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-I6X5MODM.js";
import "./chunk-WFNK2WW3.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-HH5GIY7L.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-T7D4YDUK.js";
import "./chunk-QTW2EQKI.js";
import "./chunk-62ECU7WE.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-C6R3GSTN.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-VQWZLQWB.js";
import "./chunk-CMSWCGWC.js";
import "./chunk-RM6MVR4X.js";
import "./chunk-JPCPMZLQ.js";
import "./chunk-FVB32MRB.js";
import "./chunk-IV6OFMXB.js";
import "./chunk-IPFNFSLG.js";
import "./chunk-MM44YIF4.js";
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
