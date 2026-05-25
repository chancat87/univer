import {
  UniverSheetsFilterPlugin
} from "../chunk-CXMPIKRB.js";
import {
  zh_CN_default
} from "../chunk-4QRQ4FBX.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-JAO4FOGC.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-UPB44MDX.js";
import "../chunk-M6VABHCX.js";
import {
  Univer
} from "../chunk-F6ZBKZEW.js";
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
