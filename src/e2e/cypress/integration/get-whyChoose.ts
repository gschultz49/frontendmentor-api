describe("Get WhyChoose", () => {
  const endpoint = "/easybank/get-whychoose";
  it("Get all WhyChoose", () => {
    const url = `${Cypress.env("baseUrl")}${endpoint}`;
    cy.log(`Testing url: ${url}`);
    cy.request(url).then((response) => {
      const firstWhyChoose = response.body[0];
      cy.log(`Received object: ${JSON.stringify(firstWhyChoose)}`);
      expect(firstWhyChoose).to.have.property("img");
      expect(firstWhyChoose).to.have.property("title");
      expect(firstWhyChoose).to.have.property("description");
    });
  });
});
