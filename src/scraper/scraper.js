const axios = require("axios");
const cheerio = require("cheerio");

const scraper = async () => {
  const url = "https://www.nfl.com/stats/player-stats/";

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const stats = [];
    $(".d3-o-player-stats--detailed tbody").each((index, element) => {
      const eachPlayerStats = $(element).find("td").text();
      const image = $(element).find("td .d3-o-player-headshot").attr("src");
      stats.push({ eachPlayerStats, image });
    });
    console.log(stats);
    return stats;
  } catch (error) {
    console.log(error);
  }
};

// const scrapeAllPlayers = async () => {
//   const allPlayerseData = [];

//   for (const player of players) {
//     const artistData = await scraper(artist.id);
//     allArtistData.push({
//       id: artist.id,
//       data: artistData,
//     });
//   }

//   return allArtistData;
// };

// scrapeAllArtists()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

module.exports = {
  scraper,
};
