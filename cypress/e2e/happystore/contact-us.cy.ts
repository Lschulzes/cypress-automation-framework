context("Contact", () => {
  beforeEach(() => {
    cy.visit("https://automationteststore.com");
  });

  describe("test contact us form via webdriveruni", () => {
    it("should be able to submit a correct input form", () => {
      cy.get("a[href$='contact']").click();
      cy.get('[name="first_name"]').type("Lucas");
      cy.get("#ContactUsFrm_email").type("adm@adm.com");
      cy.get("#ContactUsFrm_enquiry").type("Supp!");
      cy.get("button[type='submit'][title='Submit']").click();
    });
  });
});
