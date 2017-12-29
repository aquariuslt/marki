import MarkiConfig from './options/marki.config';
import marked from 'marked';
import metadataRule from './options/internal/metadata';

let marki = marked;
marki.load = load;
marki.set = set;
marki.context = initContext();
marki.load(internalConfig());

/**
 * @return {MarkiContext}
 * */
function initContext() {
  return {
    source: '',
    html: '',
    config: [],
    modules: [],
    tokens: []
  };
}

function internalConfig() {
  return new MarkiConfig({
    modules: [
      metadataRule
    ]
  });
}

/**
 * @param {MarkiConfig} markiConfig
 * */
function load(markiConfig) {
  updateContext({
    config: markiConfig,
    modules: markiConfig.modules
  });
}

/**
 * @param {string} key
 * @param {Object|Boolean|string} value
 * */
function set(key, value) {

}

/**
 * @param {MarkiContext} context
 * */
function updateContext(context) {
  marki.context = context;
}

export default marki;





