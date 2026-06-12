import {
  UniverUniscriptPlugin
} from "../chunk-AHXLTGHY.js";
import "../chunk-GMDX6E2J.js";
import "../chunk-A3DRKKMY.js";
import "../chunk-WLDOIN2T.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-THJSAQC3.js";
import {
  UniverDebuggerPlugin
} from "../chunk-VEQFXLIO.js";
import "../chunk-EOQXJPS7.js";
import "../chunk-NUW5ZHXO.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-DYD3JD33.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-DYJ2U24P.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO,
  loadDebuggerLocale
} from "../chunk-VDFEGK7S.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-ZBWRYDUJ.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-FIGZ5VDW.js";
import "../chunk-BW43X265.js";
import {
  zh_CN_default
} from "../chunk-HBLKBZG3.js";
import "../chunk-GQQW6W3C.js";
import "../chunk-OEYKKT7I.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-JC4PXT54.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-2L3NWO5X.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-PPZWG4HX.js";
import {
  Univer
} from "../chunk-E3BE2WWO.js";
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
    fabEntryUnitType: 2 /* UNIVER_SHEET */,
    localeLoader: loadDebuggerLocale,
    performanceMonitor: {
      enabled: false
    }
  });
}
univer.createUnit(2 /* UNIVER_SHEET */, UNISCRIT_WORKBOOK_DATA_DEMO);
window.univer = univer;
