import {
  UniverSheetsFilterPlugin
} from "../chunk-W2X5ZSFK.js";
import {
  zh_CN_default
} from "../chunk-A44DDVT2.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-TVPZ3PEL.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-CZ2PTCAX.js";
import "../chunk-ZBHWPOF6.js";
import {
  Univer
} from "../chunk-IDTDYMR7.js";
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
