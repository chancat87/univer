import {
  UniverUniscriptPlugin
} from "../chunk-O6M5M5KQ.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-AXTUCZI5.js";
import "../chunk-LK5UAUCQ.js";
import "../chunk-7JCCGZU6.js";
import "../chunk-27L77ZCZ.js";
import "../chunk-G6LPYNFS.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-NRWUHTF4.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-OFJPX44K.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-4Y6P5EHT.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-A4CCBSLK.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-W7SYDXAF.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-WJW75ESZ.js";
import {
  zh_CN_default
} from "../chunk-ONLV7DQM.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-4HP7LWJV.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-2CYUCMRJ.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-24OJVLNM.js";
import {
  Univer
} from "../chunk-M4NHM7N2.js";
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
