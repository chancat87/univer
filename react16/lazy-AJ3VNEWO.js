import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-OGHUAAKQ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-4YG64VDK.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-TNZ53L34.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-D7MP43OR.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-T3H5EHLT.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-ZF7Y73OR.js";
import "./chunk-2P6OVZWD.js";
import "./chunk-WNLKC4ID.js";
import "./chunk-VXLQ36JM.js";
import "./chunk-PQKLAQ4G.js";
import "./chunk-5IZUWW3O.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-VLT6BNVC.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-57HBUP6B.js";
import "./chunk-FR7SS27L.js";
import "./chunk-7XAEPTV5.js";
import "./chunk-7SZIUZPE.js";
import "./chunk-YKMLQ5FL.js";
import "./chunk-WR3KZCUZ.js";
import "./chunk-TIITL5XZ.js";
import "./chunk-LO3AO4I4.js";
import "./chunk-TOWBRTW6.js";
import "./chunk-2NTMFV4P.js";
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
