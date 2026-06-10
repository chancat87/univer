import {
  createUniver
} from "../chunk-B5BCMVCT.js";
import "../chunk-VVWZ3UVA.js";
import {
  UniverNetworkPlugin
} from "../chunk-NXGKZ7Y6.js";
import "../chunk-RWWWEYQQ.js";
import {
  DEFAULT_DOCUMENT_DATA_SIMPLE
} from "../chunk-DMVEE645.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-XRVQCUPD.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-GPJNXDNJ.js";
import "../chunk-66S2PCKH.js";
import {
  zh_CN_default,
  zh_CN_default2,
  zh_CN_default3
} from "../chunk-OEYKKT7I.js";
import "../chunk-L2LRQXJ3.js";
import {
  UniverFormulaEnginePlugin
} from "../chunk-R53I7K3Y.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-5J4ZCI76.js";
import {
  mergeLocales
} from "../chunk-33LYH36L.js";
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
