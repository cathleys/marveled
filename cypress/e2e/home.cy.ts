describe("home", () => {
  it("should have header banner", () => {
    cy.visit("http://localhost:3000");
    cy.get("main").find('[data-cy="h1"]').should("be.visible");
  });
});
