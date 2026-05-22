import {
  UniverActionRecorderPlugin
} from "./chunk-NULF3THD.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-JGZRL7WF.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-O4LA2SIU.js";
import {
  UniverUniscriptPlugin
} from "./chunk-6K7APWAQ.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-PPCSYJSV.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-AWHXLMAM.js";
import "./chunk-CLVCDLYQ.js";
import {
  UniverDebuggerPlugin
} from "./chunk-KHGY3HSG.js";
import "./chunk-IF37WRIX.js";
import {
  UniverWatermarkPlugin
} from "./chunk-P3COAZ6H.js";
import "./chunk-SM5XGW6L.js";
import "./chunk-RRPQGQCJ.js";
import "./chunk-BSAX7R4H.js";
import "./chunk-LL3C23MC.js";
import "./chunk-PQXBTX33.js";
import "./chunk-3MPN2FQO.js";
import "./chunk-UYLQVP27.js";
import "./chunk-RDPVWSGF.js";
import "./chunk-CTBLWIU7.js";
import "./chunk-QLAYCCMO.js";
import "./chunk-ADPAOSVN.js";
import "./chunk-P5OMPNXM.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

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
