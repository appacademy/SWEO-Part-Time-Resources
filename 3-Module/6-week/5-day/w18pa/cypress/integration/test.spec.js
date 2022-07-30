describe("Element selection, event handling, and local storage practice", function () {
  before(function () {
    cy.visit("index.html");
  });

  describe("Problem 1 (2 points)", function() {
    it("turns a circle blue", function () {
      cy.get("#blue-border-circle")
        .should('not.have.attr', 'class', 'blue-fill');
      cy.get("#make-circle-blue")
        .click();
      cy.get("#blue-border-circle")
        .should('have.class', 'blue-fill');
    });
  });

  describe("Problem 2 (2 points)", function () {
    it("prevents checking", function () {
      cy.get("#will-not-check")
        .click();
      cy.get('#will-not-check')
        .should('not.be.checked');
    });
  });

  describe("Problem 3 (2 points)", function () {
    it("appends an image to a square and changes text", function () {
      cy.get("#bananas-image-div img")
        .should('not.exist');
      cy.get('#change-bananas-status')
        .click();
      cy.get("#bananas-image-div img")
        .should('exist');
      cy.get("#bananas-image-div img")
        .should('have.attr', 'src', './images/no-bananas.png');
      cy.get("#bananas-div")
        .contains('No Bananas Today!')
    });
  });

  describe("Problem 4 (2 points)", function () {
    it("adds cookie and persists value", function () {
      cy.get('#fav-cookie')
        .clear()
        .type('chocolate chip');
      cy.get('#store-cookie')
        .click();
      cy.getCookie('favCookie')
        .should('have.property', 'value', 'chocolate chip');
      cy.reload();
      cy.get('#fav-cookie')
        .should('have.value', 'chocolate chip');
    });
  });

  describe("Problem 5 (2 points)", function () {
    it("adds list element to list", function () {
      cy.get('#pie-type')
        .clear();
      cy.get('#save-pie')
        .click();
      cy.get('.pie-list li')
        .should('have.length', 0);
      cy.get('#pie-type')
        .type('blueberry');
      cy.get('#save-pie')
        .click();
      cy.get('.pie-list li')
        .should('have.length', 1);
      cy.get('.pie-list li:nth-child(1)')
        .contains('blueberry');
      cy.get('#pie-type')
        .should('be.empty');
    });
  });

  describe("Problem 6 (2 points)", function () {
    it("persists text via localstorage", function () {
      cy.get('#fav-ice-cream')
        .clear();
      cy.reload();
      cy.get('#fav-ice-cream')
        .type('rocky road');
      cy.get('#save-ice-cream')
        .click();
      cy.reload();
      cy.get('#fav-ice-cream')
        .should('have.value', 'rocky road');
    });
  });

  describe("Problem 7 (2 points)", function () {
    it("concatenates apples/oranges or clears basket on button press", function () {
      cy.get('#add-apple')
        .click();
      
      cy.get('#total-fruit')
        .contains(1);

      cy.get('#add-orange')
        .click();
      
      cy.get('#total-fruit')
        .contains(2);
      
      cy.get('#reset-basket')
        .click();

      cy.get('#total-fruit')
        .contains(0);
    });
  });

  describe("Problem 8 (2 points)", function () {
    it("prevents bubbling", function () {
      cy.get('#bubble-maker')
        .click();

      cy.get('#bubble-holder')
        .should('not.have.attr', 'style');
    });
  });
});

describe("Problem 9", function () {
  it("fetches and displays data", function () {
    cy.get('#dictionary-fetch')
      .click();

    cy.get('#results-area ul').children()
      .should('have.length', 2)
      .should('contain', `A reference work with a list of words from one or more languages, normally ordered alphabetically, explaining each word's meaning, and sometimes containing information on its etymology, pronunciation, usage, translations, and other data.`)
  });
});