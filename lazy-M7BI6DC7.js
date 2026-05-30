import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-B6MVF6FU.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-E5LLQXKD.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-EJG65A3W.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-E3ETYNH5.js";
import "./chunk-GIY3B5S2.js";
import "./chunk-EFVVRJQB.js";
import "./chunk-C7B3GQ7C.js";
import "./chunk-J7YOEZ2J.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-EW4PHSHV.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-P7MKPTZF.js";
import "./chunk-G34OFE5K.js";
import "./chunk-3GQUFSHT.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-Z2UEWB3U.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-HA24AIUK.js";
import "./chunk-LSSYQWMR.js";
import "./chunk-F4F2YYY6.js";
import "./chunk-QWPPYM36.js";
import "./chunk-A4ZIYGHQ.js";
import "./chunk-B4NUTUQI.js";
import "./chunk-RBUELYHQ.js";
import "./chunk-UUV633F7.js";
import "./chunk-5IFCPQIO.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

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
