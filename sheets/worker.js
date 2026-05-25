import {
  UniverSheetsFilterPlugin
} from "../chunk-ND7OY7DY.js";
import {
  zh_CN_default
} from "../chunk-KE3NM2PC.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-U5XU3TS2.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-3IJ7FHN5.js";
import "../chunk-BGNMHP4X.js";
import {
  Univer
} from "../chunk-NFVAY4NN.js";
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
