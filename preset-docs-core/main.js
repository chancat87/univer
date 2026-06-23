import {
  createUniver
} from "../chunk-OUW7ZZJK.js";
import {
  DEFAULT_DOCUMENT_DATA_SIMPLE
} from "../chunk-SGZ2HHVL.js";
import "../chunk-I6GUBEEQ.js";
import {
  UniverNetworkPlugin
} from "../chunk-KDGVEVAK.js";
import "../chunk-27VYB5XE.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-MAD3JRBW.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-CK4XAVSA.js";
import "../chunk-BIOJ5KTK.js";
import {
  zh_CN_default,
  zh_CN_default2,
  zh_CN_default3
} from "../chunk-QAY465GM.js";
import "../chunk-UBUTY46K.js";
import {
  UniverFormulaEnginePlugin
} from "../chunk-M3MJBN7C.js";
import {
  UniverRenderEnginePlugin,
  mergeLocales
} from "../chunk-XMQDOTMR.js";
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
