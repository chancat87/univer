import {
  UniverActionRecorderPlugin
} from "./chunk-RCUACIJP.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-DOKHUB7O.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-HS7MB7LP.js";
import {
  UniverUniscriptPlugin
} from "./chunk-GMQWLDCD.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-UADPVCSK.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-M7N3RPKA.js";
import "./chunk-3B72GOSY.js";
import {
  UniverDebuggerPlugin
} from "./chunk-YKKP4WIO.js";
import {
  UniverWatermarkPlugin
} from "./chunk-R2E34KCA.js";
import "./chunk-XUEKLQVJ.js";
import "./chunk-VNOZ73SZ.js";
import "./chunk-L6PTLA7O.js";
import {
  loadDebuggerLocale
} from "./chunk-Y26DBFT2.js";
import "./chunk-5KHTBPHV.js";
import "./chunk-LOHY7AAA.js";
import "./chunk-TKKSW2K4.js";
import "./chunk-MCLGDLLQ.js";
import "./chunk-BIZC7Y24.js";
import "./chunk-HAF7HUA6.js";
import "./chunk-CCEXUECC.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

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
