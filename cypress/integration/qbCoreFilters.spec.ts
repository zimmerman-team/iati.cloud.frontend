// @ts-nocheck
/// <reference types="cypress" />

const coreFiltersLabels = [
  'Reporting Organisation',
  'Type of Reporting Organisation',
  'Secondary Reporter?',
  'Sector Category',
  'Sector Vocabulary',
  'Sector',
  'Recipient Country',
  'Recipient Region',
  'Filter by Date?',
  'Activity / Budget start date (from)',
  'Activity / Budget end date (from)',
  'Activity / Budget start date (to)',
  'Activity / Budget end date (to)',
];

describe('Query Builder - core filters', function () {
  it('should load the page', function () {
    cy.visit('/querybuilder/core-filters');
  });

  // it('should show the correct text', function () {
  //   coreFiltersLabels.forEach((text) => {
  //     cy.get(`[label= "${text}"]`).should('exist');
  //   });
  //   comparePlaceholderText();
  // });
  //
  // it('should show navigations', function () {
  //   cy.findByTestId('AppBar').should('exist');
  //   cy.get('.active');
  //   cy.get('[href="/querybuilder/additional-filters"]').should('exist');
  //   cy.get('[href="/querybuilder/output-format"]').should('exist');
  //   cy.get('[href="/querybuilder/results"]').should('exist');
  // });
  //
  // // it('should get component', function () {
  // //   cy.get('a > .MuiButtonBase-root').click({ force: true });
  // // });
  //
  // // todo: implement test for date picker (when MUI datapicker has been implememented)
  // it('should be able to select all fields', function () {
  //   testSelect('.organisationNameSelect', 2, 0);
  //   testSelect('.organisationTypeSelect', 3, 0);
  //   testSelect('.secondaryReporterSelect', 4, 0);
  //   testSelect('.sectorCategorySelect', 5, 0);
  //   testSelect('.sectorVocabularySelect', 6, 0);
  //   testSelect('.organisationSectorSelect', 7, 0);
  //   testSelect('.recipientCountrySelect', 8, 0);
  //   testSelect('.recipientRegionSelect', 9, 0);
  // });
  //
  // // it('should be able to navigate to the next page', function () {
  // //   cy.get('a > .MuiButtonBase-root').click({ force: true });
  // // });
  //
  // it('make screenshot', () => {
  //   cy.get('body').happoScreenshot({
  //     component: 'Core filters',
  //   });
  // });

  function comparePlaceholderText() {
    cy.get('.organisationNameSelect').should('have.text', 'All organisations');
    cy.get('.organisationTypeSelect').should(
      'have.text',
      'All organisation types'
    );
    cy.get('.secondaryReporterSelect').should('have.text', 'All options');
    cy.get('.sectorCategorySelect').should('have.text', 'All categories');
    cy.get('.organisationSectorSelect').should('have.text', 'All sectors');
    cy.get('.recipientCountrySelect').should('have.text', 'All countries');
    cy.get('.recipientRegionSelect').should('have.text', 'All regions');
  }

  function testSelect(
    selector: string,
    selectNumber: number,
    optionNumber: number
  ) {
    //  cy.get(`${selector} > [class*=Control] > [class*=ValueContainer]`).click({
    // `[class^=${selector}] > [class*=-Control] > [class*=-ValueContainer]`
    cy.get(`${selector} > :nth-child(1) > :nth-child(1)`).click({
      force: true,
    });
    cy.get(`#react-select-${selectNumber}-option-${optionNumber}`).then(
      ($span) => {
        const selectText: string = $span.text();
        cy.get(`#react-select-${selectNumber}-option-${optionNumber}`).click({
          force: true,
        });
        cy.get(`[class*=multiValue]`).last().should('have.text', selectText);
      }
    );
  }
});
