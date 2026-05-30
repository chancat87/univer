import {
  UniverUniscriptPlugin
} from "../chunk-GL3PG6RT.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-KONYRXBO.js";
import "../chunk-IBF3NIDV.js";
import "../chunk-EW4PHSHV.js";
import "../chunk-SGEKE45M.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-Z2UEWB3U.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-LSSYQWMR.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-F4F2YYY6.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-NAN42NNV.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-QWPPYM36.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-A4ZIYGHQ.js";
import {
  zh_CN_default
} from "../chunk-KZ7IYLEF.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-B4NUTUQI.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-RBUELYHQ.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-UUV633F7.js";
import {
  Univer
} from "../chunk-5IFCPQIO.js";
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
