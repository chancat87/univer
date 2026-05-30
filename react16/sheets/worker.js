import {
  UniverSheetsFilterPlugin
} from "../chunk-WSYXK7KQ.js";
import {
  zh_CN_default
} from "../chunk-P3SQLU4X.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-43TF6VLP.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-VTOJ6EY3.js";
import "../chunk-MQVOOHA3.js";
import {
  Univer
} from "../chunk-66WYSUE4.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-24OICD5T.js";

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
