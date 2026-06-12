import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-YLDMAM7G.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-LJQU4YQX.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-JMNUFIKM.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-WAGYZ5W5.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-ZPYI6UAD.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-MM2D6KHY.js";
import "./chunk-XRQNZY7I.js";
import "./chunk-LA7JVRIR.js";
import "./chunk-GLH5V5RZ.js";
import "./chunk-YLE2DYDN.js";
import "./chunk-KKVWMOCX.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-MWVVGLEV.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-FUD4ZQUE.js";
import "./chunk-DYD3JD33.js";
import "./chunk-467D3BKM.js";
import "./chunk-WC3WXPWM.js";
import "./chunk-NZHRBDP3.js";
import "./chunk-UKZXZXOR.js";
import "./chunk-JC4PXT54.js";
import "./chunk-2L3NWO5X.js";
import "./chunk-PPZWG4HX.js";
import "./chunk-E3BE2WWO.js";
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
