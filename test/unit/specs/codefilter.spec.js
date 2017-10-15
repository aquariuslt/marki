/**
 * Test Code filter in code blocks
 * */
import * as marked from 'marked';
import MarkiContext from '@/shared/marki.context';

import mdStringWithMetadataCodeType from '../data/post-with-metadata.md';

describe('code filter', function() {

  let $this = this;
  $this.marki = new MarkiContext();

  beforeEach('# reset marki context', function() {
    $this.marki = new MarkiContext();
  });

  it('# filter: metadata', function() {
    $this.marki.addCodeFilters({
      language: 'metadata'
    });

    expect($this.marki.compile(mdStringWithMetadataCodeType)).not.to.eq(marked(mdStringWithMetadataCodeType));
  });

  it('# filter: metadata with still handle', function() {
    $this.marki.addCodeFilters({
      language: 'metadata',
      handle: true
    });

    expect($this.marki.compile(mdStringWithMetadataCodeType)).not.to.eq(marked(mdStringWithMetadataCodeType));
  });

});
