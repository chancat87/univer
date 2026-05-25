import {
  UniverUniscriptPlugin
} from "../chunk-XD7EHTTK.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import "../chunk-CS6WKNAL.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-BL3GZ76K.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-AU447C6B.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-5LSMNLCB.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-YHX3PO7Y.js";
import {
  zh_CN_default
} from "../chunk-4QRQ4FBX.js";
import "../chunk-JAO4FOGC.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-UPB44MDX.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-M6VABHCX.js";
import {
  Univer
} from "../chunk-F6ZBKZEW.js";
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
