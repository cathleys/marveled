describe("home", () => {
  it("tests home", () => {
    cy.visit("http://localhost:3000");
    cy.get("main").find("button").contains("Hellow");
  });
});
