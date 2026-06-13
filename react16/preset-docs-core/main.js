import {
  createUniver
} from "../chunk-SI36IP52.js";
import "../chunk-YY4HORCY.js";
import {
  UniverNetworkPlugin
} from "../chunk-AMPLZCVP.js";
import "../chunk-BEFP5CHR.js";
import {
  DEFAULT_DOCUMENT_DATA_SIMPLE
} from "../chunk-RPFYPI5O.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-VSYBWRXI.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-OWRD2DAJ.js";
import "../chunk-VH2IWGAA.js";
import {
  zh_CN_default,
  zh_CN_default2,
  zh_CN_default3
} from "../chunk-XGMSUR6J.js";
import "../chunk-5ED2IM6Z.js";
import {
  UniverFormulaEnginePlugin
} from "../chunk-RNEMECLQ.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-RQTPWJDA.js";
import {
  mergeLocales
} from "../chunk-5NEQ5UIN.js";
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
