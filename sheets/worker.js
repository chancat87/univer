import {
  UniverSheetsFilterPlugin
} from "../chunk-GORRS47O.js";
import {
  zh_CN_default
} from "../chunk-N7ZRCU45.js";
import "../chunk-GQQW6W3C.js";
import "../chunk-OEYKKT7I.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-ELKFKEHS.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-75Z4XWR6.js";
import "../chunk-EXOHZCIQ.js";
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
