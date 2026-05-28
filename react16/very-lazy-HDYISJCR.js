import {
  UniverActionRecorderPlugin
} from "./chunk-UOZTMEWK.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-7ANNBNYU.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-BVUVAYFC.js";
import {
  UniverUniscriptPlugin
} from "./chunk-OLTBUCFO.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-64PEVBI3.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-WYMN4CCJ.js";
import "./chunk-CYRKAB6L.js";
import {
  UniverDebuggerPlugin
} from "./chunk-ORDSNLDH.js";
import "./chunk-I6X5MODM.js";
import {
  UniverWatermarkPlugin
} from "./chunk-NSVXQDDU.js";
import "./chunk-HH5GIY7L.js";
import "./chunk-OYR5WA5U.js";
import "./chunk-62ECU7WE.js";
import "./chunk-VQWZLQWB.js";
import "./chunk-RM6MVR4X.js";
import "./chunk-C33RTXUS.js";
import "./chunk-JPCPMZLQ.js";
import "./chunk-FVB32MRB.js";
import "./chunk-IV6OFMXB.js";
import "./chunk-IPFNFSLG.js";
import "./chunk-MM44YIF4.js";
import "./chunk-4JSWIADO.js";
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
