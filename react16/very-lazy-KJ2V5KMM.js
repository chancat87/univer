import {
  UniverActionRecorderPlugin
} from "./chunk-ZEAGWGK4.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-DWU35QD3.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-PN24X3V7.js";
import {
  UniverUniscriptPlugin
} from "./chunk-RY2YDI6L.js";
import "./chunk-GMDX6E2J.js";
import "./chunk-A3DRKKMY.js";
import "./chunk-WLDOIN2T.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-ABM2J7ZI.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-URRVLKUN.js";
import "./chunk-CZ57242M.js";
import {
  UniverDebuggerPlugin
} from "./chunk-DEX2JR7Q.js";
import {
  UniverWatermarkPlugin
} from "./chunk-F5TH2PYB.js";
import "./chunk-3KJG4PU2.js";
import "./chunk-WRJQEQ2C.js";
import "./chunk-6T2RW4GL.js";
import "./chunk-DLH4QXAQ.js";
import "./chunk-MQNP6LR7.js";
import "./chunk-ILEUWP3Q.js";
import "./chunk-2LXZR2FM.js";
import "./chunk-DAWPB5V5.js";
import "./chunk-SLOSFHLK.js";
import "./chunk-NREJXSOV.js";
import "./chunk-EOKJYDPY.js";
import "./chunk-4NZDNFUF.js";
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
