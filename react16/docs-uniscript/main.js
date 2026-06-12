import {
  UniverUniscriptPlugin
} from "../chunk-AHXLTGHY.js";
import "../chunk-GMDX6E2J.js";
import "../chunk-A3DRKKMY.js";
import "../chunk-WLDOIN2T.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-DYJ2U24P.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
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
import "../chunk-JC4PXT54.js";
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

// src/docs-uniscript/main.ts
var univer = new Univer({
  locale: "zhCN" /* ZH_CN */,
  locales: {
    ["zhCN" /* ZH_CN */]: zh_CN_default
  },
  logLevel: 4 /* VERBOSE */
});
univer.registerPlugin(UniverRenderEnginePlugin);
univer.registerPlugin(UniverFormulaEnginePlugin);
univer.registerPlugin(UniverUIPlugin, {
  container: "app",
  ribbonType: "classic",
  footer: false
});
univer.registerPlugin(UniverDocsPlugin);
univer.registerPlugin(UniverDocsUIPlugin);
univer.registerPlugin(UniverSheetsPlugin);
univer.registerPlugin(UniverSheetsUIPlugin);
univer.registerPlugin(UniverUniscriptPlugin, {
  getWorkerUrl(moduleID, label) {
    if (label === "typescript" || label === "javascript") {
      return "/vs/language/typescript/ts.worker.js";
    }
    return "/vs/editor/editor.worker.js";
  }
});
univer.createUnit(1 /* UNIVER_DOC */, DEFAULT_DOCUMENT_DATA_CN);
window.univer = univer;
