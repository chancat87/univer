import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-EKGUGQ7G.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-GWRV6NTO.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-WMTFXH7J.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-LACGW3W2.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-6I7JQ2M2.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-26NUBJDQ.js";
import "./chunk-A7MLXFGP.js";
import "./chunk-AIUC26FK.js";
import "./chunk-MNBQ3BDD.js";
import "./chunk-TQ4OGOD3.js";
import "./chunk-QYV3PGEQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-53QU7367.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-HXWU3PV3.js";
import "./chunk-6TIP2OPB.js";
import "./chunk-BQLZUYLJ.js";
import "./chunk-JIAIZJPX.js";
import "./chunk-T5KOPS7N.js";
import "./chunk-V5FG6ZLV.js";
import "./chunk-5ED2IM6Z.js";
import "./chunk-RNEMECLQ.js";
import "./chunk-RQTPWJDA.js";
import "./chunk-5NEQ5UIN.js";
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
