import {
  UniverActionRecorderPlugin
} from "./chunk-ZNNIP7AY.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-TZ7W2UUX.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-PBSRHZ5M.js";
import {
  UniverUniscriptPlugin
} from "./chunk-DBVLCLMS.js";
import "./chunk-GMDX6E2J.js";
import "./chunk-A3DRKKMY.js";
import "./chunk-WLDOIN2T.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-5H5NYZSZ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-W24Q6SRN.js";
import "./chunk-3L6RR6B6.js";
import {
  UniverDebuggerPlugin
} from "./chunk-FYTTO2MQ.js";
import {
  UniverWatermarkPlugin
} from "./chunk-Y3NDNT34.js";
import "./chunk-NQKL7SKD.js";
import "./chunk-KVQ7WPET.js";
import "./chunk-US5ZXWDO.js";
import {
  loadDebuggerLocale
} from "./chunk-XNNBDH5V.js";
import "./chunk-YCKGGZSC.js";
import "./chunk-5GQ6JDMJ.js";
import "./chunk-66S2PCKH.js";
import "./chunk-GORRS47O.js";
import "./chunk-ELKFKEHS.js";
import "./chunk-75Z4XWR6.js";
import "./chunk-EXOHZCIQ.js";
import "./chunk-33LYH36L.js";
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
