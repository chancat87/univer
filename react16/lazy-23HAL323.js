import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-LURNFXWC.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-4PFEKCVZ.js";
import "./chunk-T6YQGTX4.js";
import "./chunk-2ROSD5A5.js";
import "./chunk-LWII4FG3.js";
import "./chunk-H7C5TOBW.js";
import "./chunk-YSII74MQ.js";
import "./chunk-XFVBBIHA.js";
import "./chunk-PZXAACJY.js";
import "./chunk-LMTAFAGU.js";
import "./chunk-47V545ES.js";
import "./chunk-7PNPXMSO.js";
import "./chunk-4JSWIADO.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

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
