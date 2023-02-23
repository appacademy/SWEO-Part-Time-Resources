// // Object.entries 

// const myObj = {
//     name: "Bill",
//     job: "teacher",
//     children: ["Madelyn", "Finley"],
//     spouse: "Melissa",
//     location: "Pittsburgh",
//     bestFriend: "Melissa",
//     pets: {
//         wax: {
//             type: "cat",
//             color: "torty"
//         },
//         wayne: {
//             type: "cat",
//             color: "black"
//         }
//     }
// };

// const keys = Object.keys(myObj)

// // // console.log(keys)
// // console.log("What's in my object?")
// // keys.forEach(key => console.log(key, ":", myObj[key]))
// // for (const key in myObj){
// //     console.log(key, ":", myObj[key])
// // }
// // for (const index in keys){
// //     console.log("----index", index)
// //     const key = keys[index]
// //     console.log(key, ":", myObj[key])
// // }

// // const values = Object.values(myObj)
// // console.log(values)

// // const entries = Object.entries(myObj);
// // console.log(entries)
// // entries.forEach(([key, value])=> console.log("At the key of", key, "there is value", value))

// // function flatten(arr){
// //     debugger
// //     const result = [];
// //     if (!arr.length) return result;
// //     const current = arr[0]
// //     debugger
// //     if (Array.isArray(current)) result.push(...flatten(current))
// //     else result.push(current);
// //     debugger
// //     result.concat(flatten(arr.slice(1)))
// //     debugger
// //     return result
// // }

// // console.log(flatten([1,[2,[3]]]))


// var colors = ["Mauve", "Turquoise", "Cyan"];

// var choice = "Aquamarine"
// if (true) {
//     var choice = (function () {
//         var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
//         var color = colors[Math.floor(Math.random() * 100) % colors.length]
//         console.log("the color is:", color)
//         return color;
//     })()
// }
// console.log("---------------------------------")
// console.log(colors)
// console.log(choice)
// // console.log(color)

{
    let thing = "this"
    {
        let thing = "another thing"
        {
            let thing = "Once more"
        }
    }
}