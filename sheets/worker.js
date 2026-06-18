import {
  UniverSheetsFilterPlugin
} from "../chunk-6GMDXAUM.js";
import {
  zh_CN_default
} from "../chunk-RWJVLWWK.js";
import "../chunk-GQQW6W3C.js";
import "../chunk-QAY465GM.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-GIASHSLF.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-TNPXDSFM.js";
import "../chunk-YFZT4CFH.js";
import {
  Univer
} from "../chunk-JAAZE2FX.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-HECJ2TYE.js";

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
