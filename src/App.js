import jsPDF from "jspdf";
import { useState } from "react";

import Header from "components/Header";
import Sidebar from "components/Sidebar/Sidebar";

import { ReactComponent as ShareIcon } from "images/share.svg";

import stl from "styleSheet/app.module.scss";
import { useReactToPrint } from "react-to-print";

const savePdf = ref => {
  const doc = new jsPDF();
  doc.html("<div>111</div>", {
    callback: function (doc) {
      doc.save();
    },
  });

  doc.save();
};

function App() {
  const [pageRef, setPageRef] = useState();

  const handlePrint = useReactToPrint({
    content: () => pageRef,
  });

  return (
    <div className="container">
      <button className={stl.shareBtn} onClick={handlePrint}>
        <ShareIcon className={stl.shareIcon} />
      </button>

      <div ref={resolve => setPageRef(resolve)} className="page">
        <Sidebar />
        <>
          <Header />
        </>
      </div>
    </div>
  );
}

export default App;
