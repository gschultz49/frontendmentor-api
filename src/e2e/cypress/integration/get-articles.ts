describe("Get Articles", () => {
  const endpoint = "/easybank/get-articles";
  it("Get all Articles", () => {
    const url = `${Cypress.env("baseUrl")}${endpoint}`;
    cy.log(`Testing url: ${url}`);
    cy.request(url).then((response) => {
      const firstArticle = response.body[0];

      cy.log(`Received object: ${JSON.stringify(firstArticle)}`);

      expect(firstArticle).to.have.property("img");
      expect(firstArticle).to.have.property("author");
      expect(firstArticle).to.have.property("title");
      expect(firstArticle).to.have.property("description");
    });
  });
});
