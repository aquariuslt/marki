declare interface MarkiOptions {

}


declare interface CodeFilter {
  language: string;
  handle?: boolean;
}


declare interface CodeHandler {
  language: string;
  handler: Function;
}
