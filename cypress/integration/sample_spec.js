describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });
});

// A test that will always fail
// describe("My First Test", () => {
//   it("Does not do much!", () => {
//     expect(true).to.equal(false);
//   });
// });

// To test this locally we need to run the server in one tab and run the tests in another tab
describe("Launch the website", () => {
  it("Visits the Kitchen Sink", () => {
    cy.visit("http://localhost:8080");
  });
});

describe("My First Test", function () {
  it("Visits page", function () {
    cy.visit("https://example.cypress.io");
    cy.contains("type");
  });
});
