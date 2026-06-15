import {
  UniverActionRecorderPlugin
} from "./chunk-SOPYGF52.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-XE6U3TON.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-3YKWZHK6.js";
import {
  UniverUniscriptPlugin
} from "./chunk-AQ7FTHKV.js";
import "./chunk-GMDX6E2J.js";
import "./chunk-A3DRKKMY.js";
import "./chunk-WLDOIN2T.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-F6RC22YX.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-N4HUPXGI.js";
import "./chunk-QNWRTIUQ.js";
import {
  UniverDebuggerPlugin
} from "./chunk-WIOQDFE6.js";
import {
  UniverWatermarkPlugin
} from "./chunk-IR4OGUQE.js";
import "./chunk-T4PRNKCT.js";
import "./chunk-DOPBWVR7.js";
import "./chunk-AXTASDKZ.js";
import {
  loadDebuggerLocale
} from "./chunk-DLXB6LWY.js";
import "./chunk-RBUEDVUD.js";
import "./chunk-TMJAJNJS.js";
import "./chunk-MNEZ7YZ7.js";
import "./chunk-GQPOENU2.js";
import "./chunk-HCSE775N.js";
import "./chunk-MCE2SNW7.js";
import "./chunk-GEJ7L5S2.js";
import "./chunk-BFI4GFBQ.js";
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
