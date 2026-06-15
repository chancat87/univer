import {
  UniverUniscriptPlugin
} from "../chunk-HOWDLPMD.js";
import "../chunk-GMDX6E2J.js";
import "../chunk-A3DRKKMY.js";
import "../chunk-WLDOIN2T.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-SH32ZBX3.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-3MVPNDQV.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-CQ4VYZJ4.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-YZ63L5OB.js";
import "../chunk-MNEZ7YZ7.js";
import {
  zh_CN_default
} from "../chunk-LYLK2WC5.js";
import "../chunk-GQQW6W3C.js";
import "../chunk-QAY465GM.js";
import "../chunk-HCSE775N.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-MCE2SNW7.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-GEJ7L5S2.js";
import {
  Univer
} from "../chunk-BFI4GFBQ.js";
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
