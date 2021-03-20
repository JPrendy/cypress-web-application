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

describe("My First Test", () => {
  it("Visits the Kitchen Sink", () => {
    cy.visit("http://localhost:8080/");
  });
});
