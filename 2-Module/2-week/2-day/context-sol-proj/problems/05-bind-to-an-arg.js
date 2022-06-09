function bindToAnArg(func, arg) {
  const funcBind = func.bind(null, arg);
  return funcBind;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;