import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-FXKLHA5Q.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-S56OP6OB.js";
import "./chunk-VI53KP2W.js";
import "./chunk-A2OOC2ZY.js";
import "./chunk-PT6I5QRE.js";
import "./chunk-6QX7AJ42.js";
import "./chunk-AWDSMMM7.js";
import "./chunk-TMQGZNIJ.js";
import "./chunk-Z2IVZDG5.js";
import "./chunk-JVAUVJXG.js";
import "./chunk-IJXT2JU6.js";
import "./chunk-DSDMX7LI.js";
import "./chunk-63HVW4WP.js";
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
