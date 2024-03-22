import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import AdminPage from "./pages/AdminPage";
import AdminAuth from "./pages/AdminAuth";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<AdminPage />}>
            <Route index={true} element={<HomePage />} />
            <Route path="create-form" element={<FormPage />} />
            <Route path="login" element={<AdminAuth page="login" />} />
            <Route path="signup" element={<AdminAuth page="signup" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
