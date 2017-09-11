import _ from 'lodash';
import {block} from './block';

class Tokenizer {
  tokenize(src, tokens) {
  }
}

class NewlineTokenizer extends Tokenizer {
  tokenize(src, tokens) {
    let matchedContents = block.newline.exec(src);
    if (!_.isEmpty(matchedContents)) {
      src = src.substring(_.head(matchedContents).length);
      if (_.head(matchedContents).length > 1) {
        tokens.push({
          type: 'space'
        });
      }
    }
  }
}

class CodeTokenizer extends Tokenizer {
  tokenize(src, tokens) {
    let matchedContents = block.code.exec(src);
    if (!_.isEmpty(matchedContents)) {
      src = src.substring(_.head(matchedContents).length);
      let codeToken = _.head(matchedContents).replace(/^ {4}/gm, '');
      tokens.push({
        type: 'code',
        text: codeToken
      });
    }
  }
}

class HeadingTokenizer extends Tokenizer {
  tokenize(src, tokens) {
    let matchedContents = block.heading.exec(src);
    if (!_.isEmpty(matchedContents)) {
      src = src.substring(_.head(matchedContents).length);
      tokens.push({
        type: 'heading',
        depth: matchedContents[1].length,
        text: matchedContents[2]
      });
    }
  }
}

class LHeadingTokenizer extends Tokenizer {
  tokenize(src, tokens) {
    let matchedContents = block.lheading.exec(src);
    if (!_.isEmpty(matchedContents)) {
      src = src.substring(_.head(matchedContents).length);
      tokens.push({
        type: 'heading',
        depth: matchedContents[2] === '=' ? 1 : 2,
        text: matchedContents[1]
      });
    }
  }
}

class HrTokenizer extends Tokenizer {
  tokenize(src, tokens) {
    let matchedContents = block.hr.exec(src);
    if (!_.isEmpty(matchedContents)){
      src = src.substring(_.head(matchedContents).length);
      tokens.push({
        type: 'hr'
      });
    }
  }
}

// TODO: fix it
class BlockquoteTokenizer extends Tokenizer {
  tokenize(src, tokens) {
    let matchedContents = block.blockquote.exec(src);
    if (!_.isEmpty(matchedContents)){
      src = src.substring(_.head(matchedContents).length);
      tokens.push({
        type: 'blockquote_start'
      });

      let blockquoteContent = _.head(matchedContents).replace(/^ *> ?/gm, '');

      tokens.push({
        type: 'blockquote_end'
      });
    }
  }
}

class ListTokenzier extends Tokenizer {
  tokenize(src, tokens) {
    let matchedContents = block.blockquote.exec(src);
    src = src.substring(_.head(matchedContents).length);


  }
}

let bundledTokenizeRules = [
  new NewlineTokenizer(),
  new CodeTokenizer(),
  new HeadingTokenizer(),
  new LHeadingTokenizer(),
  new HrTokenizer(),
  new BlockquoteTokenizer()

];
export default bundledTokenizeRules;
