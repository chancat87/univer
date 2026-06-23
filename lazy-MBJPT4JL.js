import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-OKSBY2IJ.js";
import "./chunk-EG4UUNSJ.js";
import "./chunk-5ARVCA6J.js";
import "./chunk-GE3T6SEC.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-XDJQRT7P.js";
import "./chunk-QI2AEB5F.js";
import "./chunk-6JGXY3LE.js";
import "./chunk-RUBWMXYG.js";
import "./chunk-VDSGT5AZ.js";
import "./chunk-RLB6KXB7.js";
import "./chunk-RJX7H74E.js";
import "./chunk-QSEVI5FA.js";
import "./chunk-TGSCZSOP.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

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
