const { chromium } = require("playwright");

export async function scrapeProductData(url) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(url);

  // Example: Extract specific data (customize for your target websites)
  const data = await page.evaluate(() => {
    const title = document.querySelector("h1")?.innerText || "Unknown Product";
    const description = document.querySelector("meta[name='description']")?.content || "No description available";
    return { title, description };
  });

  await browser.close();
  return data;
}
