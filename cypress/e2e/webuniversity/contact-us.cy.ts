context("Contact", () => {
  beforeEach(() => {
    cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
  });

  describe("test contact us form via webdriveruni", () => {
    it("should be able to submit a correct input form", () => {
      cy.document().should("have.property", "charset").and("eq", "UTF-8");
      cy.title().should("include", "WebDriver | Contact Us");
      cy.url().should("include", "contactus");
      cy.get('[name="first_name"]').type("Lucas");
      cy.get('[name="last_name"]').type("Silva");
      cy.get('[name="email"]').type("adm@adm.com");
      cy.get("textarea.feedback-input").type("Supp!");
      cy.get('[type="submit"]').click();
      cy.get("h1").should("have.text", "Thank You for your Message!");
    });

    it("should not be able to submit a empty input form", () => {
      cy.get('[name="first_name"]').type("Lucas");
      cy.get('[name="last_name"]').type("Silva");
      cy.get("textarea.feedback-input").type("Supp!");
      cy.get('[type="submit"]').click();
      cy.get("body").should("contain.text", "Error: Invalid email address");
    });
  });
});
