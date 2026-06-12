import {
  UniverActionRecorderPlugin
} from "./chunk-YVWLSTEZ.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-CIPHHZKY.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-S5Z7JJNH.js";
import {
  UniverUniscriptPlugin
} from "./chunk-WZBQM56A.js";
import "./chunk-GMDX6E2J.js";
import "./chunk-A3DRKKMY.js";
import "./chunk-WLDOIN2T.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-MOFFWWZ3.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-ODGSH7JB.js";
import "./chunk-IM6OZM4S.js";
import {
  UniverDebuggerPlugin
} from "./chunk-B5ZKID2M.js";
import {
  UniverWatermarkPlugin
} from "./chunk-L7E5LAEI.js";
import "./chunk-LBZ4BWUL.js";
import "./chunk-73ZCLG2B.js";
import "./chunk-6V7MZKRN.js";
import {
  loadDebuggerLocale
} from "./chunk-ZKICHKAT.js";
import "./chunk-NNJ2PAFS.js";
import "./chunk-DFLNXVRZ.js";
import "./chunk-Z2NBOTBN.js";
import "./chunk-JNKEFL4D.js";
import "./chunk-6FFDUATW.js";
import "./chunk-CXZNL3JJ.js";
import "./chunk-XFPFZZHP.js";
import "./chunk-EGKTDU4O.js";
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
