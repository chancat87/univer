import {
  UniverSheetsFilterPlugin
} from "../chunk-LB2YNGLK.js";
import {
  zh_CN_default
} from "../chunk-QZLZT5RN.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-TDDTJ2MZ.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-BWZ6GQIM.js";
import "../chunk-4ZR7A7BJ.js";
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
