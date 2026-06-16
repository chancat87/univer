import {
  UniverUniscriptPlugin
} from "../chunk-WD2X2ZIE.js";
import "../chunk-R7EK2BG5.js";
import "../chunk-SQZXXC67.js";
import "../chunk-KV3ZS2HR.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-ZNI6WOM4.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-FOKWLND3.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-PLVAV62H.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-IUZQOUIN.js";
import "../chunk-S5JPW7X3.js";
import {
  zh_CN_default
} from "../chunk-X5C3K64X.js";
import "../chunk-GQQW6W3C.js";
import "../chunk-QAY465GM.js";
import "../chunk-7K5RKTUX.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-X6PSTXJS.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-SXPNKO5K.js";
import {
  Univer
} from "../chunk-SGLSU3TV.js";
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
