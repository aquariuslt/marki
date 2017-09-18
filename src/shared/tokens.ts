
export interface Space {
  type: 'space';
}

export interface Code {
  type: 'code';
  lang?: string;
  text: string;
}

export interface Heading {
  type: 'heading';
  depth: number;
  text: string;
}

export interface Table {
  type: 'table';
  header: string[];
  align: Array<'center' | 'left' | 'right' | null>;
  cells: string[][];
}

export interface Hr {
  type: 'hr';
}

export interface BlockquoteStart {
  type: 'blockquote_start';
}

export interface BlockquoteEnd {
  type: 'blockquote_end';
}

export interface ListStart {
  type: 'list_start';
  ordered: boolean;
}

export interface LooseItemStart {
  type: 'loose_item_start';
}

export interface ListItemStart {
  type: 'list_item_start';
}

export interface ListItemEnd {
  type: 'list_item_end';
}

export interface ListEnd {
  type: 'list_end';
}

export interface Paragraph {
  type: 'paragraph';
  pre?: boolean;
  text: string;
}

export interface HTML {
  type: 'html';
  pre: boolean;
  text: string;
}

export interface Text {
  type: 'text';
  text: string;
}


