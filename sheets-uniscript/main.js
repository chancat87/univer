import {
  UniverUniscriptPlugin
} from "../chunk-CGJKII7R.js";
import "../chunk-GMDX6E2J.js";
import "../chunk-A3DRKKMY.js";
import "../chunk-WLDOIN2T.js";
import {
  UniverDebuggerPlugin
} from "../chunk-JC6LBWAN.js";
import "../chunk-KRLVTFWF.js";
import "../chunk-4AJ4MWUE.js";
import "../chunk-RLUVYJAF.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-X657PBFB.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-DLJ2RGKD.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-ZDMNMDFO.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-RBMMCNIT.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-XAKD2XHU.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-3LZR7CGZ.js";
import {
  zh_CN_default
} from "../chunk-RZBLMCIY.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-4CN32JQX.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-H7GNFIRV.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-NQ5GCUBK.js";
import {
  Univer
} from "../chunk-IFI2CVGR.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-DO7PIA5W.js";

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
