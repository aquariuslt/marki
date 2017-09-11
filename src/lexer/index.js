import {block, inline} from './block';
import bundledTokenziers from './tokenziers';

import _ from 'lodash';

class Lexer {
  constructor() {
    let $this = this;
    $this.tokens = [];
    $this.tokens.links = {};
    $this.rules = block.normal;
  }

  /**
   * @param {String} src markdown source string
   * @return {Array} tokens
   * */
  lex(src) {
    let $this = this;
    $this.lexPreProcess(src);
    let tokens = $this.lexProcess(src);
    $this.lexPostProcess(src);
    return tokens;
  }

  /**
   * pre-process lexing (bundled)
   * 1. align wrap
   * 2. align tab to 4 spaces
   * 3. convert non-breaking space to space
   * @param {String} src markdown source string
   * */
  lexPreProcess(src) {
    src = src.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ').replace(/\u00a0/g, ' ').replace(/\u2424/g, '\n').replace(/^ +$/gm, '');
  }

  /**
   * @param {String} src
   * */
  lexPostProcess(src) {

  }

  /**
   * @param {String} src
   * @return {Array} tokens
   * */
  lexProcess(src) {
    let $this = this;
    return $this.tokenize(src);
  }

  /**
   * convert markdown source string to tokens
   * @param {String} src
   * @return {Array} tokens
   * */
  tokenize(src) {
    let tokens = [];
    while (src) {
      for(let i = 0,len = bundledTokenziers.length; i < len; i++){
        let srcLengthBefore = src.length;
        console.log(bundledTokenziers[i]);
        console.log(src.length);
        console.log(tokens.length);
        bundledTokenziers[i].tokenize(src, tokens);
        let srcLengthAfter = src.length;
        if (!_.isEqual(srcLengthBefore,srcLengthAfter)){
          break;
        }
      }
    }
    return tokens;
  }
}

export default Lexer;
