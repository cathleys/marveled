describe("Search results", () => {
  it("types hero name in search bar", () => {
    cy.visit("http://localhost:3000/home");
    cy.get("header").find('[data-cy="h1"]').should("be.visible");

    cy.get('[data-cy="logo"]')
      .contains("Marveled")
      .should("be.visible")
      .click();

    cy.get('[data-cy="search-bar"]')
      .type("iron man")
      .should(
        "have.value",
        "iron man",
        `/characters?nameStartsWith=${encodeURIComponent("iron man")}`
      );

    cy.get('[data-cy="search-button"]').click();

    describe("shows the loading state", () => {
      cy.get('[data-cy="loading-spinner"]').should("be.visible");
    });
  });
});
