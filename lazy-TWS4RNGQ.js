import {
  UniverDocsMentionUIPlugin
} from "./chunk-3XGZYEBQ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-3BLOT4I4.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-HRS7BS4O.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-Y73ZXPYU.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-GEZVA24X.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-DTB5SSOI.js";
import "./chunk-NQMKE4RY.js";
import "./chunk-H7H44NSG.js";
import "./chunk-NJ4A6MU4.js";
import "./chunk-QTO2H6RN.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-4NPMPVHI.js";
import "./chunk-YR5UNHC6.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-D6M66X3V.js";
import "./chunk-WZIS5H2B.js";
import "./chunk-HQS5AD5N.js";
import "./chunk-6RUFGJLY.js";
import "./chunk-3QW3A2DW.js";
import "./chunk-RVRSM6WU.js";
import "./chunk-SZGQ3BB2.js";
import "./chunk-3WNTGTNW.js";
import "./chunk-HHTIJANW.js";
import "./chunk-TSO7IYVY.js";
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
