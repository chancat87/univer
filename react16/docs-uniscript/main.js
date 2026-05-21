import {
  UniverUniscriptPlugin
} from "../chunk-ZRHRMZNN.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import "../chunk-NVB4KPF5.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-LL4GZLYH.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-XVNIPRWP.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-OOIWN6DP.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-WMC5D3J2.js";
import {
  zh_CN_default
} from "../chunk-KRK2OEW6.js";
import "../chunk-TO4WQNEE.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-RJPALBRL.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-RK6SZT5J.js";
import {
  Univer
} from "../chunk-EJHY6CWE.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-24OICD5T.js";

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
