function allTheArgs(func, ...args) {
  return func.bind('', ...args)
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;