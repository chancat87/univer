import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-HIZOKV3O.js";
import "./chunk-EG4UUNSJ.js";
import "./chunk-V52LKIHX.js";
import "./chunk-GE3T6SEC.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-ENDVM62Q.js";
import "./chunk-TIX3PPGF.js";
import "./chunk-N6CKGHHZ.js";
import "./chunk-URO7IPH2.js";
import "./chunk-5LNBNADJ.js";
import "./chunk-RLB6KXB7.js";
import "./chunk-GBCPMXX7.js";
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
