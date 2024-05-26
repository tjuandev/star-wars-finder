class CategorySearch {
  elements = {
    peopleCategory: () => cy.get('[data-cy="category-people"]'),
    searchInput: () => cy.get('[data-cy="search-input"]')
  }
}

describe('Category Search', () => {
  it('Should search for people category', () => {
    cy.visit('/')
    const categorySearch = new CategorySearch()
    const { peopleCategory, searchInput } = categorySearch.elements

    peopleCategory().click()
    searchInput().type('Luke Skywalker').type('{enter}')

    const expectedResult = cy.contains('Luke Skywalker')
    expectedResult.should('be.visible')
  })
})
