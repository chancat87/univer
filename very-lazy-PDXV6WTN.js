import {
  UniverActionRecorderPlugin
} from "./chunk-7NTC6HHH.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-CIYDIV67.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-ELYWGVUU.js";
import {
  UniverUniscriptPlugin
} from "./chunk-TFZOF477.js";
import "./chunk-GMDX6E2J.js";
import "./chunk-A3DRKKMY.js";
import "./chunk-WLDOIN2T.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-7LPZR25V.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-A7IGENFH.js";
import "./chunk-ZUFZIKBA.js";
import {
  UniverDebuggerPlugin
} from "./chunk-7KZZSGMQ.js";
import {
  UniverWatermarkPlugin
} from "./chunk-PB7LXP3M.js";
import "./chunk-XLZJ3R5A.js";
import "./chunk-QHLXQVBB.js";
import "./chunk-Q3POQEIN.js";
import "./chunk-TC3IYX7U.js";
import "./chunk-2HMY3XBH.js";
import "./chunk-LWWM426T.js";
import "./chunk-ZVMLUOKL.js";
import "./chunk-3LMEOY6C.js";
import "./chunk-MLKZU577.js";
import "./chunk-CKHMSDDS.js";
import "./chunk-3TEOVAGW.js";
import "./chunk-PRXL3D5H.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-DO7PIA5W.js";

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
