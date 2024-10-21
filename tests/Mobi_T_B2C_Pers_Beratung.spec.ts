import {test, expect, selectors} from '@playwright/test';

test('Persönliche Beratung', async ({ page }) => {
  await page.goto('https://secure-t.mobiliar-int.ch/gebaeude/de/grundlagen');
  // wait until title is visible
  await expect(page.getByText('Authorisierungstoken zum Nutzen der Testumgebung')).toBeVisible();
  await page.getByTitle('Authorisierungstoken zum Nutzen der Testumgebung').fill('Protekta_b2c_PIq2');
    // click submit button
  await page.locator('button:text("Token speichern")').click();
  await expect(page.getByText('Persönliche Beratung')).toBeVisible();
  await page.locator('[data-test="concierge-button-offertanfrage"]').click();
  await page.locator('label').filter({ hasText: 'Frau' }).locator('circle').click();
  await page.getByLabel('Vorname').click();
  await page.getByLabel('Vorname').fill('Tanja');
  await page.getByLabel('Vorname').press('Tab');
  await page.getByLabel('Name', { exact: true }).fill('Testerin');
  await page.getByPlaceholder('TT.MM.JJJJ').click();
  await page.getByPlaceholder('TT.MM.JJJJ').fill('01.01.1977');
  await page.getByPlaceholder('TT.MM.JJJJ').press('Tab');
  await page.getByRole('combobox', { name: 'Strasse, Nr.' }).click();
  await page.getByRole('combobox', { name: 'Strasse, Nr.' }).fill('Eigerplatz');
  await page.getByRole('combobox', { name: 'Strasse, Nr.' }).press('Tab');
  await page.getByPlaceholder('Postleitzahl oder Ort').click();
  await page.getByPlaceholder('Postleitzahl oder Ort').fill('3007');
  await page.getByRole('option', { name: 'Bern' }).click();
  await page.getByLabel('E-Mail-Adresse').click();
  await page.getByLabel('E-Mail-Adresse').fill('tanja.testerin@test.ch');
  await page.getByLabel('E-Mail-Adresse').press('Tab');
  await page.getByPlaceholder('Liebe Mobiliar,').click();
  await page.getByPlaceholder('Liebe Mobiliar,').fill('Liebe Mobiliar');
  await page.locator('[data-test="submitbutton"]').click();
  await expect(page.locator('vvn-kaufen-b2c-anfragebestaetigung')).toContainText('Wir haben Ihre Anfrage an die Mobiliar Generalagentur in Ihrer Nähe weitergeleitet.');
  await expect(page.getByRole('list')).toContainText('Sie werden in den nächsten Tagen persönlich von einer Versicherungsberaterin oder einem Versicherungsberater kontaktiert. Gemeinsam finalisieren Sie Ihre individuelle Gebäudeversicherung.');
});