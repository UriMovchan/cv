import jsPDF from "jspdf";
import { useState } from "react";

import { ReactComponent as ShareIcon } from "images/share.svg";

import stl from "styleSheet/app.module.scss";
import ReactToPrint, { useReactToPrint } from "react-to-print";

import Summary from "pages";
import Pdf from "components/Pdf";

export default function App() {
  const [pageRef, setPageRef] = useState();

  const handlePrint = useReactToPrint({
    content: () => pageRef,
  });

  return (
    <div className="container">
      <button className={stl.shareBtn} onClick={handlePrint}>
        <ShareIcon className={stl.shareIcon} />
      </button>
      <ReactToPrint
        content={() => pageRef}
        trigger={() => (
          <button className="btn btn-primary">Print to PDF!</button>
        )}
      />

      <Summary setPageRef={setPageRef} />
    </div>
  );
}
