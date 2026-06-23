import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-PSDECFMZ.js";
import "./chunk-EG4UUNSJ.js";
import "./chunk-G43PDGIS.js";
import "./chunk-GE3T6SEC.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-CGXH6VRT.js";
import "./chunk-OC22TYMG.js";
import "./chunk-OT2HLRQE.js";
import "./chunk-L6Q3TYX6.js";
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
