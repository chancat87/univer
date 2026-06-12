import {
  createUniver
} from "../chunk-67DFKABI.js";
import "../chunk-GAXQW3WQ.js";
import {
  UniverNetworkPlugin
} from "../chunk-2OEWPRFM.js";
import "../chunk-JI4D773Z.js";
import {
  DEFAULT_DOCUMENT_DATA_SIMPLE
} from "../chunk-VDFEGK7S.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-ZBWRYDUJ.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-FIGZ5VDW.js";
import "../chunk-BW43X265.js";
import {
  zh_CN_default,
  zh_CN_default2,
  zh_CN_default3
} from "../chunk-OEYKKT7I.js";
import "../chunk-JC4PXT54.js";
import {
  UniverFormulaEnginePlugin
} from "../chunk-2L3NWO5X.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-PPZWG4HX.js";
import {
  mergeLocales
} from "../chunk-E3BE2WWO.js";
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
