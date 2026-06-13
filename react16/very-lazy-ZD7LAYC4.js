import {
  UniverActionRecorderPlugin
} from "./chunk-LVHN4FXJ.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-46LLD2PN.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-ASVVRU36.js";
import {
  UniverUniscriptPlugin
} from "./chunk-3ALKPUNI.js";
import "./chunk-GMDX6E2J.js";
import "./chunk-A3DRKKMY.js";
import "./chunk-WLDOIN2T.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-5BOQT4C3.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-LH5VHNMD.js";
import "./chunk-MNBQ3BDD.js";
import {
  UniverDebuggerPlugin
} from "./chunk-TPDZQETI.js";
import {
  UniverWatermarkPlugin
} from "./chunk-QL42RB2Y.js";
import "./chunk-53QU7367.js";
import "./chunk-HXWU3PV3.js";
import "./chunk-BQLZUYLJ.js";
import {
  loadDebuggerLocale
} from "./chunk-EDGTKBGU.js";
import "./chunk-JIAIZJPX.js";
import "./chunk-T5KOPS7N.js";
import "./chunk-VH2IWGAA.js";
import "./chunk-V5FG6ZLV.js";
import "./chunk-5ED2IM6Z.js";
import "./chunk-RNEMECLQ.js";
import "./chunk-RQTPWJDA.js";
import "./chunk-5NEQ5UIN.js";
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
