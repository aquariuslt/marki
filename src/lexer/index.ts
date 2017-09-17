import * as marked from 'marked';


export default class Lexer {
  private lexer;
  private rules: Rules;
  private tokens: TokensList;

  constructor(lexerOptions?: LexerOptions) {
    let $this = this;
    $this.lexer = new marked.Lexer();
  }

  lex(source: string): TokensList {
    let $this = this;
    return $this.lexer.lex(source);
  }


}
