const scraper = require("../../src/scraper/scraper");

module.exports = {
  getScrapedData: async (req, res) => {
    try {
      const scrapedData = await scraper();
      console.log("Scraped data in controller:", scrapedData); // Add this line
      res.json(scrapedData); // Send the eventList array as a response
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to get scraped data" });
    }
  },
};
