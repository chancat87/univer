import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-K5YKN3RQ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-GXPR6XND.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-PZXBAKML.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-4XWNUFKV.js";
import "./chunk-STDPXZUA.js";
import "./chunk-L46HOIRH.js";
import "./chunk-OWFFAVOF.js";
import "./chunk-LGMAUSP7.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-HD67YVN4.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-3PVLMVOS.js";
import "./chunk-LCNXKX57.js";
import "./chunk-W2X5ZSFK.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-4WLNR2DM.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-EHDL7PAH.js";
import "./chunk-4UT46N5G.js";
import "./chunk-CEZ3ASA2.js";
import "./chunk-UUF7XU7O.js";
import "./chunk-ECONR6RM.js";
import "./chunk-TVPZ3PEL.js";
import "./chunk-CZ2PTCAX.js";
import "./chunk-ZBHWPOF6.js";
import "./chunk-IDTDYMR7.js";
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
