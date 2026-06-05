import {
  UniverUniscriptPlugin
} from "../chunk-BGPPLR6F.js";
import "../chunk-GMDX6E2J.js";
import "../chunk-A3DRKKMY.js";
import "../chunk-WLDOIN2T.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-UQNXFSKV.js";
import {
  UniverDebuggerPlugin
} from "../chunk-LO6WZQRG.js";
import "../chunk-PS54CEWU.js";
import "../chunk-LUJIK2CK.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-436BBS67.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-FNXED5ID.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-55MM7D42.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-7GAOXSGD.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-MIJJ7SGO.js";
import "../chunk-SDBIGTWI.js";
import {
  zh_CN_default
} from "../chunk-WRHF3QRJ.js";
import "../chunk-SXJLR43W.js";
import "../chunk-BCDUZYIJ.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-G4MAVNYM.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-KIV2V2IY.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-3VI6RKZ6.js";
import {
  Univer
} from "../chunk-CLNOWGEJ.js";
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
