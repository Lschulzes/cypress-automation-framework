context("Contact", () => {
  beforeEach(() => {
    cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
  });

  describe("test contact us form via webdriveruni", () => {
    it("should be able to submit a correct input form", () => {
      cy.get('[name="first_name"]').type("Lucas");
      cy.get('[name="last_name"]').type("Silva");
      cy.get('[name="email"]').type("adm@adm.com");
      cy.get("textarea.feedback-input").type("Supp!");
      cy.get('[type="submit"]').click();
    });

    it("should not be able to submit a empty input form", () => {
      cy.get('[name="first_name"]').type("Lucas");
      cy.get('[name="last_name"]').type("Silva");
      cy.get("textarea.feedback-input").type("Supp!");
      cy.get('[type="submit"]').click();
    });
  });
});
