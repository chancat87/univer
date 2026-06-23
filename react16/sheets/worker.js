import {
  zh_CN_default
} from "../chunk-JB3QWVLM.js";
import "../chunk-NYYGRMLU.js";
import {
  UniverSheetsFilterPlugin
} from "../chunk-UQYEOB6K.js";
import "../chunk-LOQW54LO.js";
import "../chunk-QAY465GM.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-UBUTY46K.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-M3MJBN7C.js";
import {
  Univer
} from "../chunk-XMQDOTMR.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-HECJ2TYE.js";

// src/sheets/worker.ts
var univer = new Univer({
  locale: "zhCN" /* ZH_CN */,
  logLevel: 4 /* VERBOSE */,
  locales: {
    ["zhCN" /* ZH_CN */]: zh_CN_default
  }
});
univer.registerPlugins([
  [UniverSheetsPlugin, { onlyRegisterFormulaRelatedMutations: true }],
  [UniverFormulaEnginePlugin],
  [UniverRPCWorkerThreadPlugin],
  [UniverRemoteSheetsFormulaPlugin],
  [UniverSheetsFilterPlugin]
]);
self.univer = univer;
