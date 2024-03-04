const puppeteer = require("puppeteer");

const router = require("express").Router();

const pdf =
  (download = false) =>
  async (_, res) => {
    // Відкриваємо браузер
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Переходимо на сторінку, яку хочемо зберегти у PDF
    await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });

    // Генеруємо PDF
    const pdfBuffer = await page.pdf({ printBackground: true });

    // Закриваємо браузер
    await browser.close();

    // Відправляємо PDF як відповідь на запит
    res.set({
      "Content-Type": "application/pdf",
      "Content-Length": pdfBuffer.length,
    });

    if (download) {
      res.set({
        "Content-Disposition": 'attachment; filename="Cv_Yuriy_Movchan.pdf"',
      });
    }

    res.send(pdfBuffer);
  };

const mw = (req, res, next) => {
  console.log();
  next();
};

router.get("", mw, pdf());
router.get("/download", pdf(true));

module.exports = router;
