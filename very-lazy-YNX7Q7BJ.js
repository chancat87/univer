import {
  UniverActionRecorderPlugin
} from "./chunk-D2DKR5WM.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-CGWISG3P.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-EGFU7KIO.js";
import {
  UniverUniscriptPlugin
} from "./chunk-BBR3VLAU.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-B6MD47FX.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-C5FISNAZ.js";
import "./chunk-XQA6W3WD.js";
import {
  UniverDebuggerPlugin
} from "./chunk-SEUOW2PD.js";
import {
  UniverWatermarkPlugin
} from "./chunk-JGQXQIG7.js";
import "./chunk-YZIZMSII.js";
import "./chunk-GL3WHIUS.js";
import "./chunk-HWPT7HAO.js";
import {
  loadDebuggerLocale
} from "./chunk-WRFHUIE7.js";
import "./chunk-IO7A2VQU.js";
import "./chunk-NF47Z4XV.js";
import "./chunk-FMZL2PTE.js";
import "./chunk-MCVGNO2H.js";
import "./chunk-W7WW4R4Y.js";
import "./chunk-FP57X2T3.js";
import "./chunk-XDSP77UU.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets/very-lazy.ts
var IS_E2E = false;
function getVeryLazyPlugins() {
  const plugins = [
    [UniverActionRecorderPlugin],
    [UniverSheetsHyperLinkUIPlugin],
    [UniverSheetsSortUIPlugin],
    [UniverSheetsCrosshairHighlightPlugin],
    [UniverSheetsFindReplacePlugin],
    [UniverWatermarkPlugin]
  ];
  if (!IS_E2E) {
    plugins.push([UniverDebuggerPlugin, {
      fabEntryUnitType: 2 /* UNIVER_SHEET */,
      localeLoader: loadDebuggerLocale
    }]);
    plugins.push([UniverUniscriptPlugin, {
      getWorkerUrl(_, label) {
        if (label === "json") {
          return "/vs/language/json/json.worker.js";
        }
        if (label === "css" || label === "scss" || label === "less") {
          return "/vs/language/css/css.worker.js";
        }
        if (label === "html" || label === "handlebars" || label === "razor") {
          return "/vs/language/html/html.worker.js";
        }
        if (label === "typescript" || label === "javascript") {
          return "/vs/language/typescript/ts.worker.js";
        }
        return "/vs/editor/editor.worker.js";
      }
    }]);
  }
  return plugins;
}
export {
  getVeryLazyPlugins as default
};
