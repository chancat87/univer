import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-4BT5ONUB.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-KPVDVSFF.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-TBEJ3G2M.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-RJD75HU4.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-MAZ2ES2V.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-QQLALGYR.js";
import "./chunk-VYRRRSJG.js";
import "./chunk-VZAWI4Z7.js";
import "./chunk-LTFMDMK3.js";
import "./chunk-ZIIAXTTK.js";
import "./chunk-HETNQE73.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-5LUW7HID.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-GX3KAXUW.js";
import "./chunk-436BBS67.js";
import "./chunk-FNXED5ID.js";
import "./chunk-7GAOXSGD.js";
import "./chunk-MIJJ7SGO.js";
import "./chunk-ULYJ4AEG.js";
import "./chunk-G4MAVNYM.js";
import "./chunk-KIV2V2IY.js";
import "./chunk-3VI6RKZ6.js";
import "./chunk-CLNOWGEJ.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-DO7PIA5W.js";

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
