import { scrapeProductData } from "@/utils/scraper";
import { analyzeProduct } from "@/utils/analyze";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { url } = req.body;
      const scrapedData = await scrapeProductData(url);

      const analysis = await analyzeProduct({
        description: scrapedData.description,
        title: scrapedData.title,
      });

      res.status(200).json({ success: true, data: analysis });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
