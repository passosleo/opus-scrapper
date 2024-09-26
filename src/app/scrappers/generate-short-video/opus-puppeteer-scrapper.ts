import { config } from "../../../config/config";
import { IScrapper } from "../scrapper.types";
import puppeteer from "puppeteer";

export class OpusPuppeteerScrapper implements IScrapper<string[]> {
  private readonly defaultTimeout = 60000;

  public async execute(input: string[]): Promise<void> {
    try {
      const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100,
      });
      const page = await browser.newPage();

      await page.goto(config.SHORT_VIDEO_GENERATOR_URL, {
        waitUntil: "networkidle2",
        timeout: this.defaultTimeout,
      });

      // Input video url on the website and submit
      const inputId = "#yt-link-header";
      const inputElement = await page.waitForSelector(inputId, {
        timeout: this.defaultTimeout,
      });

      if (!inputElement) {
        throw new Error("Input element not found");
      }

      await page.type(inputId, input[0]);
      await page.keyboard.press("Enter");

      setTimeout(async () => {
        await browser.close();
      }, 360000);
    } catch (error: any) {
      console.error("Error in OpusPuppeteerScrapper: ", error.message);
    }
  }
}
