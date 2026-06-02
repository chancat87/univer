import {
  UniverSheetsFilterPlugin
} from "../chunk-OHU5TY7G.js";
import {
  zh_CN_default
} from "../chunk-RZBLMCIY.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-4CN32JQX.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-H7GNFIRV.js";
import "../chunk-NQ5GCUBK.js";
import {
  Univer
} from "../chunk-IFI2CVGR.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-DO7PIA5W.js";

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
