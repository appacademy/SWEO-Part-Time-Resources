describe("Media Queries", function () {

    before(function () {
        cy.visit("index.html");

        Cypress.Commands.add("setCssMedia", (media) => {
            cy.log(`Setting CSS media to ${media}`)
            Cypress.automation("remote:debugger:protocol", {
                command: "Emulation.setEmulatedMedia",
                params: {
                    media
                },
            })
        })
    });

    describe("Phase 1: Layout Adjustments", function () {

        it("Extremely Narrow (already implemented)", function () {
            cy.viewport(450, 1000)
                .get(".page")
                    .should("have.css", "flex-direction", "column")
                .get(".content")
                    .should("have.css", "flex-direction", "column")
                .get(".sidebar")
                    .should("have.css", "flex-direction", "row")
                    .should("have.css", "justify-content", "center")
        });

        it("Narrow (already implemented)", function () {
            cy.viewport(850, 1000)
                .get(".page")
                    .should("have.css", "flex-direction", "column")
                .get(".content")
                    .should("have.css", "flex-direction", "column")
                .get(".sidebar")
                    .should("have.css", "flex-direction", "row")
                    .should("have.css", "justify-content", "center")
        });

        it("Moderate", function () {
            cy.viewport(851, 1000)
                .get(".page")
                    .should("have.css", "flex-direction", "column")
                .get(".content")
                    .should("have.css", "flex-direction", "row")
            cy.viewport(1219, 1000)
                .get(".page")
                    .should("have.css", "flex-direction", "column")
                .get(".content")
                    .should("have.css", "flex-direction", "row")
        });


        it("Wide", function () {
            cy.viewport(1220, 1000)
                .get(".page")
                    .should("have.css", "flex-direction", "row")
                .get(".content")
                    .should("have.css", "flex-direction", "row")
        });

        it("Extremely Wide", function () {
            cy.viewport(1700, 1000)
                .get(".page")
                    .should("have.css", "flex-direction", "row")
                .get(".content")
                    .should("have.css", "flex-direction", "row")
        });

        it("CHALLENGE: Layout variations were made without changing default sidebar layout", function () {
            cy.viewport(851, 1000)
                .get(".sidebar")
                    .should("have.css", "flex-direction", "row")
                    .should("have.css", "justify-content", "center")
            cy.viewport(1700, 1000)
                .get(".sidebar")
                    .should("have.css", "flex-direction", "row")
                    .should("have.css", "justify-content", "center")
        });
    });

    describe("Phase 2: Printing", function () {

        it("Print view includes only the story, with white background", () => {
            cy.setCssMedia("print");
            cy.get(".story-box")
                .should("have.css", "background-color", "rgb(255, 255, 255)")
            cy.get("header")
                .should("not.be.visible")
            cy.get(".sidebar")
                .should("not.be.visible")
        })

        it("Screen view still includes all elements as expected", () => {
            cy.setCssMedia("screen");
            cy.get(".story-box")
                .should("have.css", "background-color", "rgb(108, 84, 123)")
            cy.get("header")
                .should("be.visible")
            cy.get(".sidebar")
                .should("be.visible")
            cy.get(".image-box")
                .should("be.visible")
        })

    });

    describe("Bonus", function () {

        it("Includes the image while printing", () => {
            cy.setCssMedia("print");
            cy.get(".image-box")
                .should("be.visible")
        })

    });

});
