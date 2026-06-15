import {
  UniverActionRecorderPlugin
} from "./chunk-YWK3YRK6.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-BJWRQTDS.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-2XTSFVUZ.js";
import {
  UniverUniscriptPlugin
} from "./chunk-CSJMELQT.js";
import "./chunk-GMDX6E2J.js";
import "./chunk-A3DRKKMY.js";
import "./chunk-WLDOIN2T.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-Z7EIRFYW.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-JQXTRPVP.js";
import "./chunk-MNBQ3BDD.js";
import {
  UniverDebuggerPlugin
} from "./chunk-UOZSPQ4O.js";
import {
  UniverWatermarkPlugin
} from "./chunk-QL42RB2Y.js";
import "./chunk-IHX7OEFL.js";
import "./chunk-SV4UHXXJ.js";
import "./chunk-WMR2C3XU.js";
import {
  loadDebuggerLocale
} from "./chunk-ZK353H7U.js";
import "./chunk-X2CHE2KP.js";
import "./chunk-VEIZZIWA.js";
import "./chunk-VH2IWGAA.js";
import "./chunk-V5FG6ZLV.js";
import "./chunk-KBL3NUOK.js";
import "./chunk-RNEMECLQ.js";
import "./chunk-RQTPWJDA.js";
import "./chunk-5NEQ5UIN.js";
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
