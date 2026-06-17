import {
  createUniver
} from "../chunk-3V7ATSCM.js";
import "../chunk-PF6SYPUF.js";
import {
  UniverNetworkPlugin
} from "../chunk-KVXNZTUC.js";
import "../chunk-GFMGPQSJ.js";
import {
  DEFAULT_DOCUMENT_DATA_SIMPLE
} from "../chunk-JAL66NYS.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-AU7KVTCM.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-DHHCXRED.js";
import "../chunk-ERPSXR7T.js";
import {
  zh_CN_default,
  zh_CN_default2,
  zh_CN_default3
} from "../chunk-QAY465GM.js";
import "../chunk-VA3QBNTQ.js";
import {
  UniverFormulaEnginePlugin
} from "../chunk-YA6TPXLL.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-EZ7I6SAD.js";
import {
  mergeLocales
} from "../chunk-HNUJ6OAX.js";
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
