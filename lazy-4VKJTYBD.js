import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-5I4HZ4IN.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-NUYWE32G.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-OMQQXQZM.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-WDA4EG3Y.js";
import "./chunk-5CGPSNPI.js";
import "./chunk-NOXGWN44.js";
import "./chunk-O3N3A2DX.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-RT736XHC.js";
import "./chunk-C3EF23GE.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-IOYRNBCW.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-GNRDEWOE.js";
import "./chunk-7ZKTD25D.js";
import "./chunk-CVFQBAJX.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-E36NZCOZ.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-MVDG47K5.js";
import "./chunk-EUBS5GCX.js";
import "./chunk-LPOXF6YM.js";
import "./chunk-KDLVHEZD.js";
import "./chunk-WMC5D3J2.js";
import "./chunk-EKO4WRKA.js";
import "./chunk-F55CLEHK.js";
import "./chunk-RK6SZT5J.js";
import "./chunk-EJHY6CWE.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

// src/sheets/lazy.ts
function getLazyPlugins() {
  return [
    [UniverDocsDrawingUIPlugin],
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
