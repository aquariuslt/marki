import * as marked from 'marked';

interface MarkiOptions {

}

interface CodeFilter {
  language: string;
}

interface CodeHandler {
  language: string;
  handler: Function;
}

export default class MarkiContext {
  source: string;                 // markdown source
  html?: string;                  // compiled html

  markiOptions?: MarkiOptions;    // marki options

  codeFilters?: Array<CodeFilter>;
  codeHandlers?: Array<CodeHandler>;


  constructor(options?: MarkiOptions) {
    let $this = this;
    $this.markiOptions = options || {};
    $this.codeFilters = [];
    $this.codeHandlers = [];
  }

  addCodeFilters(language: string) {
    let $this = this;
    $this.codeFilters.push({language: language});
  }

  addCodeHandlers(language: string, handlerFn: Function) {
    let $this = this;
    $this.codeHandlers.push({
      language: language,
      handler: handlerFn
    });
  }

  compile(source: string) {
    let $this = this;
    $this.source = source;
    $this.html = marked(source);
    return $this.html;
  }
}



