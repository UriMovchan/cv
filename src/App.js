import { useState } from "react";
import { useReactToPrint } from "react-to-print";

import { ReactComponent as ShareIcon } from "images/share.svg";

import stl from "styleSheet/app.module.scss";

import Summary from "pages";

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

      <Summary setPageRef={setPageRef} />
    </div>
  );
}
