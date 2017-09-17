declare interface Rules {
  [ruleName: string]: RegExp | Rules;
}
