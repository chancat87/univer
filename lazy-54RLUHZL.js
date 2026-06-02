import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-SWNXSI3X.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-OFADUPIL.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-IWVKXC4B.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-DGJWGYTP.js";
import "./chunk-DP6UAYKS.js";
import "./chunk-YBYIQ2W4.js";
import "./chunk-CZ57242M.js";
import "./chunk-UFCKDDQJ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-3KJG4PU2.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-GSW7C6DI.js";
import "./chunk-O27YI6T3.js";
import "./chunk-6T2RW4GL.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-AZG4ZEAG.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-DLH4QXAQ.js";
import "./chunk-UV7DXJBX.js";
import "./chunk-MQNP6LR7.js";
import "./chunk-2LXZR2FM.js";
import "./chunk-DAWPB5V5.js";
import "./chunk-SLOSFHLK.js";
import "./chunk-NREJXSOV.js";
import "./chunk-EOKJYDPY.js";
import "./chunk-4NZDNFUF.js";
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
