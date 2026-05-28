import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-42YUNXYN.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-PTDHUNK7.js";
import "./chunk-3H64B4ZE.js";
import "./chunk-Q33QYGSC.js";
import "./chunk-3QKY464I.js";
import "./chunk-DXLJTXCB.js";
import "./chunk-NXLBRPSM.js";
import "./chunk-EGU5CICW.js";
import "./chunk-YI67N2NN.js";
import "./chunk-OXQW5F2S.js";
import "./chunk-GMC4FNZY.js";
import "./chunk-6BJ26NAD.js";
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
