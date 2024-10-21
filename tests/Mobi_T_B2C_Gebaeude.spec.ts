import {test, expect, selectors} from '@playwright/test';

test('fill token', async ({ page }) => {
  await page.goto('https://secure-t.mobiliar-int.ch/gebaeude/de/grundlagen');

  // Fill the Token value
    await page.getByTitle('Authorisierungstoken zum Nutzen der Testumgebung').fill('Protekta_b2c_PIq2');
    // click submit button
    await page.locator('button:text("Token speichern")').click();
    //await page.waitForTimeout(2000); // waits for 2 seconds

});

test('Gebäude Offertanfrage - happy case', async ({ page }) => {
  await page.goto('https://secure-t.mobiliar-int.ch/gebaeude/de/grundlagen');
  // wait until title is visible
  await expect(page.getByText('Authorisierungstoken zum Nutzen der Testumgebung')).toBeVisible();
  await page.getByTitle('Authorisierungstoken zum Nutzen der Testumgebung').fill('Protekta_b2c_PIq2');
    // click submit button
    await page.locator('button:text("Token speichern")').click();
    await page.getByPlaceholder('Adresse suchen').fill('Nielsenstrasse 22');
    await page.getByRole('option', { name: 'Nielsenstrasse 22 6033' }).click();
    await page.locator('[data-test-id="select-object"]').click();
    await page.getByRole('button', { name: 'Weiter' }).click();
    await page.getByText('Objektdaten ergänzen').click();
    await page.getByLabel('Präzisierung versichertes').click();
    await page.getByLabel('Präzisierung versichertes').fill('Playwright Test Gebäude');
    await page.getByLabel('Präzisierung Gebä').locator('label').first().click();
    await page.getByLabel('Bauart').click();
    await page.locator('mobi-ui-dropdown-option-major').nth(1).click();
    await page.getByLabel('Stockwerkeigentum', { exact: true }).click();
    await page.getByText('Keine Stockwerkeigentü').click();
    await page.getByLabel('Gebäudeversicherungswert', { exact: true }).click();
    await page.getByLabel('Gebäudeversicherungswert', { exact: true }).fill('250000');
    await page.getByLabel('Gebäudeversicherungswert', { exact: true }).press('Tab');
    await page.getByText('Versicherungswert Neuwert').click();
    await page.getByLabel('Quelle Gebä').click();
    await page.getByText('Kantonale Gebäudeversicherung').click();
    await page.getByLabel('Vermieten Sie Räume in Ihrem').click();
    await page.locator('mobi-ui-dropdown-option-major').filter({ hasText: 'nein' }).click();
    await page.getByRole('button', { name: 'Angaben übernehmen' }).click();
    await page.getByRole('button', { name: 'Angebote berechnen' }).click();
    await page.getByRole('button', { name: 'Offerte anfordern' }).click();
    await page.locator('[data-test="UNTERNEHMEN"]').click();
    await expect(page.getByLabel('Name')).toBeVisible();
    await page.getByLabel('Name').click();
    await page.getByLabel('Name').fill('Tom Tester');
    await page.getByLabel('Name').press('Tab');
    await page.getByRole('combobox', { name: 'Strasse, Nr.' }).fill('Adlermatte');
    await page.getByRole('combobox', { name: 'Strasse, Nr.' }).press('Tab');
    await page.getByRole('textbox', { name: 'undefined' }).fill('2');
    await page.getByPlaceholder('Postleitzahl oder Ort').click();
    await page.getByPlaceholder('Postleitzahl oder Ort').fill('6033');
    await page.getByPlaceholder('Postleitzahl oder Ort').press('ArrowDown');
    await page.getByRole('option', { name: 'Buchrain' }).click();
    await page.getByLabel('E-Mail-Adresse').click();
    await page.getByLabel('E-Mail-Adresse').fill('tom@tester.ch');
    await page.getByLabel('E-Mail-Adresse').press('Tab');
    await page.getByPlaceholder('TT.MM.JJJJ').click();
    await page.getByPlaceholder('TT.MM.JJJJ').fill('01.01.2009');
    await page.getByPlaceholder('TT.MM.JJJJ').press('Tab');
    await page.getByRole('combobox', { name: 'Rechtsform' }).click();
    await page.getByRole('option', { name: 'GmbH' }).click();
    await page.getByPlaceholder('Liebe Mobiliar,').click();
    await page.getByPlaceholder('Liebe Mobiliar,').fill('Test Test');
    await page.locator('[data-test="submitbutton"]').click();
    await page.goto('https://secure-t.mobiliar-int.ch/gebaeude/de/anfragebestaetigung');
    await expect(page.locator('vvn-kaufen-b2c-anfragebestaetigung')).toContainText('Wir haben Ihre Anfrage an die Mobiliar Generalagentur in Ihrer Nähe weitergeleitet.');
});

test('Nur 1 Adresse wählbar', async ({ page }) => {
  await page.goto('https://secure-t.mobiliar-int.ch/gebaeude/de/grundlagen');
  // wait until title is visible
  await expect(page.getByText('Authorisierungstoken zum Nutzen der Testumgebung')).toBeVisible();
  await page.getByTitle('Authorisierungstoken zum Nutzen der Testumgebung').fill('Protekta_b2c_PIq2');
  // click submit button
  await page.locator('button:text("Token speichern")').click();await page.getByPlaceholder('Adresse suchen').fill('adlermatte 1');
  await page.getByRole('option', { name: 'Adlermatte 1 6033 Buchrain' }).getByRole('strong').click();
  await page.locator('[data-test-id="select-object"]').click();
  await page.getByRole('button', { name: 'Clear search' }).click();
  await page.getByPlaceholder('Adresse suchen').fill('adlermatte 10');
  await page.getByRole('option', { name: 'Adlermatte 10 6033 Buchrain' }).click();
  await page.locator('[data-test-id="select-object"]').click();
  await page.waitForTimeout(2000); // waits for 2 seconds => wait for the error message to appear
  await expect(page.getByRole('status')).toContainText('Die maximale Objektanzahl ist erreicht. Sie können maximal ein Objekt erfassen.');
});