describe("Phase 2: Grouping elements with non-semantic wrappers", function () {

    before(function () {
        cy.visit("./index.html");
    });

    describe("Top Navigation Bar Wrapper", function () {

        it("Includes `home` link within a div#header wrapper", function () {
            cy.get("div#header a").contains("home")
                .should.exist;
        });

        it("Includes `Sign in` link within a div#header wrapper", function () {
            cy.get("div#header a").contains("Sign in")
                .should.exist;
        });

        it("Includes `Get started` button within a div#header wrapper", function () {
            cy.get("div#header button").contains("Get started")
                .should.exist;
        });

        it("Includes six `text` links within a div#header wrapper", function () {
            cy.get("div#header a:contains('text')").should("have.length", 6)
        });
    });

    describe("Title Section Wrapper", function () {

        it("Includes one main heading within a div#title wrapper", function () {
            cy.get("div#title h1")
                .should("have.length", 1)
        });

        it("Includes one image within a div#title wrapper", function () {
            cy.get("div#title img")
                .should("have.length", 1)
        });

        it("Includes one text paragraph within a div#title wrapper", function () {
            cy.get("div#title p")
                .should("have.length", 1)
        });
    });


    describe("Article Wrappers", function () {

        it("Includes two div.article article wrappers", function () {
            cy.get("div.article")
                .should("have.length", 2)
        });

        it("Each article wrapper includes a sub heading and text paragraph", function () {
            cy.get("div.article#article-1 h2").should.exist;
            cy.get("div.article#article-1 p").should.exist;

            cy.get("div.article#article-2 h2").should.exist;
            cy.get("div.article#article-2 p").should.exist;
        });
    });

    describe("External Links Wrapper", function () {

        it("Includes `more articles` text", function () {
            cy.get("div.external-links").contains("more articles")
                .should.exist;
        });

        it("Includes two links with icons within wrapper", function () {
            cy.get("div.external-links a > span.material-icons-outlined")
                .should("have.length", 2)
        });
    });

    describe("Footer Content Wrapper", function () {

        it("Includes placeholder div for `home icon` within wrapper", function () {
            cy.get("div#footer div").contains("home icon").should.exist;
        });

        it("Includes `About` link within wrapper", function () {
            cy.get("div#footer a").contains("About").should.exist;
        });

        it("Includes `Help` link within wrapper", function () {
            cy.get("div#footer a").contains("Help").should.exist;
        });
    });
});
