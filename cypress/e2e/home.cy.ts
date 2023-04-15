describe("home", () => {
  it("shows home page", () => {
    cy.visit("http://localhost:3000");
    cy.get("header").find('[data-cy="h1"]').should("be.visible");

    cy.get('[data-cy="search-container"]')
      .contains("Marvelous")
      .should("be.visible")
      .click();
  });
});
