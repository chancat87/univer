import {
  UniverSheetsFilterPlugin
} from "../chunk-VTLXXVY6.js";
import {
  zh_CN_default
} from "../chunk-UXIY4DXQ.js";
import "../chunk-N6FCNQNY.js";
import "../chunk-BCDUZYIJ.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-PRLSOEOE.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-367XZEO6.js";
import "../chunk-NHNIOZYL.js";
import {
  Univer
} from "../chunk-JNYF3CQV.js";
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
