import marked from 'marked';

let marki = marked;
marki.loadConfig = loadConfig;
marki.set = set;

let context = initMarkiContext();

/**
 * @return {MarkiContext}
 * */
function initMarkiContext() {
  return {};
}

function resetMarkiContext() {
  context = {};
}

/**
 * @param {MarkiConfig} markiConfig
 * */
function loadConfig(markiConfig) {
  resetMarkiContext();
}

/**
 * @param {string} key
 * @param {Object|Boolean|string} value
 * */
function set(key, value) {

}

export default marki;





