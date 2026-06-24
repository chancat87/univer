import {
  UniverActionRecorderPlugin
} from "./chunk-Z4SAMMIO.js";
import {
  UniverUniscriptPlugin
} from "./chunk-JTEEAAYG.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-74K6P2VM.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-GGDLQAEY.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-DWYPAMGU.js";
import {
  UniverDebuggerPlugin
} from "./chunk-W7ZLQILC.js";
import {
  UniverWatermarkPlugin
} from "./chunk-55KTSYOY.js";
import "./chunk-6W6POYI3.js";
import {
  loadDebuggerLocale
} from "./chunk-MOA4TU26.js";
import "./chunk-KTRTSCSV.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-UIRI6LIF.js";
import "./chunk-Q2ISKF2I.js";
import "./chunk-V52LKIHX.js";
import "./chunk-ENDVM62Q.js";
import "./chunk-TIX3PPGF.js";
import "./chunk-N6CKGHHZ.js";
import "./chunk-URO7IPH2.js";
import "./chunk-5LNBNADJ.js";
import "./chunk-RLB6KXB7.js";
import "./chunk-E7KT3G3T.js";
import "./chunk-GBCPMXX7.js";
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
