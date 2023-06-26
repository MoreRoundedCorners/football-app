// routes/index.js
const express = require("express");
const router = express.Router();
const scraperController = require("../controllers/scraperController");

router.get("/scraped-data/", scraperController.getScrapedData);

module.exports = router;
