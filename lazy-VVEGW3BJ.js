import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-4IDZ2GEL.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-R62LXEI5.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-NMXHP3AQ.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-AORSTISZ.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-RXZWIRYR.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-7SHC5MDZ.js";
import "./chunk-2PZDH6VY.js";
import "./chunk-SRYTRK4E.js";
import "./chunk-ON3QVY7W.js";
import "./chunk-2UNGOZXR.js";
import "./chunk-I2H6IZXB.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-EZOI764H.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-NYMHQFXS.js";
import "./chunk-BAPKBPUE.js";
import "./chunk-KVUD5FLD.js";
import "./chunk-UF57BQM6.js";
import "./chunk-NCH7R6DO.js";
import "./chunk-RGECVIMI.js";
import "./chunk-EWNZ5QNE.js";
import "./chunk-4S5OHSTW.js";
import "./chunk-Z4Z3C7ZE.js";
import "./chunk-33LYH36L.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-DO7PIA5W.js";

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
