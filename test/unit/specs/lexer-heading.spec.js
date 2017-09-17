import _ from 'lodash';
import Lexer from '@/lexer';

/**
 * Lexer().lex testing
 * Test Cases from http://wowubuntu.com/markdown/ example
 * */
describe('lexer:headings', () => {
  it('should lex h1 heading tokens', () => {
    const mdString = '# Hello Title';
    let lexer = new Lexer();
    let tokens = lexer.lex(mdString);

    expect(_.isEqual(tokens.length, 1)).to.equal(true);
    expect(_.isEqual(_.head(tokens).type, 'heading')).to.equal(true);
    expect(_.isEqual(_.head(tokens).depth, 1)).to.equal(true);
  });

  it('should lex h2 heading tokens', () => {
    const mdString = '## Hello h2 Title';
    let lexer = new Lexer();
    let tokens = lexer.lex(mdString);

    expect(_.isEqual(tokens.length, 1)).to.equal(true);
    expect(_.isEqual(_.head(tokens).type, 'heading')).to.equal(true);
    expect(_.isEqual(_.head(tokens).depth, 2)).to.equal(true);
  });

  it('should lex h3 heading tokens', () => {
    const mdString = '### Hello h3 Title';
    let lexer = new Lexer();
    let tokens = lexer.lex(mdString);

    expect(_.isEqual(tokens.length, 1)).to.equal(true);
    expect(_.isEqual(_.head(tokens).type, 'heading')).to.equal(true);
    expect(_.isEqual(_.head(tokens).depth, 3)).to.equal(true);
  });

  it('should lex h4 heading tokens', () => {
    const mdString = '#### Hello h4 Title';
    let lexer = new Lexer();
    let tokens = lexer.lex(mdString);

    expect(_.isEqual(tokens.length, 1)).to.equal(true);
    expect(_.isEqual(_.head(tokens).type, 'heading')).to.equal(true);
    expect(_.isEqual(_.head(tokens).depth, 4)).to.equal(true);
  });

  it('should lex h5 heading tokens', () => {
    const mdString = '##### Hello h5 Title';
    let lexer = new Lexer();
    let tokens = lexer.lex(mdString);

    expect(_.isEqual(tokens.length, 1)).to.equal(true);
    expect(_.isEqual(_.head(tokens).type, 'heading')).to.equal(true);
    expect(_.isEqual(_.head(tokens).depth, 5)).to.equal(true);
  });

  it('should lex h6 heading tokens', () => {
    const mdString = '###### Hello h6 Title';
    let lexer = new Lexer();
    let tokens = lexer.lex(mdString);

    expect(_.isEqual(tokens.length, 1)).to.equal(true);
    expect(_.isEqual(_.head(tokens).type, 'heading')).to.equal(true);
    expect(_.isEqual(_.head(tokens).depth, 6)).to.equal(true);
  });

  /**
   * Markdown setext mode support
   *
   * @source:
   * `
   * This is an H1
   * =============
   * `
   * @output
   * <h1>This is an H1</h1>
   * */
  it('should lex h1 heading tokens from setext mode', () => {
    const mdString = `This is an H1\n=============`;
    let lexer = new Lexer();
    let tokens = lexer.lex(mdString);

    expect(_.isEqual(tokens.length, 1)).to.equal(true);
    expect(_.isEqual(_.head(tokens).type, 'heading')).to.equal(true);
    expect(_.isEqual(_.head(tokens).depth, 1)).to.equal(true);
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

    expect(_.isEqual(tokens.length, 1)).to.equal(true);
    expect(_.isEqual(_.head(tokens).type, 'heading')).to.equal(true);
    expect(_.isEqual(_.head(tokens).depth, 2)).to.equal(true);
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

    expect(_.isEqual(tokens.length, 1)).to.equal(true);
    expect(_.isEqual(_.head(tokens).type, 'heading')).to.equal(true);
    expect(_.isEqual(_.head(tokens).depth, 1)).to.equal(true);
  });
});
