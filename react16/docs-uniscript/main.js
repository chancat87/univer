import {
  UniverUniscriptPlugin
} from "../chunk-OB6S6RLH.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import "../chunk-BN223HPL.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-NXLBRPSM.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-OUPAFTZU.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-EGU5CICW.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-YI67N2NN.js";
import {
  zh_CN_default
} from "../chunk-XDJIWBQR.js";
import "../chunk-OXQW5F2S.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-GMC4FNZY.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-6BJ26NAD.js";
import {
  Univer
} from "../chunk-4JSWIADO.js";
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
