import {
  UniverSheetsFilterPlugin
} from "../chunk-UKZXZXOR.js";
import {
  zh_CN_default
} from "../chunk-HBLKBZG3.js";
import "../chunk-GQQW6W3C.js";
import "../chunk-OEYKKT7I.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-JC4PXT54.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-2L3NWO5X.js";
import "../chunk-PPZWG4HX.js";
import {
  Univer
} from "../chunk-E3BE2WWO.js";
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
