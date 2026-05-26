import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-NGSA2RFZ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-2GPRZQTC.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-QYGHAUR5.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-R2DG4QRT.js";
import "./chunk-RHJW5UNG.js";
import "./chunk-NRDHW7XV.js";
import "./chunk-VWNHHCGD.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-FZOR35AP.js";
import "./chunk-NT3YWP6P.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-UIX6URAS.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-A72YPYZE.js";
import "./chunk-FTQQIO6F.js";
import "./chunk-CXMPIKRB.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-MDVOPTZS.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-6FHKAI2Z.js";
import "./chunk-2JMGWK5Q.js";
import "./chunk-PQNRBMEV.js";
import "./chunk-UNXLYMKH.js";
import "./chunk-6XPX7EDB.js";
import "./chunk-JAO4FOGC.js";
import "./chunk-UPB44MDX.js";
import "./chunk-M6VABHCX.js";
import "./chunk-F6ZBKZEW.js";
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
