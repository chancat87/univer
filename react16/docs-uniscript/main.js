import {
  UniverUniscriptPlugin
} from "../chunk-O6M5M5KQ.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import "../chunk-G6LPYNFS.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-4Y6P5EHT.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-A4CCBSLK.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-W7SYDXAF.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-WJW75ESZ.js";
import {
  zh_CN_default
} from "../chunk-ONLV7DQM.js";
import "../chunk-4HP7LWJV.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-2CYUCMRJ.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-24OJVLNM.js";
import {
  Univer
} from "../chunk-M4NHM7N2.js";
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
