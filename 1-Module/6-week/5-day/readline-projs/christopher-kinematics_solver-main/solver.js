const readline = require("readline");

/**
 * Outputs background information about kinematics suitable for laypeople
 */
let background = () => {
  console.log("Kinematics is often the first subject taught in a high school physics class.");
  console.log("In kinematics, we explore how velocity and position change under a constant acceleration.");
  console.log("We will consider five kinematic variables:");
  console.log("Initial velocity vi, final velocity vf, change in position x,")
  console.log("duration time t, and acceleration a.")
  console.log("The rule is: if we know three of these five, we can solve for the other two.")
  console.log("This solver will take three known variables and solve for the remaining two for you.")
  console.log("")
  console.log("If a variable is unknown, enter \"z\" to indicate an unknown.")
}

let populateVars = () => {
  let vars = {
    vi: "z",
    vf: "z",
    x: "z",
    t: "z",
    a: "z"
  }
  let knownVars = 0;

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question("Enter initial velocity: ", (vi) => {
    vars.vi = vi;
    if (vi !== "z") {
      knownVars++;
    }
    rl.question("Enter final velocity: ", (vf) => {
      vars.vf = vf;
      if (vf !== "z") {
        knownVars++;
      }
      rl.question("Enter displacement: ", (x) => {
        vars.x = x;
        if (x !== "z") {
          knownVars++;
        }
        if (knownVars === 3) {
          rl.close();
          solve(vars);
        }
        else {
          rl.question("Enter time of duration: ", (t) => {
            vars.t = t;
            if (t !== "z") {
              knownVars++;
            }
            if (knownVars === 3) {
              rl.close();
              solve(vars)
            }
            else {
              rl.question("Enter acceleration: ", (a) => {
                vars.a = a;
                if (a !== "z") {
                  knownVars++;
                }
                if (knownVars === 3) {
                  rl.close();
                  solve(vars)
                }
                else {
                  console.log("We do not know at least three out of five variables. Solver will exit.")
                  rl.close();
                }

              });
            }

          });
        }
      });
    });

  });



  //rl.close();
}

/**
 * Given a set of three know kinematic variable and two unknown kinematic variables,
 * solve for the remaining kinematic variables.
 * @param {Kinematic Variable Object} kVars
 */
let solve = (kVars) => {
  //console.log(kVars)
  //First, sanitize the input.
  for (let i in kVars) {
    if (kVars[i] !== "z") {
      kVars[i] = Number(kVars[i])
    }
  }

  //since there are 5 variables and three choices, there are 10 possible combinations
  //of known variables to account for. That's (5 choose 3) by the way. Thus, there
  //are 10 routes the code below might take. Don't get lost in the if tree.
  if (kVars.vi !== "z" && kVars.vf !== "z" && kVars.x !== "z") {
    //console.log("Case 1")
    kVars.a = (kVars.vf ** 2 - kVars.vi ** 2) / (2 * kVars.x);
    kVars.t = (kVars.vf - kVars.vi) / kVars.a;
    if (kVars.t < 0) {
      kVars.a = "No physical solution with given parameters.";
      kVars.t = "No physical solution with given parameters.";
    }
  }
  else if (kVars.vi !== "z" && kVars.vf !== "z" && kVars.t !== "z") {
    kVars.a = (kVars.vf - kVars.vi) / kVars.t;
    kVars.x = (kVars.vi + kVars.vf) * kVars.t / 2;
  }
  else if (kVars.vi !== "z" && kVars.vf !== "z" && kVars.a !== "z") {
    kVars.t = (kVars.vf - kVars.vi) / kVars.a;
    kVars.x = (kVars.vi + kVars.vf) * kVars.t / 2;
    if (kVars.t < 0) {
      kVars.x = "No physical solution with given parameters.";
      kVars.t = "No physical solution with given parameters.";
    }
  }
  else if (kVars.vi !== "z" && kVars.x !== "z" && kVars.t !== "z") {
    kVars.vf = kVars.x / kVars.t * 2 - kVars.vi;
    kVars.a = (kVars.vf ** 2 - kVars.vi ** 2) / (2 * kVars.x);
  }
  else if (kVars.vi !== "z" && kVars.x !== "z" && kVars.a !== "z") {
    //This is just the quadratic equation, choose the positive solution
    let t1 = (-1 * kVars.vi + Math.sqrt(kVars.vi ** 2 + (4 * 0.5 * kVars.a * kVars.x))) / (2 * 0.5 * kVars.a);
    let t2 = (-1 * kVars.vi + Math.sqrt(kVars.vi ** 2 + (4 * 0.5 * kVars.a * kVars.x))) / (2 * 0.5 * kVars.a);
    if (t1 > t2) { kVars.t = t1 }
    else { kVars.t = t2 }
    kVars.vf = kVars.x / kVars.t * 2 - kVars.vi;
    if (kVars.t < 0) {
      kVars.vf = "No physical solution with given parameters.";
      kVars.t = "No physical solution with given parameters.";
    }
  }
  else if (kVars.vi !== "z" && kVars.t !== "z" && kVars.a !== "z") {
    //TODO
    kVars.vf = kVars.vi + kVars.a * kVars.t;
    kVars.x = (kVars.vi + kVars.vf) * kVars.t / 2;
  }
  else if (kVars.vf !== "z" && kVars.x !== "z" && kVars.t !== "z") {
    kVars.vi = kVars.x / kVars.t * 2 - kVars.vf;
    kVars.a = (kVars.vf ** 2 - kVars.vi ** 2) / (2 * kVars.x);
  }
  else if (kVars.vf !== "z" && kVars.x !== "z" && kVars.a !== "z") {
    let t1 = (-1 * kVars.vf + Math.sqrt(kVars.vf ** 2 - (4 * 0.5 * kVars.a * kVars.x))) / (2 * -0.5 * kVars.a);
    let t2 = (-1 * kVars.vf + Math.sqrt(kVars.vf ** 2 - (4 * 0.5 * kVars.a * kVars.x))) / (2 * -0.5 * kVars.a);
    if (t1 > t2) { kVars.t = t1 }
    else { kVars.t = t2 }
    kVars.vi = kVars.x / kVars.t * 2 - kVars.vf;
    if (kVars.t < 0) {
      kVars.vi = "No physical solution with given parameters.";
      kVars.t = "No physical solution with given parameters.";
    }
  }
  else if (kVars.vf !== "z" && kVars.t !== "z" && kVars.a !== "z") {
    kVars.vi = kVars.vf - kVars.a * kVars.t;
    kVars.x = (kVars.vi + kVars.vf) * kVars.t / 2;
  }
  else if (kVars.x !== "z" && kVars.t !== "z" && kVars.a !== "z") {
    kVars.vi = (kVars.x - 0.5 * kVars.a * (kVars.t ** 2)) / kVars.t;
    kVars.vf = kVars.x / kVars.t * 2 - kVars.vi;
  }
  else {
    console.log("Error 01, report bug to developer.")
  }

  //Purge nonphysical results
  for (let i in kVars) {
    if (isNaN(kVars[i])) {
      kVars[i] = "No physical solution with given parameters."
    }
  }

  //Report final answer
  console.log("The final solution set is:");
  for (let i in kVars) {
    console.log(i + ": " + kVars[i])
  }
}


background();
populateVars();
