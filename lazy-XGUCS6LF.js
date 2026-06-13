import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-GWRV6NTO.js";
import "./chunk-TQ4OGOD3.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-53QU7367.js";
import "./chunk-HXWU3PV3.js";
import "./chunk-6TIP2OPB.js";
import "./chunk-BQLZUYLJ.js";
import "./chunk-JIAIZJPX.js";
import "./chunk-T5KOPS7N.js";
import "./chunk-V5FG6ZLV.js";
import "./chunk-5ED2IM6Z.js";
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
