export default class Renderer {
  constructor(options?: RendererOptions) {

  }

  code(code: string, language: string, isEscaped: boolean): string {
    return '';
  }

  blockquote(quote: string): string {
    return '';
  }

  html(html: string): string {
    return '';
  }

  heading(text: string, level: number, raw: string): string {
    return '';
  }

  hr(): string {
    return '';
  }

  list(body: string, ordered: boolean): string {
    return '';
  }

  listitem(text: string): string {
    return '';
  }

  paragraph(text: string): string {
    return '';
  }

  table(header: string, body: string): string {
    return '';
  }

  tablerow(content: string): string {
    return '';
  }

  tablecell(content: string, flags: {
    header: boolean;
    align: 'center' | 'left' | 'right' | null;
  }): string {
    return '';
  }

  strong(text: string): string {
    return '';
  }

  em(text: string): string {
    return '';
  }

  codespan(code: string): string {
    return '';
  }

  br(): string {
    return '';
  }

  del(text: string): string {
    return '';
  }

  link(href: string, title: string, text: string): string {
    return '';
  }

  image(href: string, title: string, text: string): string {
    return '';
  }

  text(text: string): string {
    return '';
  }
}
