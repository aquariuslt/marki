import _ from 'lodash';
import {expect} from 'chai';
import Lexer from '@/lexer';
// import Tokens from '@/shared/tokens';

describe('lexer:lists', () => {

  it('should be lex unordered list with any list quote', () => {
    const mdString = `- Red`;
    let lexer = new Lexer();
    let tokens = lexer.lex(mdString);

    expect(_.isEqual(tokens.length, 5)).to.eq(true);
    expect(_.isEqual(_.head(tokens).ordered, false)).to.eq(true);
    expect(_.isEqual(_.head(tokens).type,'list_start')).to.eq(true);
  });

  it('should be lex * as unordered list', () => {
    // const mdString = `- Red\n- Green\n- Blue`;
    // let lexer = new Lexer();
    // let tokens = lexer.lex(mdString);
    //
    // console.log(tokens);
    // expect(_.isEqual(tokens.length, 1)).to.equal(true);
    // expect(_.isEqual(_.head(tokens).type, 'heading')).to.equal(true);
    // expect(_.isEqual(_.head(tokens).depth, 1)).to.equal(true);
  });

  it('should be lex + as unordered list', () => {
  });

  it('should be lex - as unordered list', () => {
  });

  it('', () => {
  });

  it('', () => {
  });

  it('', () => {
  });
});
