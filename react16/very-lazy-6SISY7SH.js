import {
  UniverActionRecorderPlugin
} from "./chunk-K4I7PF22.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-SR6TNX6T.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-XBIQSZQI.js";
import {
  UniverUniscriptPlugin
} from "./chunk-XD7EHTTK.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-G54QK3CJ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-26ZSQVR6.js";
import "./chunk-VWNHHCGD.js";
import {
  UniverDebuggerPlugin
} from "./chunk-SQSPFSTT.js";
import "./chunk-KXR3WMW7.js";
import {
  UniverWatermarkPlugin
} from "./chunk-Y5I4ATMA.js";
import "./chunk-G6FMMQLI.js";
import "./chunk-CS6WKNAL.js";
import "./chunk-CXMPIKRB.js";
import "./chunk-7VZWZXCA.js";
import "./chunk-BL3GZ76K.js";
import "./chunk-AU447C6B.js";
import "./chunk-5LSMNLCB.js";
import "./chunk-YHX3PO7Y.js";
import "./chunk-JAO4FOGC.js";
import "./chunk-UPB44MDX.js";
import "./chunk-M6VABHCX.js";
import "./chunk-F6ZBKZEW.js";
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
