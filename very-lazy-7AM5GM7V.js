import {
  UniverActionRecorderPlugin
} from "./chunk-6AAX73CE.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-ZRL3VSF7.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-APQA5DN5.js";
import {
  UniverUniscriptPlugin
} from "./chunk-S6IHLQLT.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-RP5JOD7T.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-DID5UMOQ.js";
import "./chunk-S5JUJZLG.js";
import {
  UniverDebuggerPlugin
} from "./chunk-TWOBT7QK.js";
import "./chunk-TDMZD2OC.js";
import {
  UniverWatermarkPlugin
} from "./chunk-MEK4W47U.js";
import "./chunk-A3AFMM7C.js";
import "./chunk-PTH4ZFW6.js";
import "./chunk-Y4ZPO4RD.js";
import "./chunk-BRM4Q4S3.js";
import "./chunk-JUXR4H2I.js";
import "./chunk-22VMBDC5.js";
import "./chunk-LYXQRSZ3.js";
import "./chunk-BJILIWTN.js";
import "./chunk-VTJS4LWT.js";
import "./chunk-WRUL4T3Z.js";
import "./chunk-KRIGFYA2.js";
import "./chunk-QXSHBFLW.js";
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
