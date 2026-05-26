import {
  UniverUniscriptPlugin
} from "../chunk-HJ3CN7W2.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-YQZSFLRF.js";
import "../chunk-FZOR35AP.js";
import "../chunk-Y5I4ATMA.js";
import "../chunk-UIX6URAS.js";
import "../chunk-CS6WKNAL.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-MDVOPTZS.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-2JMGWK5Q.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-PQNRBMEV.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-TT4X57OA.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-UNXLYMKH.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-6XPX7EDB.js";
import {
  zh_CN_default
} from "../chunk-4QRQ4FBX.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-JAO4FOGC.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-UPB44MDX.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-M6VABHCX.js";
import {
  Univer
} from "../chunk-F6ZBKZEW.js";
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
