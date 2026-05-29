import {
  UniverSheetsFilterPlugin
} from "../chunk-A2OOC2ZY.js";
import {
  zh_CN_default
} from "../chunk-EHHZDUTR.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-JVAUVJXG.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-IJXT2JU6.js";
import "../chunk-DSDMX7LI.js";
import {
  Univer
} from "../chunk-63HVW4WP.js";
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
