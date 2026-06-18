import {
  UniverActionRecorderPlugin
} from "./chunk-Q4HN3GK4.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-PYMTJDWJ.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-NLRUNSJQ.js";
import {
  UniverUniscriptPlugin
} from "./chunk-JV5TMWZF.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-3YLV5EH2.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-GYBIYI76.js";
import "./chunk-VXLQ36JM.js";
import {
  UniverDebuggerPlugin
} from "./chunk-WUSSONRE.js";
import {
  UniverWatermarkPlugin
} from "./chunk-7TILZ3T5.js";
import "./chunk-VLT6BNVC.js";
import "./chunk-57HBUP6B.js";
import "./chunk-7XAEPTV5.js";
import {
  loadDebuggerLocale
} from "./chunk-IEF7J3A7.js";
import "./chunk-7SZIUZPE.js";
import "./chunk-YKMLQ5FL.js";
import "./chunk-M347PA2R.js";
import "./chunk-WR3KZCUZ.js";
import "./chunk-TIITL5XZ.js";
import "./chunk-LO3AO4I4.js";
import "./chunk-TOWBRTW6.js";
import "./chunk-2NTMFV4P.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

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
