/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/


/* ============================== Phase 1 ============================== */
// IMPORTANT: Remember that fetch doesn't work in node, only in browser, so run these examples in the browser console
// ----------------raw fetch----------------
fetch("/products", {
    method: "POST",
    body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
});
// ----------------wrapping fetch request in an async function----------------
async function phase1() {
    // we add try/catch to places where a promise could potentially fail and reject, then catch the rejected error.
    try {
        const url = "/products"
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery"
        }
        const data = await fetch(url, options); //promise returned by fetch could pontentially fail, this is why we add try/catch (there are many reasons why a request might be unsuccessful)
        return data;
    } catch (error) {
        console.log("Error:", error);
    }
}
phase1();


/* ============================== Phase 2 ============================== */
async function phase2() {
    try {
        // wait for the request to finish and the promise's value (which is the response object from fetch) to be provided under resObjData
        const resObjData = await fetch("/products", {
            method: "POST",
            body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })

        const answers = {
            status: resObjData.status, // 200
            contentType: resObjData.headers.get('Content-Type'), // "text/html; charset=utf-8"
            redirected: resObjData.redirected, // true
            url: resObjData.url // /products/:id
        }

        console.log(answers);
        return answers;
    } catch (error) {
        console.log("Error:", error);
    }
}
phase2();
/* ============================== Phase 3 ============================== */

async function phase3() {
    try {
        const params = new URLSearchParams({
            name: "Caribbean Delight Coffee",
            description: "Made by Manatee Coffee",
            price: 11.99,
            categories: "grocery"
        });

        const resObjData = await fetch("/products", {
            method: "POST",
            body: params,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });

        const answers = {
            status: resObjData.status, // 200
            contentType: resObjData.headers.get('Content-Type'), // "text/html; charset=utf-8"
            redirected: resObjData.redirected, // true
            url: resObjData.url // /products/:id
        }

        console.log(answers);
        return answers;
    } catch (error) {
        console.log("Error:", error);
    }
}
phase3()


