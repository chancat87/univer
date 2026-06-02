import {
  UniverUniscriptPlugin
} from "../chunk-RY2YDI6L.js";
import "../chunk-GMDX6E2J.js";
import "../chunk-A3DRKKMY.js";
import "../chunk-WLDOIN2T.js";
import "../chunk-WRJQEQ2C.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-MQNP6LR7.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-ILEUWP3Q.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-2LXZR2FM.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-DAWPB5V5.js";
import {
  zh_CN_default
} from "../chunk-54EMUKNB.js";
import "../chunk-SLOSFHLK.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-NREJXSOV.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-EOKJYDPY.js";
import {
  Univer
} from "../chunk-4NZDNFUF.js";
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
