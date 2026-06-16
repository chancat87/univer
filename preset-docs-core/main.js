import {
  createUniver
} from "../chunk-YYNOBC7F.js";
import "../chunk-TVS6NXP2.js";
import {
  UniverNetworkPlugin
} from "../chunk-FPYIOMIX.js";
import "../chunk-Q3ZD4I7N.js";
import {
  DEFAULT_DOCUMENT_DATA_SIMPLE
} from "../chunk-D66OSNCZ.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-YY5M73BR.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-VRCEW6HR.js";
import "../chunk-3KYX65TC.js";
import {
  zh_CN_default,
  zh_CN_default2,
  zh_CN_default3
} from "../chunk-QAY465GM.js";
import "../chunk-2A7UPOAL.js";
import {
  UniverFormulaEnginePlugin
} from "../chunk-4ZVQCU3Y.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-ZABWMRUZ.js";
import {
  mergeLocales
} from "../chunk-2RCPMKBJ.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-HECJ2TYE.js";

// ../presets/packages/preset-docs-core/src/umd.ts
function UniverDocsCorePreset(config = {}) {
  const {
    container = "app",
    header,
    footer,
    toolbar,
    ribbonType,
    menu,
    contextMenu,
    disableAutoFocus
  } = config;
  return {
    plugins: [
      UniverNetworkPlugin,
      UniverDocsPlugin,
      UniverRenderEnginePlugin,
      [UniverUIPlugin, {
        container,
        header,
        footer,
        toolbar,
        ribbonType,
        menu,
        contextMenu,
        disableAutoFocus
      }],
      UniverDocsUIPlugin,
      UniverFormulaEnginePlugin
    ]
  };
}

// ../presets/packages/preset-docs-core/src/locales/zh-CN.ts
var zh_CN_default4 = mergeLocales(
  zh_CN_default,
  zh_CN_default2,
  zh_CN_default3
);

// src/preset-docs-core/main.ts
var { univer, univerAPI } = createUniver({
  locale: "zhCN" /* ZH_CN */,
  locales: {
    ["zhCN" /* ZH_CN */]: mergeLocales(zh_CN_default4)
  },
  logLevel: 4 /* VERBOSE */,
  presets: [
    UniverDocsCorePreset({
      container: "app"
    })
  ]
});
univer.createUnit(1 /* UNIVER_DOC */, DEFAULT_DOCUMENT_DATA_SIMPLE);
window.univer = univer;
window.univerAPI = univerAPI;
