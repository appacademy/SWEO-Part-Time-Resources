//FIRST PRACTICE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function stretch() {
    // Your code here
    return new Promise(resolve => {
     setTimeout(() =>{
      console.log("done stretching")
       resolve()
     },1000)
    })
  }

  function runOnTreadmill() {
    // Your code here
    return new Promise(resolve => {
      setTimeout(() =>{
       console.log("done running on treadmill")
        resolve()
      },500)
     })
  }

  function liftWeights() {
    // Your code here
    return new Promise(resolve => {
      setTimeout(() =>{
       console.log("done lifting weights")
        resolve()
      },2000)
     })
  }

  // function workout() {
  //   // Your code here
  //   // Promise.all([stretch(), runOnTreadmill(), liftWeights()])
  //   //   .then(() => console.log("done working out"))
  //   //   .catch(error => console.log(error))
  //   stretch()
  //     .then(runOnTreadmill)
  //     .then(liftWeights)
  //     .then(() => console.log("Done working out"))
  // }

  async function workout(){
    try{
      await stretch()
      await runOnTreadmill()
      await liftWeights()
      console.log("done workout out")
    } catch(err){
      console.log(err)
    }

  }

  function stretch(timeLeft) {
    // refactor your code from phase 1
    // Your code here
    return new Promise((resolve, reject) =>{
      if(timeLeft < 1000){
        reject("you don't have time to stretch")
      } else{
        timeLeft -= 1000
        setTimeout(() =>{
          console.log("done stretching")
          resolve(timeLeft)
        },1000)
      }
    })
  }


  function runOnTreadmill(timeLeft) {
    // refactor your code from phase 1
    // Your code here
    return new Promise((resolve, reject) =>{
      if(timeLeft < 500){
        reject("you don't have time to run")
      } else{
        timeLeft -= 500
        setTimeout(() =>{
          console.log("done running on treadmill")
          resolve(timeLeft)
        },500)
      }
    })
  }


  function liftWeights(timeLeft) {
    // refactor your code from phase 1
    // Your code here
    return new Promise((resolve, reject) =>{
      if(timeLeft < 2000){
        reject("you don't have time to lift weights")
      } else{
        timeLeft -= 2000
        setTimeout(() =>{
          console.log("done lifting weights")
          resolve(timeLeft)
        },2000)
      }
    })
  }


  // function workout(totalTime) {
  //   // refactor your code from phase 1
  //   // Your code here
  //   stretch(totalTime)
  //     .then(timeLeftAfterStretching => runOnTreadmill(timeLeftAfterStretching))
  //     .then(timeLeftAfterRunning => liftWeights(timeLeftAfterRunning))
  //     .then(res => console.log(`done working out with ${res/1000} seconds left`))
  //     .catch(err => console.log(`Error: ${err}`))
  //   }
  async function workout(totalTime){
    try{
      totalTimeAfterStretch = await stretch(totalTime)
      totalTimeAfterRun = await runOnTreadmill(totalTimeAfterStretch)
      totalTimeAfterLift = await liftWeights(totalTimeAfterRun)
      console.log(`done working out with ${totalTimeAfterLift/1000} seconds left`)
    } catch(e){
      console.log(e)
    }
  }

  //SECOND PRACTICE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  export function getAllDogs() {
    // Your code here
    return fetch("/dogs")

}

export function getDogNumberTwo() {
    // Your code here
    return fetch("/dogs/2")
}

export function postNewDog() {
    // Your code here
    let urlParams = new URLSearchParams({name: "Fido", age: 1})
    // console.log(urlParams)
    return fetch("/dogs", {method: "POST",
    headers: {"Content-Type": "application/x-www-form-urlencoded"},
    body: urlParams})
}

export function postNewDogV2(name, age) {
     // Your code here
     let urlParams = new URLSearchParams({name, age})
     // console.log(urlParams)
     return fetch("/dogs", {method: "POST",
     headers: {"Content-Type": "application/x-www-form-urlencoded"},
     body: urlParams})
}

export function deleteDog(id) {
      // Your code here
      return fetch(`dogs/${id}/delete`, {
        method: "POST",
        headers:{
            "AUTH": "ckyut5wau0000jyv5bsrud90y"
        }
      })
}

  //THIRD PRACTICE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/* =============== 1. Print the status code of the response =============== */

// Your code here

fetch("/products")
    .then(res => console.log(res.status))

/* ====== 2. Print true if the status of the response was successful ====== */

// Your code here
fetch("/products")
    .then(res => console.log(res.ok))


/* =================== 3. Print the Content-Type Header =================== */

// Your code here

fetch("/products")
    .then(res => console.log(res.headers.get("Content-Type")))

/* ============== 4. Print the body of the response as text =============== */

// Your code here
fetch("/products")
    .then(res => res.text())
    .then(resBody => console.log(resBody))
