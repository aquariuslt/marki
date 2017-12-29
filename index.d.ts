/**
 * Type definitions for marki
 * */
import {Tokens} from 'marked';

declare interface MarkiContext {
  source: string;
  html: string;
  config: MarkiConfig;
  modules?: Array<MarkiModule>;
  tokens?: Tokens;


  // customize filed
  [moduleRegistriedKey: string]: any;
}

declare interface MarkiConfig {
  modules?: Array<MarkiModule>;
}

declare interface MarkiModule {
  language: string;
  override?: boolean; // override marked bundle lexer
  ignore?: boolean;
  lex?: Function;
  parse?: Function;
  render?: Function;
}


