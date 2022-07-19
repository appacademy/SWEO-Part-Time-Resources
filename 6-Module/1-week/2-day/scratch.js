// Truthy vs Falsy

if(!false) console.log('false is falsy');
if(!0) console.log('0 is falsy');
if(!"") console.log('"" is falsy');
if(!null) console.log('null is falsy');
if(!undefined) console.log('undefined is falsy');
if(!NaN) console.log('NaN is falsy');

if({}) console.log('{} is truthy');
if([]) console.log('[] is truthy');
