import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-3PLDZ4VH.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-6QR2RXAQ.js";
import "./chunk-3H64B4ZE.js";
import "./chunk-Q33QYGSC.js";
import "./chunk-QFLFXVSG.js";
import "./chunk-DXLJTXCB.js";
import "./chunk-6DOBQSM7.js";
import "./chunk-H7EOKAK7.js";
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
