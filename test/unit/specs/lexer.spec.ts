import _ from 'lodash';
import {expect} from 'chai';
import Lexer from '../../../src/lexer';

describe('lexer', () => {
  it('should lex only 1 heading tokens default', () => {
    const mdString = '# Hello Title';
    let markiLexer = new Lexer();
    let tokens = markiLexer.lex(mdString);

    expect(_.isEqual(tokens.length, 1)).to.equal(true);
    expect(_.isEqual(_.head(tokens).type, 'heading'));
  });
});
