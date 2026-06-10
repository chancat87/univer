import {
  UniverSheetsFilterPlugin
} from "../chunk-7QG5NMCL.js";
import {
  zh_CN_default
} from "../chunk-Q2T25765.js";
import "../chunk-7J6TSD4B.js";
import "../chunk-OEYKKT7I.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-L2LRQXJ3.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-R53I7K3Y.js";
import "../chunk-5J4ZCI76.js";
import {
  Univer
} from "../chunk-33LYH36L.js";
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
