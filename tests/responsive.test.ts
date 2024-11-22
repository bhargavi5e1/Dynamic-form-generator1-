import { test, expect } from "@playwright/test";

test("check responsiveness", async ({ page }) => {
  await page.goto("http://localhost:5173");
  await page.setViewportSize({ width: 768, height: 1024 });
  const editor = await page.locator(".monaco-editor");
  await expect(editor).toBeVisible();
});
