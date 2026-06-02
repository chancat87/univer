import {
  UniverUniscriptPlugin
} from "../chunk-CGJKII7R.js";
import "../chunk-GMDX6E2J.js";
import "../chunk-A3DRKKMY.js";
import "../chunk-WLDOIN2T.js";
import "../chunk-RLUVYJAF.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-ZDMNMDFO.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-RBMMCNIT.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-XAKD2XHU.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-3LZR7CGZ.js";
import {
  zh_CN_default
} from "../chunk-RZBLMCIY.js";
import "../chunk-4CN32JQX.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-H7GNFIRV.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-NQ5GCUBK.js";
import {
  Univer
} from "../chunk-IFI2CVGR.js";
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
