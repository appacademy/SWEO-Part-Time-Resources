const hashObj = {} //this is just pojo

hashObj["j"] = "john";

// console.log(hashObj);
hashObj["j"] = "jennifer"; //same key, different value assigned now lets see what happens to our hashmap

// console.log(hashObj);


//2 different keys with the same value
hashObj["jen"] = "jennifer";
console.log(hashObj);