context("Contact", () => {
  beforeEach(() => {
    cy.visit("https://automationteststore.com");
  });

  describe("test contact us form via automationteststore", () => {
    it("should be able to submit a correct input form", () => {
      cy.get("a[href$='contact']")
        .click()
        .then((cur) => cy.log(cur.text()));
      cy.get('[name="first_name"]').type("Lucas");
      cy.get("#ContactUsFrm_email").type("adm@adm.com");
      cy.get("#ContactUsFrm_email").should("have.attr", "name", "email");
      cy.get("#ContactUsFrm_enquiry").type("Supp!");
      cy.get("button[type='submit'][title='Submit']").click();
      cy.get(".mb40 > :nth-child(3)").should(
        "have.text",
        "Your enquiry has been successfully sent to the store owner!"
      );
    });
  });
});
