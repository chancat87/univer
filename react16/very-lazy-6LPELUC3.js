import {
  UniverActionRecorderPlugin
} from "./chunk-4QWTN6ML.js";
import {
  UniverUniscriptPlugin
} from "./chunk-AHO34ACK.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-LJ7JNWRB.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-KYDBL4JQ.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-RJPPWJ2M.js";
import {
  UniverDebuggerPlugin
} from "./chunk-NW3VKNET.js";
import {
  UniverWatermarkPlugin
} from "./chunk-GLGKMDO5.js";
import "./chunk-HSSNOAWJ.js";
import {
  loadDebuggerLocale
} from "./chunk-AE7SMOJJ.js";
import "./chunk-LQWFYSIS.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-55PVUM4T.js";
import "./chunk-NJ4A6MU4.js";
import "./chunk-4NPMPVHI.js";
import "./chunk-D6M66X3V.js";
import "./chunk-WZIS5H2B.js";
import "./chunk-6RUFGJLY.js";
import "./chunk-3QW3A2DW.js";
import "./chunk-RVRSM6WU.js";
import "./chunk-SZGQ3BB2.js";
import "./chunk-UU5HAGBO.js";
import "./chunk-3WNTGTNW.js";
import "./chunk-HHTIJANW.js";
import "./chunk-TSO7IYVY.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

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
    plugins.push([UniverDebuggerPlugin, {
      fabEntryUnitType: 2 /* UNIVER_SHEET */,
      localeLoader: loadDebuggerLocale
    }]);
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
