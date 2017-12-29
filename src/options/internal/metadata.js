import _ from 'lodash';
import log from 'fancy-log';

const META_TOKENS = {
  type: 'code',
  lang: 'metadata'
};

let metadataRule = {
  language: 'metadata',
  override: true,
  ignore: true,
  /**
   * @param {MarkiContext} context
   * */
  lex: function(context) {
    let $this = this;
    let tokens = context.tokens;
    let metadataToken = _.find(tokens, META_TOKENS);

    if (_.isUndefined(metadataToken)) {
      log.error('Could not found metadata');
      return;
    }

    context['metadata'] = JSON.parse(metadataToken.text);

    if (!_.isUndefined($this.ignore) && $this.ignore) {
      _.remove(tokens, META_TOKENS);
    }
  }
};

export default metadataRule;
