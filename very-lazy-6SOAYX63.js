import {
  UniverActionRecorderPlugin
} from "./chunk-XJISEQMD.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-74LBKIFE.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-VZKJEZMR.js";
import {
  UniverUniscriptPlugin
} from "./chunk-ZJ537G3O.js";
import "./chunk-GMDX6E2J.js";
import "./chunk-A3DRKKMY.js";
import "./chunk-WLDOIN2T.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-35SDJFUU.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-6BVCLZC6.js";
import "./chunk-VZC3NPFR.js";
import {
  UniverDebuggerPlugin
} from "./chunk-QG2L5AK2.js";
import {
  UniverWatermarkPlugin
} from "./chunk-AHEUMPVE.js";
import "./chunk-R6IISLB3.js";
import "./chunk-WTK7JTVT.js";
import "./chunk-FEDSVBAQ.js";
import {
  loadDebuggerLocale
} from "./chunk-DMVEE645.js";
import "./chunk-XRVQCUPD.js";
import "./chunk-GPJNXDNJ.js";
import "./chunk-66S2PCKH.js";
import "./chunk-7QG5NMCL.js";
import "./chunk-L2LRQXJ3.js";
import "./chunk-R53I7K3Y.js";
import "./chunk-5J4ZCI76.js";
import "./chunk-33LYH36L.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-DO7PIA5W.js";

// src/sheets-no-worker/very-lazy.ts
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
