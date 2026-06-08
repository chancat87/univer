import {
  createUniver
} from "../chunk-KMQU6YYL.js";
import "../chunk-ZVMLUOKL.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-MLKZU577.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-CKHMSDDS.js";
import "../chunk-3TEOVAGW.js";
import "../chunk-PRXL3D5H.js";
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
