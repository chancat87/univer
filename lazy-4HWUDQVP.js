import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-WXLL4OHO.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-OSOY2D3J.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-U6S6ZLAL.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-2QLP3W6I.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-BARH6AQS.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-ZPIHTAPT.js";
import "./chunk-CZO4TBDP.js";
import "./chunk-F3COFRZY.js";
import "./chunk-ZVI52VUS.js";
import "./chunk-XNNZZF66.js";
import "./chunk-JPOO4OBN.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-Q3WBWJGU.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-CVWXJ7EC.js";
import "./chunk-N6SQANXB.js";
import "./chunk-P7PYTPQ3.js";
import "./chunk-2CZ5W5IK.js";
import "./chunk-CBDIEJPE.js";
import "./chunk-VTLXXVY6.js";
import "./chunk-PRLSOEOE.js";
import "./chunk-367XZEO6.js";
import "./chunk-NHNIOZYL.js";
import "./chunk-JNYF3CQV.js";
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
