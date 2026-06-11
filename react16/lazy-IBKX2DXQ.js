import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-W7BRI4X5.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-Z6PU2L7M.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-FFMPXXOH.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-6NC53Y4G.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-ZYMM673D.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-7S4FSR5R.js";
import "./chunk-W6KOT5KG.js";
import "./chunk-CQKGLBEF.js";
import "./chunk-3L6RR6B6.js";
import "./chunk-STZNXT6X.js";
import "./chunk-I2H6IZXB.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-F5CDAC6W.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-LV5V6Y6W.js";
import "./chunk-SRZVW4DU.js";
import "./chunk-3B6IQAI6.js";
import "./chunk-6CUJERGO.js";
import "./chunk-UELYZQA7.js";
import "./chunk-GORRS47O.js";
import "./chunk-ELKFKEHS.js";
import "./chunk-75Z4XWR6.js";
import "./chunk-EXOHZCIQ.js";
import "./chunk-33LYH36L.js";
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
