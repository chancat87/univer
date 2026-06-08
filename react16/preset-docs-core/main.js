import {
  createUniver
} from "../chunk-FO74CBDG.js";
import "../chunk-6DAZ42FK.js";
import {
  UniverNetworkPlugin
} from "../chunk-EEHGUUTD.js";
import "../chunk-4RNL4ZJM.js";
import {
  DEFAULT_DOCUMENT_DATA_SIMPLE
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
  zh_CN_default,
  zh_CN_default2,
  zh_CN_default3
} from "../chunk-BCDUZYIJ.js";
import "../chunk-PRLSOEOE.js";
import {
  UniverFormulaEnginePlugin
} from "../chunk-367XZEO6.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-NHNIOZYL.js";
import {
  mergeLocales
} from "../chunk-JNYF3CQV.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-DO7PIA5W.js";

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
