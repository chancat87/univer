import {
  UniverSheetsFilterPlugin
} from "../chunk-Q33QYGSC.js";
import {
  zh_CN_default
} from "../chunk-XDJIWBQR.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-OXQW5F2S.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-GMC4FNZY.js";
import "../chunk-6BJ26NAD.js";
import {
  Univer
} from "../chunk-4JSWIADO.js";
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
