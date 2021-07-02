// @ts-nocheck
/// <reference types="cypress" />

const additionalFiltersLabels = [
  'Transaction Provider Org',
  'Transaction Receiver Org',
  'Participating Organisation',
];

describe('Query Builder - Additional filters', function () {
  it('should load the page', function () {
    cy.visit('/querybuilder/additional-filters');
  });

  // it('should show the correct text', function () {
  //   cy.findByText('Additional Filters').click({ force: true });
  //   additionalFiltersLabels.forEach((text) => {
  //     cy.findByText(text).should('exist');
  //   });
  //   comparePlaceholderText();
  // });
  //
  // it('should show navigations', function () {
  //   cy.findByTestId('AppBar').should('exist');
  //   cy.get('[href="/querybuilder/core-filters"]').should('exist');
  //   cy.get('.active');
  //   cy.get('[href="/querybuilder/output-format"]').should('exist');
  //   cy.get('[href="/querybuilder/results"]').should('exist');
  // });
  //
  // it('should be able to select all fields', function () {
  //   testSelect('All transaction provider organisations', 13, 2);
  //   testSelect('All transaction receiver organisations', 14, 1);
  //   testSelect('All participating organisations', 15, 2);
  // });
  //
  // it('should be able to add a filter', function () {
  //   cy.get('.MuiGrid-grid-md-4 > .MuiButtonBase-root').click({ force: true });
  //   cy.get(
  //     ':nth-child(3) > .MuiListItemText-root > .MuiTypography-root'
  //   ).click({ force: true });
  //   cy.get('body').click({ force: true });
  //   cy.contains('Default language').should('exist');
  // });
  //
  // it('should be able to navigate to the next page', function () {
  //   cy.get(':nth-child(2) > a > .MuiButtonBase-root').click({ force: true });
  // });
  //
  // it('make screenshot', () => {
  //   cy.get('body').happoScreenshot({ component: 'Additional Filters' });
  // });
});

function comparePlaceholderText() {
  cy.findByText('All transaction provider organisations').should('exist');
  cy.findByText('All transaction receiver organisations').should('exist');
  cy.findByText('All participating organisations').should('exist');
}

function testSelect(
  selector: string,
  selectNumber: number,
  optionNumber: number
) {
  cy.findByText(selector).click({ force: true });

  cy.get(`#react-select-${selectNumber}-option-${optionNumber}`).then(
    ($span) => {
      const selectText: string = $span.text();
      cy.get(`#react-select-${selectNumber}-option-${optionNumber}`).click({
        force: true,
      });
      cy.wait(5000);
      cy.get(`[class*=multiValue]`).last().should('have.text', selectText);
    }
  );
}
