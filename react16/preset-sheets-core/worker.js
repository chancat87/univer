import {
  createUniver
} from "../chunk-SI36IP52.js";
import "../chunk-VH2IWGAA.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-5ED2IM6Z.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-RNEMECLQ.js";
import "../chunk-RQTPWJDA.js";
import "../chunk-5NEQ5UIN.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-DO7PIA5W.js";

// ../presets/packages/preset-sheets-core/src/worker.ts
function UniverSheetsCoreWorkerPreset(config = {}) {
  const {
    formula
  } = config;
  return {
    plugins: [
      [UniverSheetsPlugin, { onlyRegisterFormulaRelatedMutations: true }],
      [UniverFormulaEnginePlugin, { function: formula == null ? void 0 : formula.function }],
      UniverRPCWorkerThreadPlugin,
      UniverRemoteSheetsFormulaPlugin
    ]
  };
}

// src/preset-sheets-core/worker.ts
createUniver({
  presets: [
    UniverSheetsCoreWorkerPreset()
  ]
});
