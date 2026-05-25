import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-QNRFGUC7.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-HGBB7W6O.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-VVY2OTG7.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-NEPERA44.js";
import "./chunk-RHJW5UNG.js";
import "./chunk-NRDHW7XV.js";
import "./chunk-VWNHHCGD.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-KXR3WMW7.js";
import "./chunk-NT3YWP6P.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-G6FMMQLI.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-BJTCN2U3.js";
import "./chunk-FTQQIO6F.js";
import "./chunk-CXMPIKRB.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-IKRP2NMR.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-7VZWZXCA.js";
import "./chunk-2JMGWK5Q.js";
import "./chunk-BL3GZ76K.js";
import "./chunk-5LSMNLCB.js";
import "./chunk-YHX3PO7Y.js";
import "./chunk-JAO4FOGC.js";
import "./chunk-UPB44MDX.js";
import "./chunk-M6VABHCX.js";
import "./chunk-F6ZBKZEW.js";
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
