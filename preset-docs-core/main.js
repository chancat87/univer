import {
  createUniver
} from "../chunk-Z77D6GFI.js";
import "../chunk-WDLLYOCJ.js";
import {
  UniverNetworkPlugin
} from "../chunk-6LWLEZUX.js";
import "../chunk-QD4WS327.js";
import {
  DEFAULT_DOCUMENT_DATA_SIMPLE
} from "../chunk-WRFHUIE7.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-IO7A2VQU.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-NF47Z4XV.js";
import "../chunk-FMZL2PTE.js";
import {
  zh_CN_default,
  zh_CN_default2,
  zh_CN_default3
} from "../chunk-QAY465GM.js";
import "../chunk-W7WW4R4Y.js";
import {
  UniverFormulaEnginePlugin
} from "../chunk-FP57X2T3.js";
import {
  UniverRenderEnginePlugin,
  mergeLocales
} from "../chunk-XDSP77UU.js";
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
var zh_CN_default4 = Object.assign(
  {},
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
