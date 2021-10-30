import Html from "react-pdf-html";
import ReactDOMServer from "react-dom/server";
import ReactPDF, { PDFViewer, Document, Page } from "@react-pdf/renderer";
import Summary from "pages";

const element = (
  <html>
    <body>
      <style>
        {`
        body {
          background: #dbdbdb;
        }
        pre {
          background-color: #eee;
          padding: 10px;
        }`}
      </style>
      <Summary />
    </body>
  </html>
);

const html = ReactDOMServer.renderToStaticMarkup(element);

export default function Pdf() {
  return (
    <PDFViewer>
      <Document>
        <Page>
          <Html>{html}</Html>
        </Page>
      </Document>
    </PDFViewer>
  );
}

// ReactPDF.render(<Pdf />);
// ReactPDF.render(<Pdf />, `${__dirname}/example.pdf`);
