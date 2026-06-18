import {
  createUniver
} from "../chunk-ZOPQKTXM.js";
import "../chunk-XZXCNWYZ.js";
import {
  UniverNetworkPlugin
} from "../chunk-CGIXWYME.js";
import "../chunk-KQNM6OG3.js";
import {
  DEFAULT_DOCUMENT_DATA_SIMPLE
} from "../chunk-HENJB45Y.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-24DSUN32.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-R57BLDMF.js";
import "../chunk-ZO5MZRTT.js";
import {
  zh_CN_default,
  zh_CN_default2,
  zh_CN_default3
} from "../chunk-QAY465GM.js";
import "../chunk-GIASHSLF.js";
import {
  UniverFormulaEnginePlugin
} from "../chunk-TNPXDSFM.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-YFZT4CFH.js";
import {
  mergeLocales
} from "../chunk-JAAZE2FX.js";
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
