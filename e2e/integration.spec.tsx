import { test, expect } from "@playwright/test";

test.describe("Comics Page", () => {

  test("Navigating to a specific month", async ({ page }) => {
    // Go to http://localhost:3000/
    await page.goto("http://localhost:3000/");
    // Click text=nov >> nth=2
    await page.locator("text=nov").nth(2).click();
    // Click text=prev
    await page.locator("text=prev").click();
    // Click text=10.31.19
    await page.locator("text=10.31.19").click();
    // Click text=next
    await page.locator("text=next").click();
    // Click text=11.1.19
    await page.locator("text=11.1.19").click();
    // Click .text-4xl >> nth=0
    await page.locator(".text-4xl").first().click();
    // Click text=1.21.22
    await page.locator("text=1.21.22").click();
  });
});
