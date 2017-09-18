import _ from 'lodash';
import Lexer from '@/lexer';

/**
 * Lexer().lex testing
 * Test Cases from http://wowubuntu.com/markdown/ example
 *
 * */
describe('lexer:headings', () => {
  /**
   * @example
   * ```
   * new Lexer().lex('# Hello Title')
   * ```
   *
   * @output
   * [
   *   {
   *     type:'heading',
   *     depth:1,
   *     text: 'Hello Title'
   *   }
   * ]
   * */
  it('should lex h1 heading tokens', () => {
    const mdString = '# Hello Title';
    let lexer = new Lexer();
    let tokens = lexer.lex(mdString);

    expect(tokens.length).to.equal(1);
    expect(_.head(tokens).type).to.equal('heading');
    expect(_.head(tokens).depth).to.equal(1);
  });

  it('should lex h2 heading tokens', () => {
    const mdString = '## Hello h2 Title';
    let lexer = new Lexer();
    let tokens = lexer.lex(mdString);

    expect(tokens.length).to.equal(1);
    expect(_.head(tokens).type).to.equal('heading');
    expect(_.head(tokens).depth).to.equal(2);
  });

  it('should lex h3 heading tokens', () => {
    const mdString = '### Hello h3 Title';
    let lexer = new Lexer();
    let tokens = lexer.lex(mdString);

    expect(tokens.length).to.equal(1);
    expect(_.head(tokens).type).to.equal('heading');
    expect(_.head(tokens).depth).to.equal(3);
  });

  it('should lex h4 heading tokens', () => {
    const mdString = '#### Hello h4 Title';
    let lexer = new Lexer();
    let tokens = lexer.lex(mdString);

    expect(tokens.length).to.equal(1);
    expect(_.head(tokens).type).to.equal('heading');
    expect(_.head(tokens).depth).to.equal(4);
  });

  it('should lex h5 heading tokens', () => {
    const mdString = '##### Hello h5 Title';
    let lexer = new Lexer();
    let tokens = lexer.lex(mdString);

    expect(tokens.length).to.equal(1);
    expect(_.head(tokens).type).to.equal('heading');
    expect(_.head(tokens).depth).to.equal(5);
  });

  it('should lex h6 heading tokens', () => {
    const mdString = '###### Hello h6 Title';
    let lexer = new Lexer();
    let tokens = lexer.lex(mdString);

    expect(tokens.length).to.equal(1);
    expect(_.head(tokens).type).to.equal('heading');
    expect(_.head(tokens).depth).to.equal(6);
  });

  /**
   * Markdown setext mode support
   *
   * @source:
   * `
   * This is an H1
   * =============
   * `
   * @html
   * <h1>This is an H1</h1>
   * */
  it('should lex h1 heading tokens from setext mode', () => {
    const mdString = `This is an H1\n=============`;
    let lexer = new Lexer();
    let tokens = lexer.lex(mdString);

    expect(tokens.length).to.equal(1);
    expect(_.head(tokens).type).to.equal('heading');
    expect(_.head(tokens).depth).to.equal(1);
  });

  /**
   * Markdown setext mode support
   *
   * @source:
   * `
   * This is an H2
   * -------------
   * `
   * @output
   * <h2>This is an H2</h2>
   * */
  it('should lex h2 heading tokens from setext mode', () => {
    const mdString = `This is an H2\n-------------`;
    let lexer = new Lexer();
    let tokens = lexer.lex(mdString);

    expect(tokens.length).to.equal(1);
    expect(_.head(tokens).type).to.equal('heading');
    expect(_.head(tokens).depth).to.equal(2);
  });

  /**
   * Markdown setext mode support
   *
   * @source:
   * `
   * # This is an H1 #
   * `
   * @output
   * <h1>This is an H1</h1>
   * */
  it('should lex h1 heading tokens from atx closure mode', () => {
    const mdString = `# This is an H1 #`;
    let lexer = new Lexer();
    let tokens = lexer.lex(mdString);

    expect(tokens.length).to.equal(1);
    expect(_.head(tokens).type).to.equal('heading');
    expect(_.head(tokens).depth).to.equal(1);
  });
});
