import {
  createUniver
} from "../chunk-KSFQLBHQ.js";
import "../chunk-F43JEVVE.js";
import {
  UniverNetworkPlugin
} from "../chunk-QM3A44KY.js";
import "../chunk-U6I3CA3F.js";
import {
  DEFAULT_DOCUMENT_DATA_SIMPLE
} from "../chunk-FOKWLND3.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-PLVAV62H.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-IUZQOUIN.js";
import "../chunk-S5JPW7X3.js";
import {
  zh_CN_default,
  zh_CN_default2,
  zh_CN_default3
} from "../chunk-QAY465GM.js";
import "../chunk-7K5RKTUX.js";
import {
  UniverFormulaEnginePlugin
} from "../chunk-X6PSTXJS.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-SXPNKO5K.js";
import {
  mergeLocales
} from "../chunk-SGLSU3TV.js";
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
