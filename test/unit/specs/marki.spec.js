import {MarkiContext} from '@/main';

describe('marki', function() {

  it('# should load marked correctly', function() {
    let markiContext = new MarkiContext();
    let compiled = markiContext.compile('# Hello');
    expect(compiled).to.eq(`<h1 id="hello">Hello</h1>\n`);
  });
});
