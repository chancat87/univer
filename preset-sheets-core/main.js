import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-LKGWSBMP.js";
import {
  createUniver
} from "../chunk-4RNUJJM5.js";
import "../chunk-UUOGX3LG.js";
import "../chunk-FEE5X7WK.js";
import "../chunk-WJVLEVUU.js";
import {
  UniverSheetsFormulaUIPlugin
} from "../chunk-VNOZ73SZ.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-XCTXJ3NV.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-L6PTLA7O.js";
import "../chunk-GLWPLYXM.js";
import {
  UniverNetworkPlugin
} from "../chunk-BPMFCCIM.js";
import "../chunk-S43ZO4AN.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-Y26DBFT2.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-5KHTBPHV.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-LOHY7AAA.js";
import "../chunk-TKKSW2K4.js";
import {
  zh_CN_default as zh_CN_default3,
  zh_CN_default2 as zh_CN_default4,
  zh_CN_default3 as zh_CN_default5,
  zh_CN_default4 as zh_CN_default6,
  zh_CN_default5 as zh_CN_default7
} from "../chunk-GQQW6W3C.js";
import {
  zh_CN_default,
  zh_CN_default2,
  zh_CN_default3 as zh_CN_default8
} from "../chunk-QAY465GM.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-BIZC7Y24.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCMainThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-HAF7HUA6.js";
import {
  UniverRenderEnginePlugin,
  mergeLocales
} from "../chunk-CCEXUECC.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-HECJ2TYE.js";

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
var zh_CN_default9 = Object.assign(
  {},
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
