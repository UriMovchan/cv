const path = require("path");
const puppeteer = require("puppeteer");
const router = require("express").Router();

const pdf = action => async (_, res) => {
  // Відкриваємо браузер
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Переходимо на сторінку, яку хочемо зберегти у PDF
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });

  // Генеруємо PDF
  let pdfBuffer;

  if (action === "saveLocal") {
    await page.pdf({ path: "Cv_Yuriy_Movchan.pdf", printBackground: true, scale: 0.79, pageRanges: "1" });
  } else {
    pdfBuffer = await page.pdf({ printBackground: true, scale: 0.79, pageRanges: "1" });
  }

  // Закриваємо браузер
  await browser.close();

  if (action === "saveLocal") {
    res.redirect("/");
  } else {
    // Відправляємо PDF як відповідь на запит
    res.set({
      "Content-Type": "application/pdf",
      "Content-Length": pdfBuffer.length,
    });

    if (action === "download") {
      res.set({
        "Content-Disposition": 'attachment; filename="Cv_Yuriy_Movchan.pdf"',
      });
    }

    res.send(pdfBuffer);
  }
};

router.get("", pdf("view"));
router.get("/saveLocal", pdf("saveLocal"));
router.get("/download", pdf("download"));

module.exports = router;
