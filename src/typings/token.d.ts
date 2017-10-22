interface Token {
  type: string;                                       // All
  lang?: string;                                      // Code
  text?: string;                                      // Code | Heading | Paragraph | HTML
  depth?: number;                                     // Heading
  header?: string[];                                  // Table
  align?: Array<'center' | 'left' | 'right' | null>;  // Table
  cells?: string[][];                                 // Table
  ordered?: boolean;                                  // ListStart
  pre?: boolean;                                      // Paragraph | HTML
}


