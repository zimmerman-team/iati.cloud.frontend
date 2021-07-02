// @ts-nocheck
/// <reference types="cypress" />

const categories: string[] = [
  // "Introduction",
  // 'Activity List',
  // 'Activity Detail',
  // 'Dataset List',
  // 'Budget List',
  // 'Budget Aggregations',
  // 'Codelist Meta List',
  // 'Country List',
  // 'Location List',
  // 'Organisation List',
  // 'Publisher List',
  // 'Region List',
  // 'Result List',
  // 'Result Aggregations',
  // 'Sector List',
  // 'Transaction List',
  // 'Transaction Aggregations',
  // 'DataStore Search Engine',
  'Apache Solr API',
  'Activity List',
  'Budget List',
  'Budget Aggregations',
  'Codelist Meta List',
  'Country List',
  'Datasets',
  'Location List',
  'Organisation List',
  'Publisher List',
  'Region List',
  'Result List',
  'Result Aggregations',
  'Sector List',
  'Transaction List',
  'Transaction Aggregations',
];

describe('API Documentation - navigation', function () {
  it('should load the page', function () {
    cy.visit('/documentation');
  });

  // it('should contain the correct categories', function () {
  //   for (let index = 1; index < categories.length; index++) {
  //     const element = categories[index - 1];
  //     cy.get(`[class *= MuiTreeView-root]`).contains(element);
  //   }
  // });
  //
  // it('should navigate to correct item when clicked', function () {
  //   // Weird behavior in headless browser, therefore checking on url instead of content.
  //   cy.contains('Activity List').click();
  //   cy.contains('Request parameters').click();
  //   cy.contains('GET iati_identifier (optional)').click();
  //   cy.url().should('contain', 'iati_identifier%20');
  // });
});
