import {
  UniverSheetsFilterPlugin
} from "../chunk-3LMEOY6C.js";
import {
  zh_CN_default
} from "../chunk-GAMVVSR7.js";
import "../chunk-N6FCNQNY.js";
import "../chunk-BCDUZYIJ.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-MLKZU577.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-CKHMSDDS.js";
import "../chunk-3TEOVAGW.js";
import {
  Univer
} from "../chunk-PRXL3D5H.js";
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
