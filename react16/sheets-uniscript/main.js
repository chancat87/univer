import {
  UniverUniscriptPlugin
} from "../chunk-V7ITBWUQ.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-ET6TEFKU.js";
import "../chunk-EGNQIECW.js";
import "../chunk-FNIX4H3H.js";
import "../chunk-FXKLHA5Q.js";
import "../chunk-SN33JSK4.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-TCVUOFOB.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-6QX7AJ42.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-AWDSMMM7.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-4VVRTWTJ.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-TMQGZNIJ.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-Z2IVZDG5.js";
import {
  zh_CN_default
} from "../chunk-EHHZDUTR.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-JVAUVJXG.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-IJXT2JU6.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-DSDMX7LI.js";
import {
  Univer
} from "../chunk-63HVW4WP.js";
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
