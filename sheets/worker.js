import {
  UniverSheetsFilterPlugin
} from "../chunk-4W2SS6VH.js";
import {
  zh_CN_default
} from "../chunk-ONLV7DQM.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-4HP7LWJV.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-2CYUCMRJ.js";
import "../chunk-24OJVLNM.js";
import {
  Univer
} from "../chunk-M4NHM7N2.js";
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
