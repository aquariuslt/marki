import MarkiContext from '@/shared/marki.context';
import * as marked from 'marked';

/**
 * Plain text test cases md string use http://wowubuntu.com/markdown/ example cases
 * */
describe('marki: extend', function() {

  let $this = this;
  $this.marki = new MarkiContext();

  describe('block', function() {
    it('# head: setext', function() {
      const mdString = `This is an H1\n=============\n\nThis is an H2\n-------------\n`;
      expect($this.marki.compile(mdString)).to.eq(marked(mdString));
    });

    it('# head: atx', function() {
      const mdString = `# 这是 H1\n\n## 这是 H2\n\n###### 这是 H6\n`;
      expect($this.marki.compile(mdString)).to.eq(marked(mdString));
    });

    it('# head: closure', function() {
      const mdString = `# 这是 H1 #\n\n## 这是 H2 ##\n\n### 这是 H3 ######\n`;
      expect($this.marki.compile(mdString)).to.eq(marked(mdString));
    });

    it('# blockquotes: multiline', function() {
      const mdString = `
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,\n
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.\n
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.\n
> \n
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse\n
> id sem consectetuer libero luctus adipiscing.\n
      `;
      expect($this.marki.compile(mdString)).to.eq(marked(mdString));
    });

    it('# blockquotes: singleline', function() {
      const mdString = `
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,\n
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.\n
Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.\n
\n
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse\n
id sem consectetuer libero luctus adipiscing.\n
      `;
      expect($this.marki.compile(mdString)).to.eq(marked(mdString));
    });

    it('# blockquotes: injection closure', function() {
      const mdString = `
> This is the first level of quoting.\n
>\n
> > This is nested blockquote.\n
>\n
> Back to the first level.\n
      `;
      expect($this.marki.compile(mdString)).to.eq(marked(mdString));
    });

    it('# list: *', function() {
      const mdString = `* Red\n* Green\n* Blue\n`;
      expect($this.marki.compile(mdString)).to.eq(marked(mdString));
    });

    it('# list: +', function() {
      const mdString = `+ Red \n+ Green \n+ Blue\n`;
      expect($this.marki.compile(mdString)).to.eq(marked(mdString));
    });

    it('# list: -', function() {
      const mdString = `- Red \n- Green \n- Blue\n`;
      expect($this.marki.compile(mdString)).to.eq(marked(mdString));
    });

    it('# list: number', function() {
      const mdString = `1. Bird \n2. McHale \n3. Parish\n`;
      expect($this.marki.compile(mdString)).to.eq(marked(mdString));
    });

    it('# list: line space block', function() {
      const mdString = `* Bird \n\n* Magic\n`;
      expect($this.marki.compile(mdString)).to.eq(marked(mdString));
    });

    it('# code: default code block', function() {
      const mdString = `
      \`\`\`\n
      hello\n
      \`\`\`\n
      `;
      expect($this.marki.compile(mdString)).to.eq(marked(mdString));
    });

    it('# hr: * with spaces', function() {
      const mdString = `* * *\n`;
      expect($this.marki.compile(mdString)).to.eq(marked(mdString));
    });

    it('# hr: * with not spaces', function() {
      const mdString = `***\n`;
      expect($this.marki.compile(mdString)).to.eq(marked(mdString));
    });

    it('# hr: - with spaces', function() {
      const mdString = `- - -\n`;
      expect($this.marki.compile(mdString)).to.eq(marked(mdString));
    });

    it('# hr: - with no spaces', function() {
      const mdString = `---------------------------------------\n`;
      expect($this.marki.compile(mdString)).to.eq(marked(mdString));
    });

  });

  describe('inline', function() {

    it('# link with absolute url', function() {
      const mdString = `This is [an example](http://example.com/ "Title") inline link.\n`;
      expect($this.marki.compile(mdString)).to.eq(marked(mdString));
    });

    it('# link with relative url ', function() {
      const mdString = `See my [About](/about/) page for details.\n`;
      expect($this.marki.compile(mdString)).to.eq(marked(mdString));
    });

    it('# link with reference', function() {
      const mdString = `This is [an example] [id] reference-style link.\n\n\n\n[id]: http://example.com/  "Optional Title Here"\n`;
      expect($this.marki.compile(mdString)).to.eq(marked(mdString));
    });

    it('# strong with *', function() {
      const mdString = `*single asterisks*\n`;
      expect($this.marki.compile(mdString)).to.eq(marked(mdString));
    });

    it('# strong with **', function() {
      const mdString = `**double asterisks**\n`;
      expect($this.marki.compile(mdString)).to.eq(marked(mdString));
    });

    it('# strong with _', function() {
      const mdString = `_single underscores_\n`;
      expect($this.marki.compile(mdString)).to.eq(marked(mdString));
    });

    it('# strong with __', function() {
      const mdString = `__single underscores__\n`;
      expect($this.marki.compile(mdString)).to.eq(marked(mdString));
    });

    it('# code: inline', function() {
      const mdString = `Use the \`printf()\` function.\n`;
      expect($this.marki.compile(mdString)).to.eq(marked(mdString));
    });

    it('# code: inline with 3 \`', function() {
      const mdString = `\`\`There is a literal backtick (\`) here.\`\`\n`;
      expect($this.marki.compile(mdString)).to.eq(marked(mdString));
    });

    it('# image: plain image', function() {
      const mdString = `![Alt text](/path/to/img.jpg)\n`;
      expect($this.marki.compile(mdString)).to.eq(marked(mdString));
    });

    it('# image with alt message', function() {
      const mdString = `![Alt text](/path/to/img.jpg "Optional title")\n`;
      expect($this.marki.compile(mdString)).to.eq(marked(mdString));
    });

    it('# image with reference', function() {
      const mdString = `![Alt text][id]\n\n\n[id]: url/to/image  "Optional title attribute"\n`;
      expect($this.marki.compile(mdString)).to.eq(marked(mdString));
    });

    it('# auto link: mail', function() {
      const mdString = `<http://example.com/>\n`;
      expect($this.marki.compile(mdString)).to.eq(marked(mdString));
    });

  });
});
