import {
  UniverActionRecorderPlugin
} from "./chunk-LAK2ROVC.js";
import {
  UniverUniscriptPlugin
} from "./chunk-IBZP4AOP.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-RS5LYR44.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-PLBFM5CG.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-FZLAUR3Z.js";
import {
  UniverDebuggerPlugin
} from "./chunk-CGWN3G2E.js";
import {
  UniverWatermarkPlugin
} from "./chunk-SGTCUN67.js";
import {
  loadDebuggerLocale
} from "./chunk-SGZ2HHVL.js";
import "./chunk-NLOGJINI.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-NAQQU7YI.js";
import "./chunk-USCC6GVR.js";
import "./chunk-M7YIPXG2.js";
import "./chunk-4UBAF5MM.js";
import "./chunk-E76AX5ER.js";
import "./chunk-MAD3JRBW.js";
import "./chunk-CK4XAVSA.js";
import "./chunk-UQYEOB6K.js";
import "./chunk-BIOJ5KTK.js";
import "./chunk-UBUTY46K.js";
import "./chunk-M3MJBN7C.js";
import "./chunk-XMQDOTMR.js";
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
