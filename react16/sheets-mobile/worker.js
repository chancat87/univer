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

// src/sheets-mobile/worker.ts
var univer = new Univer({
  locale: "zhCN" /* ZH_CN */,
  logLevel: 4 /* VERBOSE */
});
univer.registerPlugin(UniverSheetsPlugin, { onlyRegisterFormulaRelatedMutations: true });
univer.registerPlugin(UniverFormulaEnginePlugin);
univer.registerPlugin(UniverRPCWorkerThreadPlugin);
self.univer = univer;
