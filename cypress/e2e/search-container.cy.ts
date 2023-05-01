describe("Search Container", () => {
  it("types hero name in search bar", () => {
    cy.visit("http://localhost:3000");
    cy.get("header").find('[data-cy="h1"]').should("be.visible");

    cy.get('[data-cy="search-container"]')
      .contains("Marvelous")
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
  });
});
