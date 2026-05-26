import {
  UniverActionRecorderPlugin
} from "./chunk-LBVV2PZ5.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-ID2Q6ELV.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-7LYZL2M2.js";
import {
  UniverUniscriptPlugin
} from "./chunk-HJ3CN7W2.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-WZUBY43N.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-TUJ3YF6C.js";
import "./chunk-VWNHHCGD.js";
import {
  UniverDebuggerPlugin
} from "./chunk-AOFJNCC6.js";
import "./chunk-FZOR35AP.js";
import {
  UniverWatermarkPlugin
} from "./chunk-Y5I4ATMA.js";
import "./chunk-UIX6URAS.js";
import "./chunk-CS6WKNAL.js";
import "./chunk-CXMPIKRB.js";
import "./chunk-6FHKAI2Z.js";
import "./chunk-PQNRBMEV.js";
import "./chunk-TT4X57OA.js";
import "./chunk-UNXLYMKH.js";
import "./chunk-6XPX7EDB.js";
import "./chunk-JAO4FOGC.js";
import "./chunk-UPB44MDX.js";
import "./chunk-M6VABHCX.js";
import "./chunk-F6ZBKZEW.js";
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
