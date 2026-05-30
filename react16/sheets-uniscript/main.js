import {
  UniverUniscriptPlugin
} from "../chunk-U27J6WLD.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-TA4UQVXJ.js";
import "../chunk-4RE3GBNZ.js";
import "../chunk-562KIWQJ.js";
import "../chunk-4X74J3VY.js";
import "../chunk-PDE7V4JY.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-FWDGLNY4.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-CUS7IJC4.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-44O7LPIC.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-CQ6T5GVI.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-RXK56TCF.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-AUWBG7XV.js";
import {
  zh_CN_default
} from "../chunk-P3SQLU4X.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-43TF6VLP.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-VTOJ6EY3.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-MQVOOHA3.js";
import {
  Univer
} from "../chunk-66WYSUE4.js";
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
