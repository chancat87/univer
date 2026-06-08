import {
  UniverSheetsFilterPlugin
} from "../chunk-NCOHMOMQ.js";
import {
  zh_CN_default
} from "../chunk-AUM3TUEE.js";
import "../chunk-N6FCNQNY.js";
import "../chunk-75OJL7X3.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-C5ZDEYK2.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-G5QND7UH.js";
import "../chunk-F2DPNTXI.js";
import {
  Univer
} from "../chunk-6UZK77F2.js";
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
