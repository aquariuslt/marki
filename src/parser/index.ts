import * as  marked from 'marked';
import {TokensList} from '../shared/token';


export default class Parser {
  private parser;

  constructor(src: TokensList, options?: ParserOptions) {
    let $this = this;
    $this.parser = new marked.Parser();
  }

  parse(tokens: TokensList, options?: ParserOptions): string {
    let $this = this;
    return $this.parser.parse(tokens);
  }
}
