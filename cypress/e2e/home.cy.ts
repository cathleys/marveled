describe("home", () => {
  it("should have header banner", () => {
    cy.visit("http://localhost:3000");
    cy.get("header").find('[data-cy="h1"]').should("be.visible");
  });
});
