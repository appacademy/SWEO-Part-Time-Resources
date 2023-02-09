describe("Element selection and manipulation", function () {
    before(function () {
        cy.visit("index.html");
    });

    it("1. Replaces the 1 with a button that says 1", function () {
        cy.get("#problem-one")
            .should("not.have", "text", "1")
        cy.get("#problem-one button")
            .should("contain", "1")
    })

    it("2. Change the background to orange, text color to white, and add a dashed black 5px background", function () {
        cy.get(".square.two")
            .should("have.css", "color", "rgb(255, 255, 255)")
            .should("have.css", "background-color", "rgb(255, 165, 0)")
            .should("have.css", "border", "5px dashed rgb(0, 0, 0)")
    })

    it("3. Double the width and font size of all squares that have the 'plus' class", function () {
        cy.get("div.plus")
            .should("have.css", "width", "100px")
            .should("have.css", "font-size", "60px")
        cy.get("#problem-one")
            .should("have.css", "width", "50px")
            .should("have.css", "font-size", "30px")
    })

    it("4. Replace the class name of 'square' with 'round' and add an id of 'problem-four'", function () {
        cy.get("#problem-four")
            .should("have.css", "border-radius", "50px")
            .should("have.css", "color", "rgb(240, 248, 255)")
            .should("have.css", "background-color", "rgb(0, 0, 255)")   
    })

    it("5. Remove boxes 5, 6, and 7", function () {
        cy.get("div#root").children()
            .should("have.length", 5)
            .should("not.contain", 5)
            .should("not.contain", 6)
            .should("not.contain", 7)
            .should("contain", 8)
    })




})
