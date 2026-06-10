import {
  UniverUniscriptPlugin
} from "../chunk-JKJ56WNR.js";
import "../chunk-GMDX6E2J.js";
import "../chunk-A3DRKKMY.js";
import "../chunk-WLDOIN2T.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-H3GZX55A.js";
import {
  UniverDebuggerPlugin
} from "../chunk-PCQ6EKMJ.js";
import "../chunk-D43JDEGE.js";
import "../chunk-42INSGKJ.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-BAPKBPUE.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-MPJI6OR4.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO,
  loadDebuggerLocale
} from "../chunk-7BNND2YP.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-UF57BQM6.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-NCH7R6DO.js";
import "../chunk-66S2PCKH.js";
import {
  zh_CN_default
} from "../chunk-LZVISBJK.js";
import "../chunk-7J6TSD4B.js";
import "../chunk-75OJL7X3.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-EWNZ5QNE.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-4S5OHSTW.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-Z4Z3C7ZE.js";
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
