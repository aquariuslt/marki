import * as marked from 'marked';
import * as _ from 'lodash';

export default class MarkiContext {
  source: string;                 // markdown source
  html?: string;                  // compiled html


  private tokens?: Array<Token>;           // original tokens
  private filteredTokens?: Array<Token>;   // filtered tokens
  private needHandleTokens ?: Array<Token>;// non-handled tokens
  private handledTokens?: Array<Token>;    // handled tokens

  markiOptions?: MarkiOptions;    // marki options

  codeFilters?: Array<CodeFilter>;
  codeHandlers?: Array<CodeHandler>;


  constructor(options?: MarkiOptions) {
    let $this = this;
    $this.markiOptions = options || {};
    $this.codeFilters = [];
    $this.codeHandlers = [];

    // intern level marked object
    $this.initTokens();
  }


  private initTokens() {
    let $this = this;
    $this.tokens = [];
    $this.needHandleTokens = [];
    $this.handledTokens = [];
    $this.filteredTokens = [];
  }

  private handleTokens(source: string) {
    let $this = this;
    let lexer = new marked.Lexer();
    $this.tokens = lexer.lex(source);

    $this.doCodeFilter();
    $this.doHandleCustomizeCodeType();
  }

  private doCodeFilter() {
    let $this = this;

    _.each($this.codeFilters, function (needFilteredCode) {
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
    });

  }

  private doHandleCustomizeCodeType() {
    // perform handle
    let $this = this;

    let groupByLanguageCodeHandlers = _.groupBy($this.codeHandlers,function (handler) {
      return handler.language;
    });


    _.each($this.needHandleTokens,function (token) {

    });
  }

  /* export level functions */
  public addCodeFilters(filterCode: CodeFilter) {
    let $this = this;
    $this.codeFilters.push(filterCode);
  }

  public addCodeHandlers(language: string, handlerFn: Function) {
    let $this = this;
    $this.codeHandlers.push({
      language: language,
      handler: handlerFn
    });
  }

  compile(source: string) {
    let $this = this;
    $this.source = source;

    $this.handleTokens(source);


    $this.html = marked.parser($this.tokens);

    return $this.html;
  }
}



