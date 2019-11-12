import { getGreeting } from '../support/app.po';

describe('lb-ses', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to lb-ses!');
  });
});
