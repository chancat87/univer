import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-XJALIV4M.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-M7PJSTQS.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-YKQQA44N.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-NHYQMIQ3.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-Z72RDGFI.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-3URTNNIX.js";
import "./chunk-5LS4PHPV.js";
import "./chunk-WTPNGXWS.js";
import "./chunk-QNWRTIUQ.js";
import "./chunk-IGK3LLWA.js";
import "./chunk-FOMAEGCK.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-T4PRNKCT.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-DOPBWVR7.js";
import "./chunk-NPL7N7N6.js";
import "./chunk-AXTASDKZ.js";
import "./chunk-RBUEDVUD.js";
import "./chunk-TMJAJNJS.js";
import "./chunk-GQPOENU2.js";
import "./chunk-HCSE775N.js";
import "./chunk-MCE2SNW7.js";
import "./chunk-GEJ7L5S2.js";
import "./chunk-BFI4GFBQ.js";
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
