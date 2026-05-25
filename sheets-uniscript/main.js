import {
  UniverUniscriptPlugin
} from "../chunk-XD7EHTTK.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-MNOMS65N.js";
import "../chunk-KXR3WMW7.js";
import "../chunk-Y5I4ATMA.js";
import "../chunk-G6FMMQLI.js";
import "../chunk-CS6WKNAL.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-IKRP2NMR.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-2JMGWK5Q.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-BL3GZ76K.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-AU447C6B.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-5LSMNLCB.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-YHX3PO7Y.js";
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
