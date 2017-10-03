import {omarki, marki} from '@/main';

describe('marki', () => {
  it('marki direct compile', () => {
    const mdString = `[This link](http://example.net/) has no title attribute.`;

    let markedHtmlString = omarki(mdString);
    let markiHtmlString = marki(mdString);

    // console.log(markedHtmlString);
    // console.log(markiHtmlString);
    expect(markedHtmlString).to.eq(markiHtmlString);
  });
});
