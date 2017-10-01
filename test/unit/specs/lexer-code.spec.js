import _ from 'lodash';
import Lexer from '@/lexer';

describe('lexer:code', () => {

  it('should be using 4 space before to setup code blocks', () => {
    const mdString = `    This is a code block\n`;
    let lexer = new Lexer();
    let tokens = lexer.lex(mdString);

    expect(tokens.length).to.eq(1);
    expect(_.head(tokens).type).to.eq('code');
  });

  it('should be using 1 tab before to setup code blocks', () => {
    const mdString = `\tThis is a code block\n`;
    let lexer = new Lexer();
    let tokens = lexer.lex(mdString);

    expect(tokens.length).to.eq(1);
    expect(_.head(tokens).type).to.eq('code');
  });

  it('should be using multi-line spaces to setup code blocks', () => {
    const mdString = `\ttell application "Foo"\n\t\tbeep\n\tend tell\n`;
    let lexer = new Lexer();
    let tokens = lexer.lex(mdString);

    expect(tokens.length).to.eq(1);
    expect(_.head(tokens).type).to.eq('code');
  });

  it('should be using broken-line block to setup code blocks',()=>{
    const mdString =`\`\`\`\ntell application "Foo"\n\t\tbeep\n\tend tell\n\`\`\`\n`;

    let lexer = new Lexer();
    let tokens = lexer.lex(mdString);

    expect(tokens.length).to.eq(1);
    expect(_.head(tokens).type).to.eq('code');
  });

});
