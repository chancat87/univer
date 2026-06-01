import {
  UniverUniscriptPlugin
} from "../chunk-F22H6SZT.js";
import "../chunk-GMDX6E2J.js";
import "../chunk-A3DRKKMY.js";
import "../chunk-WLDOIN2T.js";
import "../chunk-6HEPUY3H.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-CEZ3ASA2.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-6AIOLZKF.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-UUF7XU7O.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-ECONR6RM.js";
import {
  zh_CN_default
} from "../chunk-A44DDVT2.js";
import "../chunk-TVPZ3PEL.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-CZ2PTCAX.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-ZBHWPOF6.js";
import {
  Univer
} from "../chunk-IDTDYMR7.js";
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
