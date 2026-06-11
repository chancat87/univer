import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-IHA6IE7B.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-3PUMR5JJ.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-TF4E2VOD.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-JCCQOVMB.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-RFPJWNQD.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-ENSW7Z4N.js";
import "./chunk-W6KOT5KG.js";
import "./chunk-CQKGLBEF.js";
import "./chunk-3L6RR6B6.js";
import "./chunk-STZNXT6X.js";
import "./chunk-I2H6IZXB.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-NQKL7SKD.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-KVQ7WPET.js";
import "./chunk-SRZVW4DU.js";
import "./chunk-US5ZXWDO.js";
import "./chunk-YCKGGZSC.js";
import "./chunk-5GQ6JDMJ.js";
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
