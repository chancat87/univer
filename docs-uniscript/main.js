import {
  UniverUniscriptPlugin
} from "../chunk-5BS7RPCM.js";
import "../chunk-GMDX6E2J.js";
import "../chunk-A3DRKKMY.js";
import "../chunk-WLDOIN2T.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-3B6IQAI6.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-3MNABGKM.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-6CUJERGO.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-UELYZQA7.js";
import "../chunk-66S2PCKH.js";
import {
  zh_CN_default
} from "../chunk-Q2T25765.js";
import "../chunk-7J6TSD4B.js";
import "../chunk-OEYKKT7I.js";
import "../chunk-ELKFKEHS.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-75Z4XWR6.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-EXOHZCIQ.js";
import {
  Univer
} from "../chunk-33LYH36L.js";
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
