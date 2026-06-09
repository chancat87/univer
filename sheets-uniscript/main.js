import {
  UniverUniscriptPlugin
} from "../chunk-OVPXRD5D.js";
import "../chunk-GMDX6E2J.js";
import "../chunk-A3DRKKMY.js";
import "../chunk-WLDOIN2T.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-BVNPNBXK.js";
import {
  UniverDebuggerPlugin
} from "../chunk-AUAJCE6Y.js";
import "../chunk-TL5J2JF3.js";
import "../chunk-HUKUPM6I.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-SB2KM3E7.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-DXBLSXJT.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-MG6S74S4.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-FADFDPJO.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-NCMWFBVU.js";
import "../chunk-BWPHDXYN.js";
import {
  zh_CN_default
} from "../chunk-AUM3TUEE.js";
import "../chunk-N6FCNQNY.js";
import "../chunk-75OJL7X3.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-C5ZDEYK2.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-G5QND7UH.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-F2DPNTXI.js";
import {
  Univer
} from "../chunk-6UZK77F2.js";
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
