import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-WIHNEFYT.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-OLW64BKP.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-O5VVF36W.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-XDE3WAWG.js";
import "./chunk-KV5JWXUB.js";
import "./chunk-2CX7ZMTY.js";
import "./chunk-YCHVHSM5.js";
import "./chunk-RJCTNTTO.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-4AJ4MWUE.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-DTYBENDE.js";
import "./chunk-AFLUU7PG.js";
import "./chunk-OHU5TY7G.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-X657PBFB.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-UJ6OSDMO.js";
import "./chunk-DLJ2RGKD.js";
import "./chunk-ZDMNMDFO.js";
import "./chunk-XAKD2XHU.js";
import "./chunk-3LZR7CGZ.js";
import "./chunk-4CN32JQX.js";
import "./chunk-H7GNFIRV.js";
import "./chunk-NQ5GCUBK.js";
import "./chunk-IFI2CVGR.js";
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
