import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-4EHCIDQB.js";
import "./chunk-HJ5L3MIF.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-5LA75ADK.js";
import "./chunk-NJAQLUVB.js";
import "./chunk-I4FN2AVD.js";
import "./chunk-MA64BJZM.js";
import "./chunk-YY5M73BR.js";
import "./chunk-VRCEW6HR.js";
import "./chunk-UHWK2B2L.js";
import "./chunk-2A7UPOAL.js";
import "./chunk-4ZVQCU3Y.js";
import "./chunk-ZABWMRUZ.js";
import "./chunk-2RCPMKBJ.js";
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
