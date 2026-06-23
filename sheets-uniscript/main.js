import {
  UniverUniscriptPlugin
} from "../chunk-B4J3OIYU.js";
import "../chunk-R7EK2BG5.js";
import "../chunk-SQZXXC67.js";
import "../chunk-KV3ZS2HR.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-X6PXPP7H.js";
import {
  UniverDebuggerPlugin
} from "../chunk-R5XRBY6Q.js";
import "../chunk-55KTSYOY.js";
import {
  zh_CN_default
} from "../chunk-LMLFG63V.js";
import "../chunk-Z6RFDDDF.js";
import "../chunk-DBRQB4K6.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO,
  loadDebuggerLocale
} from "../chunk-QS4AC7ZJ.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-GE3T6SEC.js";
import "../chunk-CGXH6VRT.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-OC22TYMG.js";
import "../chunk-IMWY7PB3.js";
import "../chunk-OT2HLRQE.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-L6Q3TYX6.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-VDSGT5AZ.js";
import "../chunk-LOQW54LO.js";
import "../chunk-E7KT3G3T.js";
import "../chunk-2236G4QD.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-RJX7H74E.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-QSEVI5FA.js";
import {
  Univer,
  UniverRenderEnginePlugin
} from "../chunk-TGSCZSOP.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-HECJ2TYE.js";

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
