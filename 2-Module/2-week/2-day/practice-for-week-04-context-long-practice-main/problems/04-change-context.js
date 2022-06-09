function changeContext(func, obj) {
  const funcBind = func.bind(obj);
  return funcBind();
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;