# marki: marked based markdown compiler wrapper


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
