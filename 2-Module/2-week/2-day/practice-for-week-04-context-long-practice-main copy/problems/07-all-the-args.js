function allTheArgs(func, ...args) {
  const funcBind = func.bind(null, ...args);
  return funcBind; //returns the exotic function, when invoked (funcBind()) will be the same as funcBind(...args);
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;