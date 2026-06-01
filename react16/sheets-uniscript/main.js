import {
  UniverUniscriptPlugin
} from "../chunk-F22H6SZT.js";
import "../chunk-GMDX6E2J.js";
import "../chunk-A3DRKKMY.js";
import "../chunk-WLDOIN2T.js";
import {
  UniverDebuggerPlugin
} from "../chunk-6OPR354K.js";
import "../chunk-JDROPMWD.js";
import "../chunk-HD67YVN4.js";
import "../chunk-6HEPUY3H.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-4WLNR2DM.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-4UT46N5G.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-CEZ3ASA2.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-6AIOLZKF.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-UUF7XU7O.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-ECONR6RM.js";
import {
  zh_CN_default
} from "../chunk-A44DDVT2.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-TVPZ3PEL.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-CZ2PTCAX.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-ZBHWPOF6.js";
import {
  Univer
} from "../chunk-IDTDYMR7.js";
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
