import { Routes, Route } from "react-router-dom";

import BtnSelect from "./pages/BtnSelect/Btnselect";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BtnSelect />}></Route>
      </Routes>
    </div>
  );
}

export default App;
