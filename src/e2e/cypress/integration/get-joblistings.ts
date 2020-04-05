describe("Get Job Listings", () => {
  const endpoint = "/joblistings/get-joblistings";
  it("Get all WhyChoose", () => {
    const url = `${Cypress.env("baseUrl")}${endpoint}`;
    cy.log(`Testing url: ${url}`);
    cy.request(url).then((response) => {
      const firstJobListing = response.body[0];
      cy.log(`Received object: ${JSON.stringify(firstJobListing)}`);
      expect(firstJobListing).to.have.property("id");
      expect(firstJobListing).to.have.property("company");
      expect(firstJobListing).to.have.property("logo");
      expect(firstJobListing).to.have.property("new");
      expect(firstJobListing).to.have.property("featured");
      expect(firstJobListing).to.have.property("position");
      expect(firstJobListing).to.have.property("role");
      expect(firstJobListing).to.have.property("level");
      expect(firstJobListing).to.have.property("postedAt");
      expect(firstJobListing).to.have.property("contract");
      expect(firstJobListing).to.have.property("location");
    });
  });
});
