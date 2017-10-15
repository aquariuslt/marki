# marki: marked based markdown compiler wrapper

[![npm version](https://badge.fury.io/js/%40hooli%2Fmarki.svg)](https://badge.fury.io/js/%40hooli%2Fmarki)
[![Build Status](https://travis-ci.org/Aquariuslt/marki.svg)](https://travis-ci.org/Aquariuslt/marki)
[![Coverage Status](https://coveralls.io/repos/github/Aquariuslt/marki/badge.svg?branch=TS)](https://coveralls.io/github/Aquariuslt/marki?branch=TS)




## Background

When we using marked the most sample usage will look like:

```js
const mdString =   '# Hello Marked';
const htmlString = marked(mdString);
```


If we need advanced usage, from the marked source code and document.

We will see like that

```js
const mdString = '# Hello Marked';

let lexer = new marked.Lexer();
let tokens = lexer.lex(mdString);
const htmlString = marked.parser(tokens);
```


In order to export more lifecycle hooks in parse tokens, 
customize renderer, I hope marki can help.


## Situations

### Bundled Wrapper Enhancement

#### HTML Id Generator (Support Chinese)
#### Diagram Language Support
#### Hide Tokens in Renderer


### User Definition Extensions



### API Design

