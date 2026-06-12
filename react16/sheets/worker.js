import {
  UniverSheetsFilterPlugin
} from "../chunk-JNKEFL4D.js";
import {
  zh_CN_default
} from "../chunk-ES66ZAH2.js";
import "../chunk-GQQW6W3C.js";
import "../chunk-XGMSUR6J.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-6FFDUATW.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-CXZNL3JJ.js";
import "../chunk-XFPFZZHP.js";
import {
  Univer
} from "../chunk-EGKTDU4O.js";
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
