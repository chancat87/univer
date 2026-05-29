import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-USGSYEWJ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-PCC27UXV.js";
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
} from "./chunk-XCM62BFC.js";
import "./chunk-WFNK2WW3.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-IXUS3LQ4.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-VASR5AOK.js";
import "./chunk-QTW2EQKI.js";
import "./chunk-62ECU7WE.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-QB4VZAAW.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-HQV6JWNG.js";
import "./chunk-CMSWCGWC.js";
import "./chunk-7L5UOFRB.js";
import "./chunk-JPCPMZLQ.js";
import "./chunk-FVB32MRB.js";
import "./chunk-IV6OFMXB.js";
import "./chunk-IPFNFSLG.js";
import "./chunk-MM44YIF4.js";
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
