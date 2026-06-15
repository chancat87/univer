import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-IFADAZPO.js";
import "./chunk-TQ4OGOD3.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-IHX7OEFL.js";
import "./chunk-SV4UHXXJ.js";
import "./chunk-6TIP2OPB.js";
import "./chunk-WMR2C3XU.js";
import "./chunk-X2CHE2KP.js";
import "./chunk-VEIZZIWA.js";
import "./chunk-V5FG6ZLV.js";
import "./chunk-KBL3NUOK.js";
import "./chunk-RNEMECLQ.js";
import "./chunk-RQTPWJDA.js";
import "./chunk-5NEQ5UIN.js";
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
