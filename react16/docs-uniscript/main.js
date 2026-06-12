import {
  UniverUniscriptPlugin
} from "../chunk-WZBQM56A.js";
import "../chunk-GMDX6E2J.js";
import "../chunk-A3DRKKMY.js";
import "../chunk-WLDOIN2T.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-6V7MZKRN.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-ZKICHKAT.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-NNJ2PAFS.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-DFLNXVRZ.js";
import "../chunk-Z2NBOTBN.js";
import {
  zh_CN_default
} from "../chunk-ES66ZAH2.js";
import "../chunk-GQQW6W3C.js";
import "../chunk-XGMSUR6J.js";
import "../chunk-6FFDUATW.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-CXZNL3JJ.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-XFPFZZHP.js";
import {
  Univer
} from "../chunk-EGKTDU4O.js";
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
