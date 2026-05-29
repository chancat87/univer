import {
  UniverActionRecorderPlugin
} from "./chunk-SNFVANBQ.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-7CNUCXHV.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-ZKVHERVK.js";
import {
  UniverUniscriptPlugin
} from "./chunk-I5BSZ6IS.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-JPER3K22.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-R2YSHHEB.js";
import "./chunk-CYRKAB6L.js";
import {
  UniverDebuggerPlugin
} from "./chunk-7R7PNAC5.js";
import "./chunk-XCM62BFC.js";
import {
  UniverWatermarkPlugin
} from "./chunk-NSVXQDDU.js";
import "./chunk-IXUS3LQ4.js";
import "./chunk-OYR5WA5U.js";
import "./chunk-62ECU7WE.js";
import "./chunk-HQV6JWNG.js";
import "./chunk-7L5UOFRB.js";
import "./chunk-C33RTXUS.js";
import "./chunk-JPCPMZLQ.js";
import "./chunk-FVB32MRB.js";
import "./chunk-IV6OFMXB.js";
import "./chunk-IPFNFSLG.js";
import "./chunk-MM44YIF4.js";
import "./chunk-4JSWIADO.js";
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
