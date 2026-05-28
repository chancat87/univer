import {
  UniverUniscriptPlugin
} from "../chunk-OB6S6RLH.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-I5FID2DT.js";
import "../chunk-RNOBK53O.js";
import "../chunk-Y65XFGY6.js";
import "../chunk-42YUNXYN.js";
import "../chunk-BN223HPL.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-KEB4YN3W.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-DXLJTXCB.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-NXLBRPSM.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-OUPAFTZU.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-EGU5CICW.js";
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
