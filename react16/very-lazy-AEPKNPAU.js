import {
  UniverActionRecorderPlugin
} from "./chunk-6TFYPHPO.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-D6T7U223.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-VKEECDTA.js";
import {
  UniverUniscriptPlugin
} from "./chunk-O6M5M5KQ.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-GEZPFETQ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-MO5ESTBI.js";
import "./chunk-LDUAXIGH.js";
import {
  UniverDebuggerPlugin
} from "./chunk-AXTUCZI5.js";
import "./chunk-LK5UAUCQ.js";
import {
  UniverWatermarkPlugin
} from "./chunk-7JCCGZU6.js";
import "./chunk-27L77ZCZ.js";
import "./chunk-G6LPYNFS.js";
import "./chunk-4W2SS6VH.js";
import "./chunk-7FKT5NN7.js";
import "./chunk-4Y6P5EHT.js";
import "./chunk-A4CCBSLK.js";
import "./chunk-W7SYDXAF.js";
import "./chunk-WJW75ESZ.js";
import "./chunk-4HP7LWJV.js";
import "./chunk-2CYUCMRJ.js";
import "./chunk-24OJVLNM.js";
import "./chunk-M4NHM7N2.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

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
    plugins.push([UniverDebuggerPlugin]);
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
