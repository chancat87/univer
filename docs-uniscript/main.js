import {
  UniverUniscriptPlugin
} from "../chunk-TFZOF477.js";
import "../chunk-GMDX6E2J.js";
import "../chunk-A3DRKKMY.js";
import "../chunk-WLDOIN2T.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-Q3POQEIN.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-TC3IYX7U.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-2HMY3XBH.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-LWWM426T.js";
import "../chunk-ZVMLUOKL.js";
import {
  zh_CN_default
} from "../chunk-GAMVVSR7.js";
import "../chunk-N6FCNQNY.js";
import "../chunk-BCDUZYIJ.js";
import "../chunk-MLKZU577.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-CKHMSDDS.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-3TEOVAGW.js";
import {
  Univer
} from "../chunk-PRXL3D5H.js";
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
