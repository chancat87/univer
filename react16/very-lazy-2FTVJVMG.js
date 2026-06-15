import {
  UniverActionRecorderPlugin
} from "./chunk-OAM3TA5M.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-Q5WXWF7R.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-L3SAXYC2.js";
import {
  UniverUniscriptPlugin
} from "./chunk-HOWDLPMD.js";
import "./chunk-GMDX6E2J.js";
import "./chunk-A3DRKKMY.js";
import "./chunk-WLDOIN2T.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-LUMNREZG.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-OFVP6NUR.js";
import "./chunk-QNWRTIUQ.js";
import {
  UniverDebuggerPlugin
} from "./chunk-JRR7MGJJ.js";
import {
  UniverWatermarkPlugin
} from "./chunk-IR4OGUQE.js";
import "./chunk-KPCYPN2H.js";
import "./chunk-4GLZFMTJ.js";
import "./chunk-SH32ZBX3.js";
import {
  loadDebuggerLocale
} from "./chunk-3MVPNDQV.js";
import "./chunk-CQ4VYZJ4.js";
import "./chunk-YZ63L5OB.js";
import "./chunk-MNEZ7YZ7.js";
import "./chunk-GQPOENU2.js";
import "./chunk-HCSE775N.js";
import "./chunk-MCE2SNW7.js";
import "./chunk-GEJ7L5S2.js";
import "./chunk-BFI4GFBQ.js";
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
