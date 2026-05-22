import {
  UniverSheetsFilterPlugin
} from "../chunk-BSAX7R4H.js";
import {
  zh_CN_default
} from "../chunk-BX66AN5H.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-CTBLWIU7.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-QLAYCCMO.js";
import "../chunk-ADPAOSVN.js";
import {
  Univer
} from "../chunk-P5OMPNXM.js";
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
