import Lexer from '@/lexer';
import _ from 'lodash';

describe('lexer', () => {
  it('should lex only 1 heading tokens default', () => {
    const mdString = '# Hello Title';
    let markiLexer = new Lexer();
    let tokens = markiLexer.lex(mdString);

    expect(_.isEqual(tokens.length, 1)).to.equal(true);
    expect(_.isEqual(_.head(tokens).type, 'heading'));
  });
});
