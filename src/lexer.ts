import * as marked from 'marked';


export default class Lexer {
  private lexer;

  constructor() {
    let $this = this;
    $this.lexer = new marked.Lexer();

  }

  lex(source: string): Array<any> {
    let $this = this;
    return $this.lexer.lex(source);
  }
}
