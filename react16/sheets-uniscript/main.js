import {
  UniverUniscriptPlugin
} from "../chunk-IBZP4AOP.js";
import "../chunk-R7EK2BG5.js";
import "../chunk-SQZXXC67.js";
import "../chunk-KV3ZS2HR.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-2LSXDUTJ.js";
import {
  UniverDebuggerPlugin
} from "../chunk-CGWN3G2E.js";
import "../chunk-SGTCUN67.js";
import {
  zh_CN_default
} from "../chunk-JB3QWVLM.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO,
  loadDebuggerLocale
} from "../chunk-SGZ2HHVL.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-NENHIOGR.js";
import "../chunk-4UBAF5MM.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-E76AX5ER.js";
import "../chunk-NYYGRMLU.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-MAD3JRBW.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-CK4XAVSA.js";
import "../chunk-LOQW54LO.js";
import "../chunk-BIOJ5KTK.js";
import "../chunk-QAY465GM.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-UBUTY46K.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-M3MJBN7C.js";
import {
  Univer,
  UniverRenderEnginePlugin
} from "../chunk-XMQDOTMR.js";
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
