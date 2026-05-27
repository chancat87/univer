import {
  UniverUniscriptPlugin
} from "../chunk-I3B3CJZS.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-VNSWFS4U.js";
import "../chunk-6Y42HTA3.js";
import "../chunk-Y65XFGY6.js";
import "../chunk-3PLDZ4VH.js";
import "../chunk-BN223HPL.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-ZC6DIDIH.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-DXLJTXCB.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-6DOBQSM7.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-A6FOZVPY.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-H7EOKAK7.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-YI67N2NN.js";
import {
  zh_CN_default
} from "../chunk-XDJIWBQR.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-OXQW5F2S.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-GMC4FNZY.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-6BJ26NAD.js";
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
