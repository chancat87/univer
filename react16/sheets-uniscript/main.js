import {
  UniverUniscriptPlugin
} from "../chunk-7BOKOO3I.js";
import "../chunk-GMDX6E2J.js";
import "../chunk-A3DRKKMY.js";
import "../chunk-WLDOIN2T.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-A7DV5CLR.js";
import {
  UniverDebuggerPlugin
} from "../chunk-G5J2AE2K.js";
import "../chunk-KY62Z2HS.js";
import "../chunk-QSN5EZAZ.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-66FMYFLY.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-LFWH636K.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO,
  loadDebuggerLocale
} from "../chunk-RAQB7QKQ.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-XRVR2H52.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-GDSMKYWA.js";
import "../chunk-Z2NBOTBN.js";
import {
  zh_CN_default
} from "../chunk-ES66ZAH2.js";
import "../chunk-GQQW6W3C.js";
import "../chunk-XGMSUR6J.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-QYY2YWST.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-G66X4HVS.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-3Z2XPC36.js";
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
