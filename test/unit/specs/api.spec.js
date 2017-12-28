// for api unittest and simple assert, we use dist folder for testing
// remember to run packer to here

import marki from '@/main';
import _ from 'lodash';

describe('api', () => {

  it('# api `loadConfig` should be provided', () => {
    expect(_.isUndefined(marki.loadConfig)).to.be.false;
    expect(_.isFunction(marki.loadConfig)).to.be.true;
  });
});
