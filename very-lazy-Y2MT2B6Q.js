import {
  UniverActionRecorderPlugin
} from "./chunk-THNMSPSU.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-O4EWX664.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-H66U6NQF.js";
import {
  UniverUniscriptPlugin
} from "./chunk-B7EQCCG6.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-V7VDRTBP.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-XKONQ76M.js";
import "./chunk-3JCWQI65.js";
import {
  UniverDebuggerPlugin
} from "./chunk-QX7GU77A.js";
import "./chunk-35Z3KEZ2.js";
import {
  UniverWatermarkPlugin
} from "./chunk-JUPXKG6C.js";
import "./chunk-B5TCZM56.js";
import "./chunk-UB4LXMSQ.js";
import "./chunk-ND7OY7DY.js";
import "./chunk-4P34EZEB.js";
import "./chunk-7R4I4WTW.js";
import "./chunk-SOZX7552.js";
import "./chunk-B2APTGFC.js";
import "./chunk-4QKNKDTI.js";
import "./chunk-U5XU3TS2.js";
import "./chunk-3IJ7FHN5.js";
import "./chunk-BGNMHP4X.js";
import "./chunk-NFVAY4NN.js";
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
