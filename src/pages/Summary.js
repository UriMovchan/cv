import Sidebar from "components/Sidebar";
import Header from "components/Header";
import Main from "components/Main";

export default function Summary({ setPageRef }) {
  return (
    <div className="page" ref={resolve => setPageRef(resolve)}>
      <Sidebar />
      <div className="pageContent">
        <Header />
        <Main />
      </div>
    </div>
  );
}
