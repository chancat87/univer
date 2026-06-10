import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-7MWMUFQG.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-LFO47AIY.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-BDQYIFLL.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-YWTFQ46V.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-3VF2AUSX.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-4UKCHEAP.js";
import "./chunk-SCI2KG74.js";
import "./chunk-2LFGN4RE.js";
import "./chunk-VZC3NPFR.js";
import "./chunk-6ADN4SWR.js";
import "./chunk-I2H6IZXB.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-R6IISLB3.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-WTK7JTVT.js";
import "./chunk-SDZBQQ4M.js";
import "./chunk-FEDSVBAQ.js";
import "./chunk-XRVQCUPD.js";
import "./chunk-GPJNXDNJ.js";
import "./chunk-7QG5NMCL.js";
import "./chunk-L2LRQXJ3.js";
import "./chunk-R53I7K3Y.js";
import "./chunk-5J4ZCI76.js";
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
