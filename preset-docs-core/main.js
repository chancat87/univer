import {
  createUniver
} from "../chunk-3KQJWX35.js";
import "../chunk-CRFQLADE.js";
import {
  UniverNetworkPlugin
} from "../chunk-W4CESNA5.js";
import "../chunk-WBOVN7EG.js";
import {
  DEFAULT_DOCUMENT_DATA_SIMPLE
} from "../chunk-ZKICHKAT.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-NNJ2PAFS.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-DFLNXVRZ.js";
import "../chunk-Z2NBOTBN.js";
import {
  zh_CN_default,
  zh_CN_default2,
  zh_CN_default3
} from "../chunk-XGMSUR6J.js";
import "../chunk-6FFDUATW.js";
import {
  UniverFormulaEnginePlugin
} from "../chunk-CXZNL3JJ.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-XFPFZZHP.js";
import {
  mergeLocales
} from "../chunk-EGKTDU4O.js";
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
