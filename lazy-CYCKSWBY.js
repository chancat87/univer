import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-HBVVVRQL.js";
import "./chunk-IGK3LLWA.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-KPCYPN2H.js";
import "./chunk-4GLZFMTJ.js";
import "./chunk-NPL7N7N6.js";
import "./chunk-SH32ZBX3.js";
import "./chunk-CQ4VYZJ4.js";
import "./chunk-YZ63L5OB.js";
import "./chunk-GQPOENU2.js";
import "./chunk-HCSE775N.js";
import "./chunk-MCE2SNW7.js";
import "./chunk-GEJ7L5S2.js";
import "./chunk-BFI4GFBQ.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-DO7PIA5W.js";

// src/sheets-multi-units/lazy.ts
function getLazyPlugins() {
  return [
    [UniverSheetsDataValidationUIPlugin],
    [UniverSheetsConditionalFormattingUIPlugin],
    [UniverSheetsFilterUIPlugin, { useRemoteFilterValuesGenerator: false }],
    [UniverSheetsDrawingUIPlugin]
  ];
}
export {
  getLazyPlugins as default
};
