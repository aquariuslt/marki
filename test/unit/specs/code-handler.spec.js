import * as marked from 'marked';
import MarkiContext from '@/shared/marki.context';

import mdStringWithMetadataCodeType from '../data/post-with-metadata.md';

describe('code handler', function() {


  describe('metadata handler',function() {
    let $this = this;
    $this.marki = new MarkiContext();


    beforeEach('# add metadata filter',function() {
      $this.marki = new MarkiContext();
      $this.marki.addCodeFilters({
        language: 'metadata',
        handle: true
      });

    });

    it('# handler: metadata', function() {
      $this.marki.addCodeHandlers('metadata',function(markiContext,singleToken) {
        console.log('try log single token:',singleToken);
      });
    });

  });
});
