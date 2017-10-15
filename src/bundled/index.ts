import MarkiContext from '../shared/marki.context';


class BundleMarkiContext extends MarkiContext {
  constructor() {
    super();
    let $this = this;
    $this.codeFilters = [];
    $this.codeHandlers = [];
  }
}

export default BundleMarkiContext;
