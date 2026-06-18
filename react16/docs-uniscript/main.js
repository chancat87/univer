import {
  UniverUniscriptPlugin
} from "../chunk-UX3DZBPQ.js";
import "../chunk-R7EK2BG5.js";
import "../chunk-SQZXXC67.js";
import "../chunk-KV3ZS2HR.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-LJQQEGH7.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-HENJB45Y.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-24DSUN32.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-R57BLDMF.js";
import "../chunk-ZO5MZRTT.js";
import {
  zh_CN_default
} from "../chunk-RWJVLWWK.js";
import "../chunk-GQQW6W3C.js";
import "../chunk-QAY465GM.js";
import "../chunk-GIASHSLF.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-TNPXDSFM.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-YFZT4CFH.js";
import {
  Univer
} from "../chunk-JAAZE2FX.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-HECJ2TYE.js";

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
