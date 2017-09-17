declare type Token =
  Tokens.Space
  | Tokens.Code
  | Tokens.Heading
  | Tokens.Table
  | Tokens.Hr
  | Tokens.BlockquoteStart
  | Tokens.BlockquoteEnd
  | Tokens.ListStart
  | Tokens.LooseItemStart
  | Tokens.ListItemStart
  | Tokens.ListItemEnd
  | Tokens.ListEnd
  | Tokens.Paragraph
  | Tokens.HTML
  | Tokens.Text;


declare type TokensList = Token[] & {
  links: {
    [key: string]: { href: string; title: string; }
  }
};
