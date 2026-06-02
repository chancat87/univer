import {
  UniverSheetsFilterPlugin
} from "../chunk-6T2RW4GL.js";
import {
  zh_CN_default
} from "../chunk-54EMUKNB.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-SLOSFHLK.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-NREJXSOV.js";
import "../chunk-EOKJYDPY.js";
import {
  Univer
} from "../chunk-4NZDNFUF.js";
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
