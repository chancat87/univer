import {
  UniverUniscriptPlugin
} from "../chunk-3SFYBOOB.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-VA4EB27I.js";
import "../chunk-IDAF5KQV.js";
import "../chunk-T5JVQ22K.js";
import "../chunk-LURNFXWC.js";
import "../chunk-OYR5WA5U.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-N3JJGLZC.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-H7C5TOBW.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-YSII74MQ.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-H7KEOQON.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-XFVBBIHA.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-PZXAACJY.js";
import {
  zh_CN_default
} from "../chunk-3YC7UB5I.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-LMTAFAGU.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-47V545ES.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-7PNPXMSO.js";
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
