console.log("-----------example 1-----------")
/*
// --------------reponse from the server-------
{
    "Hello": "World!",
    "april": [
        {
            "name": "chris chan"
        },
        {
            "name": "David Pratt"
        }
    ]
}
// --------------document body of response in JSON-------
{
    "body": {
        "hello": true,
        "april": [
            {
                "name": true
            }
        ]
    }
}

*/

console.log("-----------example 2-----------")

/*
// --------------reponse from the server-------
{
    "Hello": "World!",
        "april": {
        "cohort": [
            "Chris",
            "Aman",
            "Christopher"
        ],
            "active": true
    }
}
// --------------document body of response in JSON-------
{
    "body": {
        "Hello": true,
        "april": {
            "cohort": true
        },
        "active": true
    }
}
*/

console.log("-----------example 3-----------")
/*
// --------------reponse from the server-------
{
    "Hello": "World!",
        "april": {
        "cohort": [
            {
                "name": "Chris"
            },
            {
                "name": "Aman"
            },
            {
                "name": "Ricky"
            }
        ],
            "active": true
    }
}
// --------------document body of response in JSON-------
{
    "body": {
        "Hello": true,
        "april": {
            "cohort": [
                {
                    "name": true
                },
                {
                    "name": true
                }
            ],
            "active": true
        }
    }
}


*/