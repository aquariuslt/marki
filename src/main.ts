import * as marked from 'marked';


function omarki(source) {
  return marked(source);
}


function marki(source) {
  let lexer = new Lexer();
  let tokens = lexer.lex(source);
  let parser = new Parser();
  return parser.parse(tokens);
}


class Lexer {
  private blockLexer: BlockLexer;
  private inlineLexer: InlineLexer;

  constructor() {
    let $this = this;
    $this.blockLexer = new BlockLexer();
    $this.inlineLexer = new InlineLexer();


  }


  lex(source: string) {
    let $this = this;
    let tokens = $this.blockLexer.lex(source);
    $this.inlineLexer.lexTokens(tokens);
    return tokens;
  };


}

class BlockLexer {
  lex(mdString) {
    let markedTokens = new marked.Lexer().lex(mdString);

    return new Tokens(markedTokens);
  }
}

class InlineLexer {
  private inline;

  lexTokens(tokens: Tokens) {
    let $this = this;
    $this.inline = marked.InlineLexer(tokens.links);
  }

  output(source) {
    let $this = this;
    return $this.inline.output(source);
  }

  outputLink(cap, link) {
    let $this = this;
    return $this.inline.outputLink(cap, link);
  }

  smartypants(text) {
    let $this = this;
    return $this.inline.smartypants(text);
  }
}


class Token extends Object {
}

class TokenLinks extends Object {
}

class Tokens {
  tokens: Array<Token>;
  links: TokenLinks;

  constructor(markedTokens) {
    let $this = this;
    $this.links = markedTokens.links;
    delete markedTokens.links;
    $this.tokens = markedTokens;
  }
}

class Parser {
  parse(tokens: Tokens) {

    let innerTokens = Object(tokens.tokens);
    innerTokens.links = tokens.links;

    return new marked.Parser().parse(innerTokens);
  }
}



export {
  omarki,
  marki
};
