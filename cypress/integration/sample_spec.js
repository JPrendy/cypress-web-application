describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });
});

// describe('My First Test', () => {
// it('Does not do much!', () => {
//     expect(true).to.equal(false)
// })
// })

// describe("Launch the website", () => {
//   it("Visits the Kitchen Sink", () => {
//     cy.visit("http://localhost:8080");
//   });
// });

describe('My First Test', function() {
  it('Visits page', function() {
    cy.visit('https://example.cypress.io')
    cy.contains('type')
  })
})
