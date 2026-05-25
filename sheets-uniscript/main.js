import {
  UniverUniscriptPlugin
} from "../chunk-B7EQCCG6.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-QX7GU77A.js";
import "../chunk-35Z3KEZ2.js";
import "../chunk-JUPXKG6C.js";
import "../chunk-B5TCZM56.js";
import "../chunk-UB4LXMSQ.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-YFKZI4LP.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-XKZYCRHT.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-7R4I4WTW.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-SOZX7552.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-B2APTGFC.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-4QKNKDTI.js";
import {
  zh_CN_default
} from "../chunk-KE3NM2PC.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-U5XU3TS2.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-3IJ7FHN5.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-BGNMHP4X.js";
import {
  Univer
} from "../chunk-NFVAY4NN.js";
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
