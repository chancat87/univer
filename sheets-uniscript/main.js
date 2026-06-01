import {
  UniverUniscriptPlugin
} from "../chunk-7P5N5DGX.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-ABQENYII.js";
import "../chunk-ZBOT6NRA.js";
import "../chunk-UVKI3FK3.js";
import "../chunk-SGEKE45M.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-QXEOGEXF.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-V7Q4UDXK.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-NEC7X7OM.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-TBMDMLWP.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-V7TVWOVD.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-UZQSRV7M.js";
import {
  zh_CN_default
} from "../chunk-QZLZT5RN.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-TDDTJ2MZ.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-BWZ6GQIM.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-4ZR7A7BJ.js";
import {
  Univer
} from "../chunk-5IFCPQIO.js";
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
