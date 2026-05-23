import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-ZTHEKJJE.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-MSJNAORU.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-TM2SOW7S.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-6TIVQ5HM.js";
import "./chunk-GRNI4BWG.js";
import "./chunk-NOGUP6GH.js";
import "./chunk-LDUAXIGH.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-LK5UAUCQ.js";
import "./chunk-5P534I2U.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-27L77ZCZ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-3QRGJFRL.js";
import "./chunk-7HAYJEO2.js";
import "./chunk-4W2SS6VH.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-NRWUHTF4.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-7FKT5NN7.js";
import "./chunk-OFJPX44K.js";
import "./chunk-4Y6P5EHT.js";
import "./chunk-W7SYDXAF.js";
import "./chunk-WJW75ESZ.js";
import "./chunk-4HP7LWJV.js";
import "./chunk-2CYUCMRJ.js";
import "./chunk-24OJVLNM.js";
import "./chunk-M4NHM7N2.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

// src/sheets-no-worker/lazy.ts
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
