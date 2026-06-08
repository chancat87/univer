import {
  UniverUniscriptPlugin
} from "../chunk-3OUNNQM7.js";
import "../chunk-GMDX6E2J.js";
import "../chunk-A3DRKKMY.js";
import "../chunk-WLDOIN2T.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-P7PYTPQ3.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-TBYHE7ZI.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-2CZ5W5IK.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-CBDIEJPE.js";
import "../chunk-NXFO7ESC.js";
import {
  zh_CN_default
} from "../chunk-UXIY4DXQ.js";
import "../chunk-N6FCNQNY.js";
import "../chunk-BCDUZYIJ.js";
import "../chunk-PRLSOEOE.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-367XZEO6.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-NHNIOZYL.js";
import {
  Univer
} from "../chunk-JNYF3CQV.js";
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
