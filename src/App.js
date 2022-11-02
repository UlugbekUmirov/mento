import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Premium from "./pages/pricing/Premium";
import Login from "./test/Login";

function App() {
  return (
    <Routes>
      <Route path="/"  >
        <Route index element={<Home />}  />
        <Route path="premium" >
          <Route index  element={<Premium />} />
        </Route>
        <Route path="test" >
          <Route index  element={<Login/>} />
        </Route>
      {/* <Route path="/" element={<Code />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
