import {
  UniverActionRecorderPlugin
} from "./chunk-3LSAVMUG.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-O4D7XGM6.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-MPYJXTNU.js";
import {
  UniverUniscriptPlugin
} from "./chunk-WD2X2ZIE.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-7QLNEP4E.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-3L2IPCK4.js";
import "./chunk-KNXF6YPQ.js";
import {
  UniverDebuggerPlugin
} from "./chunk-ZNOOYKFP.js";
import {
  UniverWatermarkPlugin
} from "./chunk-KOMOXTJE.js";
import "./chunk-JL6L3JSD.js";
import "./chunk-SQ4FJZVL.js";
import "./chunk-ZNI6WOM4.js";
import {
  loadDebuggerLocale
} from "./chunk-FOKWLND3.js";
import "./chunk-PLVAV62H.js";
import "./chunk-IUZQOUIN.js";
import "./chunk-S5JPW7X3.js";
import "./chunk-GZTNYRSD.js";
import "./chunk-7K5RKTUX.js";
import "./chunk-X6PSTXJS.js";
import "./chunk-SXPNKO5K.js";
import "./chunk-SGLSU3TV.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

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
