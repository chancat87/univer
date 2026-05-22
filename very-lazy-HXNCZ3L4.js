import {
  UniverActionRecorderPlugin
} from "./chunk-ZJPTDL54.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-UM5SJFVE.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-67L7M3OA.js";
import {
  UniverUniscriptPlugin
} from "./chunk-YHLLB3UX.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-6AYQEWNK.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-P3ZCS4PF.js";
import "./chunk-O3N3A2DX.js";
import {
  UniverDebuggerPlugin
} from "./chunk-34B3IAGJ.js";
import "./chunk-RT736XHC.js";
import {
  UniverWatermarkPlugin
} from "./chunk-23AVRTHF.js";
import "./chunk-IOYRNBCW.js";
import "./chunk-NVB4KPF5.js";
import "./chunk-CVFQBAJX.js";
import "./chunk-MVDG47K5.js";
import "./chunk-LPOXF6YM.js";
import "./chunk-2ZWTIXBC.js";
import "./chunk-KDLVHEZD.js";
import "./chunk-WMC5D3J2.js";
import "./chunk-EKO4WRKA.js";
import "./chunk-F55CLEHK.js";
import "./chunk-RK6SZT5J.js";
import "./chunk-EJHY6CWE.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

// src/sheets-multi-units/very-lazy.ts
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
