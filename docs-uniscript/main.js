import {
  UniverUniscriptPlugin
} from "../chunk-V7ITBWUQ.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import "../chunk-SN33JSK4.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-AWDSMMM7.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-4VVRTWTJ.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-TMQGZNIJ.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-Z2IVZDG5.js";
import {
  zh_CN_default
} from "../chunk-EHHZDUTR.js";
import "../chunk-JVAUVJXG.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-IJXT2JU6.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-DSDMX7LI.js";
import {
  Univer
} from "../chunk-63HVW4WP.js";
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
