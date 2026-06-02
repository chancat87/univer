import {
  UniverActionRecorderPlugin
} from "./chunk-KOGCDD5N.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-MZR3UNQ7.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-KBQ54XAF.js";
import {
  UniverUniscriptPlugin
} from "./chunk-CGJKII7R.js";
import "./chunk-GMDX6E2J.js";
import "./chunk-A3DRKKMY.js";
import "./chunk-WLDOIN2T.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-G3PQTUDF.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-FVVZ2AYV.js";
import "./chunk-YCHVHSM5.js";
import {
  UniverDebuggerPlugin
} from "./chunk-3SBEW7P7.js";
import {
  UniverWatermarkPlugin
} from "./chunk-KRLVTFWF.js";
import "./chunk-4AJ4MWUE.js";
import "./chunk-RLUVYJAF.js";
import "./chunk-OHU5TY7G.js";
import "./chunk-UJ6OSDMO.js";
import "./chunk-ZDMNMDFO.js";
import "./chunk-RBMMCNIT.js";
import "./chunk-XAKD2XHU.js";
import "./chunk-3LZR7CGZ.js";
import "./chunk-4CN32JQX.js";
import "./chunk-H7GNFIRV.js";
import "./chunk-NQ5GCUBK.js";
import "./chunk-IFI2CVGR.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-DO7PIA5W.js";

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
