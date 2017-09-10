/**
 * Wrapper of marked lexer.
 * Created by Aquariuslt on 2017-09-07.
 **/
import marked from 'marked';

export default class Lexer {
  lexer;
  options;

  constructor() {
    let $this = this;
    $this.lexer = marked.Lexer;
  }

  lex(mdString) {
    let $this = this;
    return this.lexer.lex(mdString);
  }

}
