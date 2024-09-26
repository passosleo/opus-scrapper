import "dotenv/config";
import { OpusPuppeteerScrapper } from "./app/scrappers/generate-short-video/opus-puppeteer-scrapper";

class App {
  public static start() {
    const scrapper = new OpusPuppeteerScrapper();
    const videos = ["https://www.youtube.com/watch?v=VYEUrnGpIMw"];
    scrapper.execute(videos);
  }
}

App.start();
