// @ts-nocheck
/// <reference types="cypress" />

describe('API Documentation - search', function () {
  // autoRecord();

  it('should load the page', function () {
    cy.visit('/documentation');
  });

  // it('should be able to type in "Activity List" and only get results with "Activity List" in it', function () {
  //   cy.get('[class*= ApiDocSearchBoxContainer]').should('exist');
  //   cy.get('.MuiInputBase-input').type('Activity List');
  //   cy.get('[class*= MuiTreeView-root]').should(
  //     'contain.text',
  //     'Activity List'
  //   );
  // });
  //
  // it('make screenshot', () => {
  //   cy.get('body').happoScreenshot({ component: 'API docs page' });
  // });
});
