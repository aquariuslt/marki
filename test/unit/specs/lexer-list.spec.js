import _ from 'lodash';
import {expect} from 'chai';
import Lexer from '@/lexer';

describe('lexer:lists', () => {

  it('should be lex unordered list with any list quote', () => {
    const mdString = `- Red`;
    let lexer = new Lexer();
    let tokens = lexer.lex(mdString);

    expect(tokens.length).to.eq(5);
    expect(_.head(tokens).ordered).to.eq(false);
    expect(_.head(tokens).type).to.eq('list_start');
    expect(_.last(tokens).type).to.eq('list_end');
  });

  it('should be lex * as unordered list', () => {
    const mdString = `* Red\n* Green\n* Blue`;
    let lexer = new Lexer();
    let tokens = lexer.lex(mdString);

    expect(tokens.length).to.eq(11);
    expect(_.head(tokens).ordered).to.eq(false);
    expect(_.head(tokens).type).to.eq('list_start');
    expect(_.last(tokens).type).to.eq('list_end');
    expect(_.filter(tokens, (token) => {
      return _.isEqual(token.type, 'text');
    }).length).to.eq(3);
    expect(_.filter(tokens, (token) => {
      return _.isEqual(token.type, 'list_item_start');
    }).length).to.eq(3);
    expect(_.filter(tokens, (token) => {
      return _.isEqual(token.type, 'list_item_end');
    }).length).to.eq(3);
    expect(_.filter(tokens, (token) => {
      return _.isEqual(token.type, 'list_start');
    }).length).to.eq(1);
    expect(_.filter(tokens, (token) => {
      return _.isEqual(token.type, 'list_end');
    }).length).to.eq(1);
  });

  it('should be lex + as unordered list', () => {
    const mdString = `+ Red\n+ Green\n+ Blue`;
    let lexer = new Lexer();
    let tokens = lexer.lex(mdString);

    expect(tokens.length).to.eq(11);
    expect(_.head(tokens).ordered).to.eq(false);
    expect(_.head(tokens).type).to.eq('list_start');
    expect(_.last(tokens).type).to.eq('list_end');
    expect(_.filter(tokens, (token) => {
      return _.isEqual(token.type, 'text');
    }).length).to.eq(3);
    expect(_.filter(tokens, (token) => {
      return _.isEqual(token.type, 'list_item_start');
    }).length).to.eq(3);
    expect(_.filter(tokens, (token) => {
      return _.isEqual(token.type, 'list_item_end');
    }).length).to.eq(3);
    expect(_.filter(tokens, (token) => {
      return _.isEqual(token.type, 'list_start');
    }).length).to.eq(1);
    expect(_.filter(tokens, (token) => {
      return _.isEqual(token.type, 'list_end');
    }).length).to.eq(1);
  });

  it('should be lex - as unordered list', () => {
    const mdString = `- Red\n- Green\n- Blue`;
    let lexer = new Lexer();
    let tokens = lexer.lex(mdString);

    expect(tokens.length).to.eq(11); // 3x3+1+1
    expect(_.head(tokens).ordered).to.eq(false);
    expect(_.head(tokens).type).to.eq('list_start');
    expect(_.last(tokens).type).to.eq('list_end');
    expect(_.filter(tokens, (token) => {
      return _.isEqual(token.type, 'text');
    }).length).to.eq(3);
    expect(_.filter(tokens, (token) => {
      return _.isEqual(token.type, 'list_item_start');
    }).length).to.eq(3);
    expect(_.filter(tokens, (token) => {
      return _.isEqual(token.type, 'list_item_end');
    }).length).to.eq(3);
    expect(_.filter(tokens, (token) => {
      return _.isEqual(token.type, 'list_start');
    }).length).to.eq(1);
    expect(_.filter(tokens, (token) => {
      return _.isEqual(token.type, 'list_end');
    }).length).to.eq(1);
  });

  it('should be lex order list with sequence prefix', () => {
    const mdString = `1. Bird\n2. McHale\n3. Parish`;
    let lexer = new Lexer();
    let tokens = lexer.lex(mdString);

    expect(tokens.length).to.eq(11);
    expect(_.head(tokens).ordered).to.eq(true);
    expect(_.head(tokens).type).to.eq('list_start');
    expect(_.last(tokens).type).to.eq('list_end');
    expect(_.filter(tokens, (token) => {
      return _.isEqual(token.type, 'text');
    }).length).to.eq(3);
    expect(_.filter(tokens, (token) => {
      return _.isEqual(token.type, 'list_item_start');
    }).length).to.eq(3);
    expect(_.filter(tokens, (token) => {
      return _.isEqual(token.type, 'list_item_end');
    }).length).to.eq(3);
    expect(_.filter(tokens, (token) => {
      return _.isEqual(token.type, 'list_start');
    }).length).to.eq(1);
    expect(_.filter(tokens, (token) => {
      return _.isEqual(token.type, 'list_end');
    }).length).to.eq(1);
  });

  it('should be not influence with unsorted sequence', () => {
    const mdStringWithSortedSequence = `1. Bird\n2. McHale\n3. Parish`;
    const mdStringWithoutSortedSequence = `3. Bird\n1. McHale\n8. Parish`;
    let lexer = new Lexer();

    let sortedTokens = lexer.lex(mdStringWithSortedSequence);
    let unsortedTokens = lexer.lex(mdStringWithoutSortedSequence);

    expect(sortedTokens).to.eq(unsortedTokens);
  });
});
