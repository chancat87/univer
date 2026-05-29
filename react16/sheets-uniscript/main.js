import {
  UniverUniscriptPlugin
} from "../chunk-I5BSZ6IS.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-7R7PNAC5.js";
import "../chunk-XCM62BFC.js";
import "../chunk-NSVXQDDU.js";
import "../chunk-IXUS3LQ4.js";
import "../chunk-OYR5WA5U.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-QB4VZAAW.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-CMSWCGWC.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-7L5UOFRB.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-C33RTXUS.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-JPCPMZLQ.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-FVB32MRB.js";
import {
  zh_CN_default
} from "../chunk-XDJIWBQR.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-IV6OFMXB.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-IPFNFSLG.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-MM44YIF4.js";
import {
  Univer
} from "../chunk-4JSWIADO.js";
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
