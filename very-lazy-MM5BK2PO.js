import {
  UniverActionRecorderPlugin
} from "./chunk-DSPQGFRA.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-JMRG6QW6.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-WLVYVBBT.js";
import {
  UniverUniscriptPlugin
} from "./chunk-JKJ56WNR.js";
import "./chunk-GMDX6E2J.js";
import "./chunk-A3DRKKMY.js";
import "./chunk-WLDOIN2T.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-2IJ6A7ND.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-UZJKWS5S.js";
import "./chunk-ON3QVY7W.js";
import {
  UniverDebuggerPlugin
} from "./chunk-TXOPOWUG.js";
import {
  UniverWatermarkPlugin
} from "./chunk-D43JDEGE.js";
import "./chunk-42INSGKJ.js";
import "./chunk-EXBIXQP4.js";
import "./chunk-MPJI6OR4.js";
import {
  loadDebuggerLocale
} from "./chunk-7BNND2YP.js";
import "./chunk-UF57BQM6.js";
import "./chunk-NCH7R6DO.js";
import "./chunk-66S2PCKH.js";
import "./chunk-RGECVIMI.js";
import "./chunk-EWNZ5QNE.js";
import "./chunk-4S5OHSTW.js";
import "./chunk-Z4Z3C7ZE.js";
import "./chunk-33LYH36L.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-DO7PIA5W.js";

// src/sheets-multi-units/very-lazy.ts
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
