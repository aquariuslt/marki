declare namespace Tokens {
  interface Space {
    type: 'space';
  }

  interface Code {
    type: 'code';
    lang?: string;
    text: string;
  }

  interface Heading {
    type: 'heading';
    depth: number;
    text: string;
  }

  interface Table {
    type: 'table';
    header: string[];
    align: Array<'center' | 'left' | 'right' | null>;
    cells: string[][];
  }

  interface Hr {
    type: 'hr';
  }

  interface BlockquoteStart {
    type: 'blockquote_start';
  }

  interface BlockquoteEnd {
    type: 'blockquote_end';
  }

  interface ListStart {
    type: 'list_start';
    ordered: boolean;
  }

  interface LooseItemStart {
    type: 'loose_item_start';
  }

  interface ListItemStart {
    type: 'list_item_start';
  }

  interface ListItemEnd {
    type: 'list_item_end';
  }

  interface ListEnd {
    type: 'list_end';
  }

  interface Paragraph {
    type: 'paragraph';
    pre?: boolean;
    text: string;
  }

  interface HTML {
    type: 'html';
    pre: boolean;
    text: string;
  }

  interface Text {
    type: 'text';
    text: string;
  }
}
