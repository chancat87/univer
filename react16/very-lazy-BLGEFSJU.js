import {
  UniverActionRecorderPlugin
} from "./chunk-YUN2OMM5.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-P57WPTMR.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-UQ5FJYOL.js";
import {
  UniverUniscriptPlugin
} from "./chunk-AXNV24T2.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-ABZQXU3S.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-NSKQPV6M.js";
import "./chunk-XOJIPTRL.js";
import {
  UniverDebuggerPlugin
} from "./chunk-WW62P4GF.js";
import {
  UniverWatermarkPlugin
} from "./chunk-RVZZGGZ7.js";
import "./chunk-5LA75ADK.js";
import "./chunk-NJAQLUVB.js";
import "./chunk-MA64BJZM.js";
import {
  loadDebuggerLocale
} from "./chunk-D66OSNCZ.js";
import "./chunk-YY5M73BR.js";
import "./chunk-VRCEW6HR.js";
import "./chunk-3KYX65TC.js";
import "./chunk-UHWK2B2L.js";
import "./chunk-2A7UPOAL.js";
import "./chunk-4ZVQCU3Y.js";
import "./chunk-ZABWMRUZ.js";
import "./chunk-2RCPMKBJ.js";
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
