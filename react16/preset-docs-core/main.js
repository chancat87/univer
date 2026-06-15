import {
  createUniver
} from "../chunk-NSVTCBNO.js";
import "../chunk-PAM4EXF7.js";
import {
  UniverNetworkPlugin
} from "../chunk-3TYETZLP.js";
import "../chunk-UF7LOQPM.js";
import {
  DEFAULT_DOCUMENT_DATA_SIMPLE
} from "../chunk-3MVPNDQV.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-CQ4VYZJ4.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-YZ63L5OB.js";
import "../chunk-MNEZ7YZ7.js";
import {
  zh_CN_default,
  zh_CN_default2,
  zh_CN_default3
} from "../chunk-QAY465GM.js";
import "../chunk-HCSE775N.js";
import {
  UniverFormulaEnginePlugin
} from "../chunk-MCE2SNW7.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-GEJ7L5S2.js";
import {
  mergeLocales
} from "../chunk-BFI4GFBQ.js";
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
