describe("Phase 3: Refactoring to use semantic HTML wrappers", function () {

    before(function () {
        cy.visit("./index.html");
    });

    describe("Top Navigation Bar", function () {

        it("Includes `home` and `Sign in` links within a header element", function () {
            cy.get("header a").contains("home")
                .should.exist;
            cy.get("header a").contains("Sign in")
                .should.exist;
        });

        it("Includes `Get started` button within a header element", function () {
            cy.get("header button").contains("Get started")
                .should.exist;
        });

        it("Includes six `text` links within a nav element", function () {
            cy.get("header nav a:contains('text')").should("have.length", 6)
        });
    });

    describe("Title Section", function () {

        it("Includes one main heading within a section element", function () {
            cy.get("section h1")
                .should("have.length", 1)
        });

        it("Includes one image within a section element", function () {
            cy.get("section img")
                .should("have.length", 1)
        });

        it("Includes one text paragraph within a section element", function () {
            cy.get("section p")
                .should("have.length", 1)
        });
    });


    describe("Articles", function () {

        it("Includes two article elements", function () {
            cy.get("article")
                .should("have.length", 2)
        });

        it("Each article element includes a sub heading and text paragraph", function () {
            cy.get("article h2")
                .should("have.length", 2)
            cy.get("article p")
                .should("have.length", 2)
        });
    });

    describe("Aside - External Links", function () {

        it("Includes `more articles` text in an aside element", function () {
            cy.get("aside").contains("more articles")
                .should.exist;
        });

        it("Includes two links with icons within aside element", function () {
            cy.get("aside a > span.material-icons-outlined")
                .should("have.length", 2)
        });
    });

    describe("Footer", function () {

        it("Includes placeholder div for `home icon` within footer element", function () {
            cy.get("footer div").contains("home icon").should.exist;
        });

        it("Includes `About` link within footer element", function () {
            cy.get("footer a").contains("About").should.exist;
        });

        it("Includes `Help` link within footer element", function () {
            cy.get("footer a").contains("Help").should.exist;
        });
    });
});
