import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-ZPIHTAPT.js";
import {
  createUniver
} from "../chunk-FO74CBDG.js";
import "../chunk-XMQTKVG6.js";
import "../chunk-3NP3F326.js";
import "../chunk-VJLGCXJK.js";
import {
  UniverSheetsFormulaUIPlugin
} from "../chunk-CVWXJ7EC.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-N6SQANXB.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-P7PYTPQ3.js";
import "../chunk-6DAZ42FK.js";
import {
  UniverNetworkPlugin
} from "../chunk-EEHGUUTD.js";
import "../chunk-4RNL4ZJM.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-TBYHE7ZI.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-2CZ5W5IK.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-CBDIEJPE.js";
import "../chunk-NXFO7ESC.js";
import {
  zh_CN_default as zh_CN_default3,
  zh_CN_default2 as zh_CN_default4,
  zh_CN_default3 as zh_CN_default5,
  zh_CN_default4 as zh_CN_default6,
  zh_CN_default5 as zh_CN_default7
} from "../chunk-N6FCNQNY.js";
import {
  zh_CN_default,
  zh_CN_default2,
  zh_CN_default3 as zh_CN_default8
} from "../chunk-BCDUZYIJ.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-PRLSOEOE.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCMainThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-367XZEO6.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-NHNIOZYL.js";
import {
  mergeLocales
} from "../chunk-JNYF3CQV.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-DO7PIA5W.js";

// ../presets/packages/preset-sheets-core/src/umd.ts
function UniverSheetsCorePreset(config = {}) {
  var _a;
  const {
    container = "app",
    workerURL: workerSrc,
    header,
    footer,
    toolbar,
    ribbonType,
    formulaBar,
    menu,
    contextMenu,
    disableAutoFocus,
    customFontFamily,
    docs,
    sheets,
    formula,
    disableTextFormatAlert,
    disableTextFormatMark
  } = config;
  const useWorker = !!workerSrc;
  return {
    plugins: [
      UniverNetworkPlugin,
      [UniverDocsPlugin, {
        hasScroll: docs == null ? void 0 : docs.hasScroll
      }],
      UniverRenderEnginePlugin,
      [UniverUIPlugin, {
        container,
        header,
        toolbar,
        ribbonType,
        menu,
        contextMenu,
        disableAutoFocus,
        customFontFamily
      }],
      UniverDocsUIPlugin,
      useWorker ? [UniverRPCMainThreadPlugin, { workerURL: workerSrc }] : null,
      [UniverFormulaEnginePlugin, {
        notExecuteFormula: useWorker,
        function: formula == null ? void 0 : formula.function
      }],
      [UniverSheetsPlugin, {
        notExecuteFormula: useWorker,
        onlyRegisterFormulaRelatedMutations: false,
        isRowStylePrecedeColumnStyle: sheets == null ? void 0 : sheets.isRowStylePrecedeColumnStyle,
        autoHeightForMergedCells: sheets == null ? void 0 : sheets.autoHeightForMergedCells,
        freezeSync: sheets == null ? void 0 : sheets.freezeSync
      }],
      [UniverSheetsUIPlugin, {
        formulaBar,
        footer,
        maxAutoHeightCount: sheets == null ? void 0 : sheets.maxAutoHeightCount,
        clipboardConfig: sheets == null ? void 0 : sheets.clipboardConfig,
        scrollConfig: sheets == null ? void 0 : sheets.scrollConfig,
        protectedRangeShadow: (_a = sheets == null ? void 0 : sheets.protectedRangeShadow) != null ? _a : true,
        protectedRangeUserSelector: sheets == null ? void 0 : sheets.protectedRangeUserSelector,
        disableForceStringAlert: sheets == null ? void 0 : sheets.disableForceStringAlert,
        disableForceStringMark: sheets == null ? void 0 : sheets.disableForceStringMark
      }],
      [UniverSheetsNumfmtPlugin, {
        disableTextFormatAlert,
        disableTextFormatMark
      }],
      UniverSheetsNumfmtUIPlugin,
      [UniverSheetsFormulaPlugin, {
        notExecuteFormula: useWorker,
        description: formula == null ? void 0 : formula.description,
        initialFormulaComputing: formula == null ? void 0 : formula.initialFormulaComputing
      }],
      [UniverSheetsFormulaUIPlugin, {
        functionScreenTips: formula == null ? void 0 : formula.functionScreenTips
      }]
    ].filter((v) => !!v)
  };
}

// ../presets/packages/preset-sheets-core/src/locales/zh-CN.ts
var zh_CN_default9 = mergeLocales(
  zh_CN_default,
  zh_CN_default2,
  zh_CN_default3,
  zh_CN_default4,
  zh_CN_default5,
  zh_CN_default6,
  zh_CN_default7,
  zh_CN_default8
);

// src/preset-sheets-core/main.ts
var { univer, univerAPI } = createUniver({
  locale: "zhCN" /* ZH_CN */,
  locales: {
    ["zhCN" /* ZH_CN */]: mergeLocales(zh_CN_default9)
  },
  logLevel: 4 /* VERBOSE */,
  presets: [
    UniverSheetsCorePreset({
      container: "app",
      workerURL: new Worker(new URL("./worker.js", import.meta.url), { type: "module" })
    })
  ]
});
univerAPI.createWorkbook(DEFAULT_WORKBOOK_DATA_DEMO);
window.univer = univer;
window.univerAPI = univerAPI;
