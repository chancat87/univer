import {
  UniverActionRecorderPlugin
} from "./chunk-7BY5INTR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-PRDF3NRF.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-MAGPPOI3.js";
import {
  UniverUniscriptPlugin
} from "./chunk-HUMHEW6K.js";
import "./chunk-GMDX6E2J.js";
import "./chunk-A3DRKKMY.js";
import "./chunk-WLDOIN2T.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-2XZP4YRV.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-MIV2CD7X.js";
import "./chunk-GLH5V5RZ.js";
import {
  UniverDebuggerPlugin
} from "./chunk-A4HA3ZOT.js";
import {
  UniverWatermarkPlugin
} from "./chunk-EOQXJPS7.js";
import "./chunk-MWVVGLEV.js";
import "./chunk-FUD4ZQUE.js";
import "./chunk-467D3BKM.js";
import {
  loadDebuggerLocale
} from "./chunk-AZVYFSXE.js";
import "./chunk-WC3WXPWM.js";
import "./chunk-NZHRBDP3.js";
import "./chunk-BW43X265.js";
import "./chunk-UKZXZXOR.js";
import "./chunk-JC4PXT54.js";
import "./chunk-2L3NWO5X.js";
import "./chunk-PPZWG4HX.js";
import "./chunk-E3BE2WWO.js";
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
