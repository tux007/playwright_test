import {test, expect, selectors} from '@playwright/test';

test('Offerte anfordern - Privatperson', async ({ page }) => {
  await page.goto('https://secure-t.mobiliar-int.ch/gebaeude/de/grundlagen');
  // wait until title is visible
  await expect(page.getByText('Authorisierungstoken zum Nutzen der Testumgebung')).toBeVisible();
  await page.getByTitle('Authorisierungstoken zum Nutzen der Testumgebung').fill('Protekta_b2c_PIq2');
    // click submit button
  await page.locator('button:text("Token speichern")').click();
  await page.locator('[data-test="offertanfrage-link"]').click();
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

  test('Offerte anfordern - Verein, Verband & Stiftung', async ({ page }) => {
    await page.goto('https://secure-t.mobiliar-int.ch/gebaeude/de/grundlagen');
    // wait until title is visible
    await expect(page.getByText('Authorisierungstoken zum Nutzen der Testumgebung')).toBeVisible();
    await page.getByTitle('Authorisierungstoken zum Nutzen der Testumgebung').fill('Protekta_b2c_PIq2');
    // click submit button
    await page.locator('button:text("Token speichern")').click();
    await page.locator('[data-test="offertanfrage-link"]').click();
    await page.locator('[data-test="VEREIN"]').click();
    //await page.getByLabel('Name').click();
    await page.getByLabel('Name').fill('Verein Test B2C');
    await page.getByLabel('Name').press('Tab');
    await page.getByRole('combobox', { name: 'Strasse, Nr.' }).fill('Eigerplatz');
    await page.getByPlaceholder('Postleitzahl oder Ort').click();
    await page.getByPlaceholder('Postleitzahl oder Ort').fill('3007');
    await page.getByRole('option', { name: 'Bern' }).click();
    await page.getByLabel('E-Mail-Adresse').click();
    await page.getByLabel('E-Mail-Adresse').fill('verein.test@test.ch');
    await page.getByPlaceholder('TT.MM.JJJJ').click();
    await page.getByPlaceholder('TT.MM.JJJJ').fill('01.01.2008');
    await page.getByRole('combobox', { name: 'Rechtsform' }).click();
    await page.getByRole('option', { name: 'Verein' }).click();
    await page.getByPlaceholder('Liebe Mobiliar,').click();
    await page.getByPlaceholder('Liebe Mobiliar,').fill('Liebe Mobilar - Verein Test');
    await page.locator('[data-test="submitbutton"]').click();
    await expect(page.locator('vvn-kaufen-b2c-anfragebestaetigung')).toContainText('Wir haben Ihre Anfrage an die Mobiliar Generalagentur in Ihrer Nähe weitergeleitet.');
    await expect(page.getByRole('list')).toContainText('Sie werden in den nächsten Tagen persönlich von einer Versicherungsberaterin oder einem Versicherungsberater kontaktiert. Gemeinsam finalisieren Sie Ihre individuelle Gebäudeversicherung.');
});

test('Offerte anfordern - Unternehmen', async ({ page }) => {
  await page.goto('https://secure-t.mobiliar-int.ch/gebaeude/de/grundlagen');
  // wait until title is visible
  await expect(page.getByText('Authorisierungstoken zum Nutzen der Testumgebung')).toBeVisible();
  await page.getByTitle('Authorisierungstoken zum Nutzen der Testumgebung').fill('Protekta_b2c_PIq2');
  // click submit button
  await page.locator('button:text("Token speichern")').click();
  await page.locator('[data-test="offertanfrage-link"]').click();
  await page.locator('[data-test="UNTERNEHMEN"]').click();
  await page.getByLabel('Name').click();
  await page.getByLabel('Name').fill('Unternehmen Test B2C');
  await page.getByLabel('Name').press('Tab');
  await page.getByRole('combobox', { name: 'Strasse, Nr.' }).fill('Eigerplatz');
  await page.getByPlaceholder('Postleitzahl oder Ort').click();
  await page.getByPlaceholder('Postleitzahl oder Ort').fill('3007');
  await page.getByRole('option', { name: 'Bern' }).click();
  await page.getByLabel('E-Mail-Adresse').click();
  await page.getByLabel('E-Mail-Adresse').fill('unternehmen.test@test.ch');
  await page.getByPlaceholder('TT.MM.JJJJ').click();
  await page.getByPlaceholder('TT.MM.JJJJ').fill('01.01.2008');
  await page.getByRole('combobox', { name: 'Rechtsform' }).click();
  await page.getByRole('option', { name: 'GmbH' }).click();
  await page.getByPlaceholder('Liebe Mobiliar,').click();
  await page.getByPlaceholder('Liebe Mobiliar,').fill('Liebe Mobilar - Unternehmen Test');
  await page.locator('[data-test="submitbutton"]').click();
  await expect(page.locator('vvn-kaufen-b2c-anfragebestaetigung')).toContainText('Wir haben Ihre Anfrage an die Mobiliar Generalagentur in Ihrer Nähe weitergeleitet.');
  await expect(page.getByRole('list')).toContainText('Sie werden in den nächsten Tagen persönlich von einer Versicherungsberaterin oder einem Versicherungsberater kontaktiert. Gemeinsam finalisieren Sie Ihre individuelle Gebäudeversicherung.');
});

test('Offerte anfordern - mit Login', async ({ page }) => {
  await page.goto('https://secure-t.mobiliar-int.ch/gebaeude/de/grundlagen');
  // wait until title is visible
  await expect(page.getByText('Authorisierungstoken zum Nutzen der Testumgebung')).toBeVisible();
  await page.getByTitle('Authorisierungstoken zum Nutzen der Testumgebung').fill('Protekta_b2c_PIq2');
  // click submit button
  await page.locator('button:text("Token speichern")').click();
  await page.locator('[data-test="offertanfrage-link"]').click();
  await page.getByRole('button', { name: 'Weiter mit bestehendem Login' }).click();
  await page.getByLabel('E-Mail-Adresse').click();
  await page.getByLabel('E-Mail-Adresse').fill('mymobiliar09@mobi.ch');
  await page.getByLabel('Passwort').click();
  await page.getByLabel('Passwort').fill('Mobi@123');
  await page.locator('[data-test-id="login-btn"]').click();
  await page.locator('[data-test-id="mtan"]').getByPlaceholder('XXXXXX').fill('111111');
  await page.locator('[data-test-id="verifyBtn"]').click();
  await page.getByPlaceholder('Liebe Mobiliar,').click();
  await page.getByPlaceholder('Liebe Mobiliar,').fill('Test B2C Login - Offertenanfrage');
  await page.locator('[data-test="submitbutton"]').click();
  await expect(page.locator('vvn-kaufen-b2c-anfragebestaetigung')).toContainText('Wir haben Ihre Anfrage an die Mobiliar Generalagentur in Ihrer Nähe weitergeleitet.');
  await expect(page.getByRole('list')).toContainText('Sie werden in den nächsten Tagen persönlich von einer Versicherungsberaterin oder einem Versicherungsberater kontaktiert. Gemeinsam finalisieren Sie Ihre individuelle Gebäudeversicherung.');
});