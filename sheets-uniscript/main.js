import {
  UniverUniscriptPlugin
} from "../chunk-AHO34ACK.js";
import "../chunk-R7EK2BG5.js";
import "../chunk-SQZXXC67.js";
import "../chunk-KV3ZS2HR.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-GEZVA24X.js";
import {
  UniverDebuggerPlugin
} from "../chunk-CYWUGFYC.js";
import "../chunk-GLGKMDO5.js";
import {
  zh_CN_default
} from "../chunk-5NAVWEQE.js";
import "../chunk-HSSNOAWJ.js";
import "../chunk-EDYVLQ5J.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO,
  loadDebuggerLocale
} from "../chunk-AE7SMOJJ.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-YR5UNHC6.js";
import "../chunk-D6M66X3V.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-WZIS5H2B.js";
import "../chunk-IMWY7PB3.js";
import "../chunk-6RUFGJLY.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-3QW3A2DW.js";
import "../chunk-WRDP6BX6.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-RVRSM6WU.js";
import "../chunk-LOQW54LO.js";
import "../chunk-UU5HAGBO.js";
import "../chunk-QAY465GM.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-3WNTGTNW.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-HHTIJANW.js";
import {
  Univer,
  UniverRenderEnginePlugin
} from "../chunk-TSO7IYVY.js";
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
