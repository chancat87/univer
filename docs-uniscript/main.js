import {
  UniverUniscriptPlugin
} from "../chunk-3ALKPUNI.js";
import "../chunk-GMDX6E2J.js";
import "../chunk-A3DRKKMY.js";
import "../chunk-WLDOIN2T.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-BQLZUYLJ.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-EDGTKBGU.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-JIAIZJPX.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-T5KOPS7N.js";
import "../chunk-VH2IWGAA.js";
import {
  zh_CN_default
} from "../chunk-DGBRMZM3.js";
import "../chunk-GQQW6W3C.js";
import "../chunk-XGMSUR6J.js";
import "../chunk-5ED2IM6Z.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-RNEMECLQ.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-RQTPWJDA.js";
import {
  Univer
} from "../chunk-5NEQ5UIN.js";
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
