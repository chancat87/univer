import {
  UniverUniscriptPlugin
} from "../chunk-RY2YDI6L.js";
import "../chunk-GMDX6E2J.js";
import "../chunk-A3DRKKMY.js";
import "../chunk-WLDOIN2T.js";
import {
  UniverDebuggerPlugin
} from "../chunk-DEX2JR7Q.js";
import "../chunk-F5TH2PYB.js";
import "../chunk-3KJG4PU2.js";
import "../chunk-WRJQEQ2C.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-AZG4ZEAG.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-UV7DXJBX.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-MQNP6LR7.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-ILEUWP3Q.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-2LXZR2FM.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-DAWPB5V5.js";
import {
  zh_CN_default
} from "../chunk-54EMUKNB.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-SLOSFHLK.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-NREJXSOV.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-EOKJYDPY.js";
import {
  Univer
} from "../chunk-4NZDNFUF.js";
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
