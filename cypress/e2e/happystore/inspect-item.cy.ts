context("Inspect", () => {
  beforeEach(() => {
    cy.visit("https://automationteststore.com");
  });

  describe("Inspect automation store items with chain of commands", () => {
    it("Click on the first item using item header", () => {
      cy.get(".prdocutname").contains("Skinsheen Bronzer Stick").click();
    });
  });
});
