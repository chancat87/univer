import {
  UniverSheetsFilterPlugin
} from "../chunk-V5FG6ZLV.js";
import {
  zh_CN_default
} from "../chunk-DGBRMZM3.js";
import "../chunk-GQQW6W3C.js";
import "../chunk-XGMSUR6J.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-5ED2IM6Z.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-RNEMECLQ.js";
import "../chunk-RQTPWJDA.js";
import {
  Univer
} from "../chunk-5NEQ5UIN.js";
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
