function formatComments(arr) {
  let res = '<ul>';
  arr.forEach(obj => {
    res += `<li>${obj.content}</li>`
  })
  res += '</ul>'

  return res;
}
function parseBody(body) {
  let res = body.split('&');
  res = res.map(el => el.split('='));
  res.forEach(el => {
    el.forEach((str,i) => {
      el[i] = str.replaceAll('+', ' ');
    })
  })
  res.forEach(el => {
    el.forEach((str,i) => {
      el[i] = decodeURIComponent(str);
    })
  })
  return res.reduce((accum, [key,val]) => {
    accum[key] = val;
    return accum;
  }, {});
}

// module.exports = {
//   formatComments,
//   parseBody
// }
export {
  formatComments,
  parseBody
}