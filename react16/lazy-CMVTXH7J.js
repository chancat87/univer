import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-JSVABRWE.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-KTDVXO44.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-M4B2VLLQ.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-TJ7PO3N7.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-UG6N5LKS.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-W2NIYLCH.js";
import "./chunk-DQJCUPYB.js";
import "./chunk-AVPFKJGI.js";
import "./chunk-Z2MMSTQ5.js";
import "./chunk-RDE4N4UE.js";
import "./chunk-DZ3Z7OWS.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-6WKDVGJP.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-YLLESA75.js";
import "./chunk-ZYLZ4AM5.js";
import "./chunk-LJQQEGH7.js";
import "./chunk-24DSUN32.js";
import "./chunk-R57BLDMF.js";
import "./chunk-6GMDXAUM.js";
import "./chunk-GIASHSLF.js";
import "./chunk-TNPXDSFM.js";
import "./chunk-YFZT4CFH.js";
import "./chunk-JAAZE2FX.js";
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
