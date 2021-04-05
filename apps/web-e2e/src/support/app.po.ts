export const getComponentByTestID = (testID: string) => cy.get(`[data-testid=${testID}]`);
