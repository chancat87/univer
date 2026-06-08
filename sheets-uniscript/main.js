import {
  UniverUniscriptPlugin
} from "../chunk-TFZOF477.js";
import "../chunk-GMDX6E2J.js";
import "../chunk-A3DRKKMY.js";
import "../chunk-WLDOIN2T.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-BQILDS5J.js";
import {
  UniverDebuggerPlugin
} from "../chunk-7KZZSGMQ.js";
import "../chunk-PB7LXP3M.js";
import "../chunk-XLZJ3R5A.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-EHU5BXQO.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-Q3POQEIN.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-TC3IYX7U.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-2HMY3XBH.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-LWWM426T.js";
import "../chunk-ZVMLUOKL.js";
import {
  zh_CN_default
} from "../chunk-GAMVVSR7.js";
import "../chunk-N6FCNQNY.js";
import "../chunk-BCDUZYIJ.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-MLKZU577.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-CKHMSDDS.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-3TEOVAGW.js";
import {
  Univer
} from "../chunk-PRXL3D5H.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-DO7PIA5W.js";

// src/sheets-uniscript/main.ts
var IS_E2E = false;
var univer = new Univer({
  locale: "zhCN" /* ZH_CN */,
  locales: {
    ["zhCN" /* ZH_CN */]: zh_CN_default
  },
  logLevel: 4 /* VERBOSE */
});
univer.registerPlugin(UniverRenderEnginePlugin);
univer.registerPlugin(UniverUIPlugin, {
  container: "app",
  ribbonType: "classic"
});
univer.registerPlugin(UniverDocsPlugin);
univer.registerPlugin(UniverDocsUIPlugin);
univer.registerPlugin(UniverSheetsPlugin);
univer.registerPlugin(UniverSheetsUIPlugin);
univer.registerPlugin(UniverSheetsNumfmtPlugin);
univer.registerPlugin(UniverSheetsNumfmtUIPlugin);
univer.registerPlugin(UniverFormulaEnginePlugin);
univer.registerPlugin(UniverSheetsFormulaPlugin);
univer.registerPlugin(UniverUniscriptPlugin, {
  getWorkerUrl(_, label) {
    if (label === "typescript" || label === "javascript") {
      return "/vs/language/typescript/ts.worker.js";
    }
    return "/vs/editor/editor.worker.js";
  }
});
if (IS_E2E) {
  univer.registerPlugin(UniverDebuggerPlugin, {
    fab: false,
    performanceMonitor: {
      enabled: false
    }
  });
}
univer.createUnit(2 /* UNIVER_SHEET */, UNISCRIT_WORKBOOK_DATA_DEMO);
window.univer = univer;
