/**
 * Type definitions for marki
 * */


declare interface MarkiConfig {
  module?: Array<MarkiCodeRule>;
}


declare interface MarkiCodeRule {
  language: string;
  override?: boolean; // override marked bundle lexer
  lexer?: Function;
  parser?: Function;
  renderer?: Function;
}


declare interface MarkiContext {
  module?: Array<MarkiCodeRule>;
}
