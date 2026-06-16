import {
  createUniver
} from "../chunk-DWTSZGVP.js";
import "../chunk-WAUZNGOF.js";
import {
  UniverNetworkPlugin
} from "../chunk-5MDLYJAR.js";
import "../chunk-SHRL75I2.js";
import {
  DEFAULT_DOCUMENT_DATA_SIMPLE
} from "../chunk-WIMFKKAA.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-FZJJ3243.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-NZ7W7U6C.js";
import "../chunk-DD2UA3MA.js";
import {
  zh_CN_default,
  zh_CN_default2,
  zh_CN_default3
} from "../chunk-QAY465GM.js";
import "../chunk-W2RJV332.js";
import {
  UniverFormulaEnginePlugin
} from "../chunk-SWZ2CRIO.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-HOO533L5.js";
import {
  mergeLocales
} from "../chunk-XJSFHAOZ.js";
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
