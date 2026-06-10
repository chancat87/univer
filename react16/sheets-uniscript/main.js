import {
  UniverUniscriptPlugin
} from "../chunk-ZJ537G3O.js";
import "../chunk-GMDX6E2J.js";
import "../chunk-A3DRKKMY.js";
import "../chunk-WLDOIN2T.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-4UKCHEAP.js";
import {
  UniverDebuggerPlugin
} from "../chunk-DSTDQO2A.js";
import "../chunk-AHEUMPVE.js";
import "../chunk-R6IISLB3.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-SDZBQQ4M.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-FEDSVBAQ.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO,
  loadDebuggerLocale
} from "../chunk-DMVEE645.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-XRVQCUPD.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-GPJNXDNJ.js";
import "../chunk-66S2PCKH.js";
import {
  zh_CN_default
} from "../chunk-Q2T25765.js";
import "../chunk-7J6TSD4B.js";
import "../chunk-OEYKKT7I.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-L2LRQXJ3.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-R53I7K3Y.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-5J4ZCI76.js";
import {
  Univer
} from "../chunk-33LYH36L.js";
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
    fabEntryUnitType: 2 /* UNIVER_SHEET */,
    localeLoader: loadDebuggerLocale,
    performanceMonitor: {
      enabled: false
    }
  });
}
univer.createUnit(2 /* UNIVER_SHEET */, UNISCRIT_WORKBOOK_DATA_DEMO);
window.univer = univer;
