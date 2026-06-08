import {
  createUniver
} from "../chunk-FO74CBDG.js";
import "../chunk-NXFO7ESC.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-PRLSOEOE.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-367XZEO6.js";
import "../chunk-NHNIOZYL.js";
import "../chunk-JNYF3CQV.js";
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
