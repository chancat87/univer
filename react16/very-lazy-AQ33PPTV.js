import {
  UniverActionRecorderPlugin
} from "./chunk-HHCEPTAP.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-I36KMSN4.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-J32HOZKA.js";
import {
  UniverUniscriptPlugin
} from "./chunk-5BS7RPCM.js";
import "./chunk-GMDX6E2J.js";
import "./chunk-A3DRKKMY.js";
import "./chunk-WLDOIN2T.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-B5SGGHOT.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-K3R62NYQ.js";
import "./chunk-3L6RR6B6.js";
import {
  UniverDebuggerPlugin
} from "./chunk-CSRV36FX.js";
import {
  UniverWatermarkPlugin
} from "./chunk-Y3NDNT34.js";
import "./chunk-F5CDAC6W.js";
import "./chunk-LV5V6Y6W.js";
import "./chunk-3B6IQAI6.js";
import {
  loadDebuggerLocale
} from "./chunk-3MNABGKM.js";
import "./chunk-6CUJERGO.js";
import "./chunk-UELYZQA7.js";
import "./chunk-66S2PCKH.js";
import "./chunk-GORRS47O.js";
import "./chunk-ELKFKEHS.js";
import "./chunk-75Z4XWR6.js";
import "./chunk-EXOHZCIQ.js";
import "./chunk-33LYH36L.js";
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
