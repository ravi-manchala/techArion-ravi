import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Counter from "./counter/Counter";
import Navbar from "./layout.js/navbar";
import PostData from "./postData.js/postdata";
import TableData from "./tableData/tableData";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
          <Route path="/tabledata" element={<TableData />}></Route>
          <Route path="/formdata" element={<PostData />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
