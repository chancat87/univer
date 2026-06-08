import {
  createUniver
} from "../chunk-KMQU6YYL.js";
import "../chunk-JONUNQZ4.js";
import {
  UniverNetworkPlugin
} from "../chunk-476QPFAI.js";
import "../chunk-UFD2Q4OH.js";
import {
  DEFAULT_DOCUMENT_DATA_SIMPLE
} from "../chunk-TC3IYX7U.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-2HMY3XBH.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-LWWM426T.js";
import "../chunk-ZVMLUOKL.js";
import {
  zh_CN_default,
  zh_CN_default2,
  zh_CN_default3
} from "../chunk-BCDUZYIJ.js";
import "../chunk-MLKZU577.js";
import {
  UniverFormulaEnginePlugin
} from "../chunk-CKHMSDDS.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-3TEOVAGW.js";
import {
  mergeLocales
} from "../chunk-PRXL3D5H.js";
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
