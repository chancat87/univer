import {
  UniverActionRecorderPlugin
} from "./chunk-KJRNMHMM.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-EQCAR75D.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-56Y44Y5A.js";
import {
  UniverUniscriptPlugin
} from "./chunk-5M2JWKQW.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-GPNPC2EK.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-5EASEVKK.js";
import "./chunk-I44LXAYU.js";
import {
  UniverDebuggerPlugin
} from "./chunk-NKXEF2G5.js";
import {
  UniverWatermarkPlugin
} from "./chunk-6SJ2PS4B.js";
import "./chunk-55NCFCFI.js";
import "./chunk-DSTP7752.js";
import "./chunk-6YOGPNDD.js";
import {
  loadDebuggerLocale
} from "./chunk-WIMFKKAA.js";
import "./chunk-FZJJ3243.js";
import "./chunk-NZ7W7U6C.js";
import "./chunk-DD2UA3MA.js";
import "./chunk-WWOZJZAI.js";
import "./chunk-W2RJV332.js";
import "./chunk-SWZ2CRIO.js";
import "./chunk-HOO533L5.js";
import "./chunk-XJSFHAOZ.js";
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
