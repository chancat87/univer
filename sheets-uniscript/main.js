import {
  UniverUniscriptPlugin
} from "../chunk-UX3DZBPQ.js";
import "../chunk-R7EK2BG5.js";
import "../chunk-SQZXXC67.js";
import "../chunk-KV3ZS2HR.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-W2NIYLCH.js";
import {
  UniverDebuggerPlugin
} from "../chunk-VDTYOTRX.js";
import "../chunk-SVIEONY5.js";
import "../chunk-6WKDVGJP.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-ZYLZ4AM5.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-LJQQEGH7.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO,
  loadDebuggerLocale
} from "../chunk-HENJB45Y.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-24DSUN32.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-R57BLDMF.js";
import "../chunk-ZO5MZRTT.js";
import {
  zh_CN_default
} from "../chunk-RWJVLWWK.js";
import "../chunk-GQQW6W3C.js";
import "../chunk-QAY465GM.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-GIASHSLF.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-TNPXDSFM.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-YFZT4CFH.js";
import {
  Univer
} from "../chunk-JAAZE2FX.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-HECJ2TYE.js";

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
    fabEntryUnitType: 2 /* UNIVER_SHEET */,
    localeLoader: loadDebuggerLocale,
    performanceMonitor: {
      enabled: false
    }
  });
}
univer.createUnit(2 /* UNIVER_SHEET */, UNISCRIT_WORKBOOK_DATA_DEMO);
window.univer = univer;
