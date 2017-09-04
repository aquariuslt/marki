/* Created By Aquariuslt at 2017-09-03 */
import marked from 'marked';

let compiler = {
  compile: function(source) {
    return marked(source);
  }
};

export {
  compiler
};
