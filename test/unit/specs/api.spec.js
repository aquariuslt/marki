// for api unittest and simple assert, we use dist folder for testing
// remember to run packer to here

import marki from '#/@aexo/marki';
import _ from 'lodash';

describe('api', () => {

  it('# api `load` should be provided', () => {
    expect(_.isUndefined(marki.load)).to.be.false;
    expect(_.isFunction(marki.load)).to.be.true;
  });

  it('# api `set` should be provided', () => {
    expect(_.isUndefined(marki.set)).to.be.false;
    expect(_.isFunction(marki.set)).to.be.true;
  });
});
