describe("Phase 1: GET /dogs", function () {

    before(function () {
        cy.visit("localhost:5000/dogs", {failOnStatusCode: false});
    });

    it("displays the names of each of the dogs on the server", function () {

        cy.get("body ul li")
            .should("contain", "Fido")
            .and("contain", "Fluffy")
    })
});

describe("Phase 2: GET /dogs/new", function () {

    before(function () {
        cy.visit("localhost:5000/dogs/new", {failOnStatusCode: false});
    });

    it("displays the form to add a new dog to the server data", function () {

        cy.get("body h1")
            .should("contain", "Create a Dog")

        cy.get("form")
            .should("contain", "Name")
            .and("contain", "Age")
            .and("contain", "Submit")
    })
});

describe("Phase 3: GET /dogs/:dogId", function () {

    it("displays the name and age of the dog identified by the :dogId route parameter.", function () {
        cy.visit("localhost:5000/dogs/1", {failOnStatusCode: false});
        cy.get("body h1")
            .should("contain", "Fido")
        cy.get("body div")
            .should("contain", "Age: 2")

        cy.visit("localhost:5000/dogs/2", {failOnStatusCode: false});
        cy.get("body h1")
            .should("contain", "Fluffy")
        cy.get("body div")
            .should("contain", "Age: 10")
    })
});
