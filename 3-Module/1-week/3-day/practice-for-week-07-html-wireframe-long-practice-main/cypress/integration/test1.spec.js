describe("Phase 1: Creating individual HTML elements", function () {

    before(function () {
        cy.visit("./index.html");
    });

    describe("Top Navigation Bar", function () {

        it("Includes `home` link", function () {
            cy.get("a").contains("home")
                .should.exist;
        });

        it("Includes `Sign in` link", function () {
            cy.get("a").contains("Sign in")
                .should.exist;
        });

        it("Includes `Get started` button", function () {
            cy.get("button").contains("Get started")
                .should.exist;
        });
    });

    describe("Headings", function () {

        it("Includes one main heading", function () {
            cy.get("h1")
                .should("have.length", 1)
        });

        it("Includes two sub headings", function () {
            cy.get("h2:contains('heading')")
                .should("have.length", 2)
        });
    });

    describe("Main Image", function () {

        it("Includes one image", function () {
            cy.get("img")
                .should("have.length", 1)
        });
    });

    describe("Text paragraphs", function () {

        it("Includes three text paragraphs in total", function () {
            cy.get("p")
                .should("have.length", 3)
        });
    });

    describe("Links", function () {

        it("Includes six `text` links", function () {
            cy.get("a:contains('text')").should("have.length", 6)
        });
    });

    describe("External Links", function () {

        it("Includes two external links with new window icons", function () {
            cy.get("a > span.material-icons-outlined").should("have.length", 2)
        });
    });

    describe("Footer content", function () {

        it("Includes placeholder div for `home icon`", function () {
            cy.get("div").contains("home icon").should.exist;
        });

        it("Includes `About` link", function () {
            cy.get("a").contains("About").should.exist;
        });

        it("Includes `Help` link", function () {
            cy.get("a").contains("Help").should.exist;
        });
    });
});
