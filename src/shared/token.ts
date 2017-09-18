import * as Tokens from 'shared/tokens';

export type Token =
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


export type TokensList = Token[] & {
  links: {
    [key: string]: { href: string; title: string; }
  }
};
