import _ from 'lodash';
import Lexer from '@/lexer';

describe('lexer:hr', () => {

  it('should lex spaced * as hr', () => {
    const mdString = `* * *`;
    let lexer = new Lexer();
    let tokens = lexer.lex(mdString);

    expect(tokens.length).to.eq(1);
    expect(_.head(tokens).type).to.eq('hr');
  });

  it('should lex 3 continuous * as hr', () => {
    const mdString = `***`;
    let lexer = new Lexer();
    let tokens = lexer.lex(mdString);

    expect(tokens.length).to.eq(1);
    expect(_.head(tokens).type).to.eq('hr');
  });

  it('should lex 5 continuous * as hr', () => {
    const mdString = `*****`;
    let lexer = new Lexer();
    let tokens = lexer.lex(mdString);

    expect(tokens.length).to.eq(1);
    expect(_.head(tokens).type).to.eq('hr');
  });

  it('should lex spaced - as hr', () => {
    const mdString = `- - -`;
    let lexer = new Lexer();
    let tokens = lexer.lex(mdString);

    expect(tokens.length).to.eq(1);
    expect(_.head(tokens).type).to.eq('hr');
  });

  it('should lex many continues - as hr', () => {
    const mdString = `---------------------------------------`;
    let lexer = new Lexer();
    let tokens = lexer.lex(mdString);

    expect(tokens.length).to.eq(1);
    expect(_.head(tokens).type).to.eq('hr');
  });


  it('should not lex 2 (less than 3) spaced * as hr', () => {
    const mdString = `* *`;
    let lexer = new Lexer();
    let tokens = lexer.lex(mdString);

    expect(_.head(tokens).type).not.to.eq('hr');
  });

  it('should not lex 2 (less than 3) continues * as hr', () => {
    const mdString = `**`;
    let lexer = new Lexer();
    let tokens = lexer.lex(mdString);

    expect(_.head(tokens).type).not.to.eq('hr');
  });
});
