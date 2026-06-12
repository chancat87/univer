import {
  UniverUniscriptPlugin
} from "../chunk-WZBQM56A.js";
import "../chunk-GMDX6E2J.js";
import "../chunk-A3DRKKMY.js";
import "../chunk-WLDOIN2T.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-OOPA6QIW.js";
import {
  UniverDebuggerPlugin
} from "../chunk-B5ZKID2M.js";
import "../chunk-L7E5LAEI.js";
import "../chunk-LBZ4BWUL.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-DOH7OYW4.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-6V7MZKRN.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO,
  loadDebuggerLocale
} from "../chunk-ZKICHKAT.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-NNJ2PAFS.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-DFLNXVRZ.js";
import "../chunk-Z2NBOTBN.js";
import {
  zh_CN_default
} from "../chunk-ES66ZAH2.js";
import "../chunk-GQQW6W3C.js";
import "../chunk-XGMSUR6J.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-6FFDUATW.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-CXZNL3JJ.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-XFPFZZHP.js";
import {
  Univer
} from "../chunk-EGKTDU4O.js";
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
