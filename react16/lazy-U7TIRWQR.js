import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-UVKI3FK3.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-CKNVC4XU.js";
import "./chunk-WXRO3DSE.js";
import "./chunk-LB2YNGLK.js";
import "./chunk-EWZN3U25.js";
import "./chunk-V7Q4UDXK.js";
import "./chunk-NEC7X7OM.js";
import "./chunk-V7TVWOVD.js";
import "./chunk-UZQSRV7M.js";
import "./chunk-TDDTJ2MZ.js";
import "./chunk-BWZ6GQIM.js";
import "./chunk-4ZR7A7BJ.js";
import "./chunk-5IFCPQIO.js";
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
