import {
  createUniver
} from "../chunk-3KQJWX35.js";
import "../chunk-CRFQLADE.js";
import {
  UniverNetworkPlugin
} from "../chunk-W4CESNA5.js";
import "../chunk-5VMCP7ZK.js";
import {
  DEFAULT_DOCUMENT_DATA_SIMPLE
} from "../chunk-RAQB7QKQ.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-XRVR2H52.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-GDSMKYWA.js";
import "../chunk-Z2NBOTBN.js";
import {
  zh_CN_default,
  zh_CN_default2,
  zh_CN_default3
} from "../chunk-XGMSUR6J.js";
import "../chunk-QYY2YWST.js";
import {
  UniverFormulaEnginePlugin
} from "../chunk-G66X4HVS.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-3Z2XPC36.js";
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
