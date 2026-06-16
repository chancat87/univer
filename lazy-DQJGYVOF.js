import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-R2RMOMHN.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-6LM3KUQD.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-JKIOCS3O.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-NNZUZCPD.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-GL77MCGH.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-TOHRTTOO.js";
import "./chunk-K4XDEQC5.js";
import "./chunk-WDSJBSLO.js";
import "./chunk-KNXF6YPQ.js";
import "./chunk-WCON5HUC.js";
import "./chunk-W4KPX7X2.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-JL6L3JSD.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-SQ4FJZVL.js";
import "./chunk-UWVRURRP.js";
import "./chunk-ZNI6WOM4.js";
import "./chunk-PLVAV62H.js";
import "./chunk-IUZQOUIN.js";
import "./chunk-GZTNYRSD.js";
import "./chunk-7K5RKTUX.js";
import "./chunk-X6PSTXJS.js";
import "./chunk-SXPNKO5K.js";
import "./chunk-SGLSU3TV.js";
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
