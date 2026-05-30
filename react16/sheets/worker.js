import {
  UniverSheetsFilterPlugin
} from "../chunk-3GQUFSHT.js";
import {
  zh_CN_default
} from "../chunk-KZ7IYLEF.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-B4NUTUQI.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-RBUELYHQ.js";
import "../chunk-UUV633F7.js";
import {
  Univer
} from "../chunk-5IFCPQIO.js";
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
