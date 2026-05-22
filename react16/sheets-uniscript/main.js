import {
  UniverUniscriptPlugin
} from "../chunk-6K7APWAQ.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-HT6SHGO5.js";
import "../chunk-IF37WRIX.js";
import "../chunk-P3COAZ6H.js";
import "../chunk-SM5XGW6L.js";
import "../chunk-RRPQGQCJ.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-SRSJZRBD.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-FVDEHCGA.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-PQXBTX33.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-3MPN2FQO.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-UYLQVP27.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-RDPVWSGF.js";
import {
  zh_CN_default
} from "../chunk-BX66AN5H.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-CTBLWIU7.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-QLAYCCMO.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-ADPAOSVN.js";
import {
  Univer
} from "../chunk-P5OMPNXM.js";
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
