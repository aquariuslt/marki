import * as marked from 'marked';
import Lexer from './index';

export default class InlineLexer {
  private lexer;
  private inlineLexer;

  constructor(links: object, options?: LexerOptions) {
    let $this = this;
    $this.lexer = new Lexer();
    $this.inlineLexer = new marked.InlineLexer(links);
  }

  output(source: string): string {
    let $this = this;
    return $this.inlineLexer.output($this.lexer.lex(source));
  }
};
