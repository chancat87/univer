import {
  UniverActionRecorderPlugin
} from "./chunk-MHKD3TXU.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-4UF34VA2.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-45WD5CAY.js";
import {
  UniverUniscriptPlugin
} from "./chunk-3OUNNQM7.js";
import "./chunk-GMDX6E2J.js";
import "./chunk-A3DRKKMY.js";
import "./chunk-WLDOIN2T.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-IH6WLNJR.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-5MBQNBVJ.js";
import "./chunk-ZVI52VUS.js";
import {
  UniverDebuggerPlugin
} from "./chunk-PNAWLM5K.js";
import {
  UniverWatermarkPlugin
} from "./chunk-4VUYNUJI.js";
import "./chunk-Q3WBWJGU.js";
import "./chunk-CVWXJ7EC.js";
import "./chunk-P7PYTPQ3.js";
import "./chunk-TBYHE7ZI.js";
import "./chunk-2CZ5W5IK.js";
import "./chunk-CBDIEJPE.js";
import "./chunk-NXFO7ESC.js";
import "./chunk-VTLXXVY6.js";
import "./chunk-PRLSOEOE.js";
import "./chunk-367XZEO6.js";
import "./chunk-NHNIOZYL.js";
import "./chunk-JNYF3CQV.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-DO7PIA5W.js";

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
