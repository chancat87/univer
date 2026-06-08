import {
  createUniver
} from "../chunk-3YSOJELF.js";
import "../chunk-VLFHJMSF.js";
import {
  UniverNetworkPlugin
} from "../chunk-VBARYE6N.js";
import "../chunk-VCU4ATJ2.js";
import {
  DEFAULT_DOCUMENT_DATA_SIMPLE
} from "../chunk-MG6S74S4.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-FADFDPJO.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-NCMWFBVU.js";
import "../chunk-BWPHDXYN.js";
import {
  zh_CN_default,
  zh_CN_default2,
  zh_CN_default3
} from "../chunk-75OJL7X3.js";
import "../chunk-C5ZDEYK2.js";
import {
  UniverFormulaEnginePlugin
} from "../chunk-G5QND7UH.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-F2DPNTXI.js";
import {
  mergeLocales
} from "../chunk-6UZK77F2.js";
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
