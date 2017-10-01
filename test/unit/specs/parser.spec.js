import _ from 'lodash';
import Lexer from '@/lexer';
import Parser from '@/parser';

describe('parser', () => {
  let lexer;
  let parser;

  before(() => {
    let $this = this;
    lexer = new Lexer();
    parser = new Parser();
  });

  it('parser base function', () => {
    let $this = this;
    const mdString = `[This link](http://example.net/) has no title attribute.`;

    let tokens = lexer.lex(mdString);
    let ret = parser.parse(tokens);

  });

});
