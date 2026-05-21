import {
  UniverUniscriptPlugin
} from "../chunk-ZRHRMZNN.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-A3OUVHOZ.js";
import "../chunk-KP5O7VEP.js";
import "../chunk-23AVRTHF.js";
import "../chunk-F5OC5IPX.js";
import "../chunk-NVB4KPF5.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-ZVOVYGIA.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-CUGZH6GC.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-LL4GZLYH.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-XVNIPRWP.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-OOIWN6DP.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-WMC5D3J2.js";
import {
  zh_CN_default
} from "../chunk-KRK2OEW6.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-TO4WQNEE.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-RJPALBRL.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-RK6SZT5J.js";
import {
  Univer
} from "../chunk-EJHY6CWE.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-24OICD5T.js";

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
