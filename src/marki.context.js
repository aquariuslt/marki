import marked from "marked";
import _ from "lodash";

export default class MarkiContext {
  source;
  html;


  tokens;
  filteredTokens;
  needHandleTokens;
  handledTokens;


  options;


  codeFilters;
  codeHandlers;


  constructor(options) {
    let $this = this;
    $this.options = options || {};
    $this.codeFilters = [];
    $this.codeHandlers = [];

    // intern level marked object
    $this.initTokens();
  }


  initTokens() {
    let $this = this;
    $this.tokens = [];
    $this.needHandleTokens = [];
    $this.handledTokens = [];
    $this.filteredTokens = [];
  }

  handleTokens(source) {
    let $this = this;
    let lexer = new marked.Lexer();
    $this.tokens = lexer.lex(source);

    $this.doCodeFilter();
    $this.doHandleCustomizeCodeType();
  }

  doCodeFilter() {
    let {language} = needFilteredCode;
    let needFilterTokenPredict = {
      type: 'code',
      lang: language
    };

    let needFilterTokens = _.filter($this.tokens, needFilterTokenPredict);
    $this.filteredTokens = $this.filteredTokens.concat(needFilterTokens);
    _.each(needFilterTokens, function (needFilterToken) {
      _.remove($this.tokens, needFilterToken);
    });

    if (!_.isUndefined(needFilteredCode.handle) && needFilteredCode.handle) {
      $this.needHandleTokens = $this.needHandleTokens.concat(needFilterTokens);
    }
  }


  doHandleCustomizeCodeType() {
    // perform handle
    let $this = this;

    let groupByLanguageCodeHandlers = _.groupBy($this.codeHandlers, function (handler) {
      return handler.language;
    });


    _.each($this.needHandleTokens, function (token) {

    });
  }


  compile(source) {
    let $this = this;
    $this.source = source;
    $this.handleTokens(source);
    $this.html = marked.parse($this.tokens);

    return $this.html;
  }
}
