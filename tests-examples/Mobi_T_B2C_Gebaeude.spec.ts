import { test, expect } from '@playwright/test';

test('fill token', async ({ page }) => {
  await page.goto('https://secure-t.mobiliar-int.ch/gebaeude/de/grundlagen');

  // Fill the Token value
    await page.getByTitle('Authorisierungstoken zum Nutzen der Testumgebung').fill('Protekta_b2c_PIq2');
    // click submit button
    await page.locator('button:text("Token speichern")').click();
    await page.waitForTimeout(2000); // waits for 2 seconds

});

test('Enter Gebäude address', async ({ page }) => {
  await page.goto('https://secure-t.mobiliar-int.ch/gebaeude/de/grundlagen');
  await page.waitForTimeout(2000); // waits for 2 seconds
  await page.getByTitle('Authorisierungstoken zum Nutzen der Testumgebung').fill('Protekta_b2c_PIq2');
    // click submit button
    await page.locator('button:text("Token speichern")').click();


  // Enter Gebäude address
    await page.getByTitle('Adresse suchen').fill('Nielsenstrasse 22, 6033 Buchrain');
    await page.waitForTimeout(2000); // waits for 2 seconds
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000); // waits for 2 seconds
    // click submit button
    await page.locator('button:text(" Objekt auswählen ")').click();


    
});