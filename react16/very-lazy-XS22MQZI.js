import {
  UniverActionRecorderPlugin
} from "./chunk-MI3HYRDS.js";
import {
  UniverUniscriptPlugin
} from "./chunk-XC2QE7E3.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-2UVVUJP2.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-2I3PBFW2.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-N4NLTOS5.js";
import {
  UniverDebuggerPlugin
} from "./chunk-HPYU5N3Z.js";
import {
  UniverWatermarkPlugin
} from "./chunk-55KTSYOY.js";
import "./chunk-E5Q63FI5.js";
import {
  loadDebuggerLocale
} from "./chunk-TAWGJECY.js";
import "./chunk-SZZUMBNL.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-DFI64RHC.js";
import "./chunk-Q2ISKF2I.js";
import "./chunk-5ARVCA6J.js";
import "./chunk-XDJQRT7P.js";
import "./chunk-QI2AEB5F.js";
import "./chunk-6JGXY3LE.js";
import "./chunk-RUBWMXYG.js";
import "./chunk-VDSGT5AZ.js";
import "./chunk-RLB6KXB7.js";
import "./chunk-E7KT3G3T.js";
import "./chunk-RJX7H74E.js";
import "./chunk-QSEVI5FA.js";
import "./chunk-TGSCZSOP.js";
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
