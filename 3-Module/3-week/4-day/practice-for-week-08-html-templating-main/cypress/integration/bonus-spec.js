describe("Bonus Phase 4: POST /dogs", function () {

    before(function () {
        cy.visit("localhost:5000/dogs/new", {failOnStatusCode: false});
    });

    it("uses the information in the body of the request to add a new dog to the server data.", function () {
        cy.get("input[name='name']").type("First new dog")
        cy.get("input[name='age']").type("12")
        cy.get("button[type='submit']").click()

        cy.get("body h1")
            .should("contain", "First new dog")
        cy.get("body div")
            .should("contain", "Age: 12")
    })
});

describe("Bonus Phase 5: GET /dogs/:dogId/edit", function () {

    it("displays the form to edit the dog in the server data identified by the `:dogId` route parameter", function () {
        cy.visit("localhost:5000/dogs/1/edit", {failOnStatusCode: false})
        cy.get(":nth-child(1) > input")
            .should("have.value", "Fido")

        cy.get(":nth-child(2) > input")
            .should("have.value", "2")

        cy.visit("localhost:5000/dogs/2/edit", {failOnStatusCode: false})
            cy.get(":nth-child(1) > input")
                .should("have.value", "Fluffy")

            cy.get(":nth-child(2) > input")
                .should("have.value", "10")
    })
});

describe("Bonus Phase 6: POST /dogs/:dogId", function () {

    before(function () {
        cy.visit("localhost:5000/dogs/new", {failOnStatusCode: false});

    });

    it("edit the dog in the server data identified by the `:dogId` route parameter", function () {
        cy.get("input[name='name']").type("Second new dog")
        cy.get("input[name='age']").type("17")
        cy.get("button[type='submit']").click()

        cy.visit("localhost:5000/dogs/4/edit", {failOnStatusCode: false})
        cy.get(":nth-child(1) > input")
            .clear()
            .type("Second Dog Edit")
        cy.get(":nth-child(2) > input")
            .clear()
            .type("000")
        cy.get("button[type='submit']").click()

        cy.get("body h1")
            .should("contain", "Second Dog Edit")
        cy.get("body div")
            .should("contain", "Age: 000")
    })
});

describe("Bonus Phase 7: Error Pages", function () {

    it("returns a `404` response and message when :dogId is not found", function () {
        cy.visit("localhost:5000/dogs/2348", {failOnStatusCode: false});
        cy.get("h1")
            .should("contain", "Dog Not Found")

        cy.visit("localhost:5000/dogs/2348/edit", {failOnStatusCode: false});
        cy.get("h1")
            .should("contain", "Dog Not Found")
    })

    it("ALREADY PASSING: returns a 'Page Not Found' message for all other invalid endpoints", function () {
        cy.visit("localhost:5000/cats", {failOnStatusCode: false});
        cy.get("h1")
            .should("contain", "Page Not Found")

        cy.visit("localhost:5000/puppies/7", {failOnStatusCode: false});
        cy.get("h1")
            .should("contain", "Page Not Found")
    });
});
