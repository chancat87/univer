import {
  UniverActionRecorderPlugin
} from "./chunk-EEGDTIXT.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-S24PKIRC.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-R43HNSF7.js";
import {
  UniverUniscriptPlugin
} from "./chunk-SOQSF54X.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-N6E3YEVY.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-KOZM3CC3.js";
import "./chunk-J4I3YWJC.js";
import {
  UniverDebuggerPlugin
} from "./chunk-6VFWIMN4.js";
import {
  UniverWatermarkPlugin
} from "./chunk-J4ULH3HO.js";
import "./chunk-RFQ2ZO6U.js";
import "./chunk-PZQ4QCPL.js";
import "./chunk-ZKQRJE7L.js";
import {
  loadDebuggerLocale
} from "./chunk-JAL66NYS.js";
import "./chunk-AU7KVTCM.js";
import "./chunk-DHHCXRED.js";
import "./chunk-ERPSXR7T.js";
import "./chunk-LVU262K6.js";
import "./chunk-VA3QBNTQ.js";
import "./chunk-YA6TPXLL.js";
import "./chunk-EZ7I6SAD.js";
import "./chunk-HNUJ6OAX.js";
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
