import "./App.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import AdminPage from "./pages/AdminPage";
import AdminAuth from "./pages/AdminAuth";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthProtected from "./components/AuthProtected";
import AdminFormPreview from "./pages/AdminFormPreview";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin" element={<AdminPage />}>
          <Route
            index={true}
            element={<ProtectedRoute element={<HomePage />} />}
          />
          <Route
            path="form"
            element={<ProtectedRoute element={<AdminFormPreview />} />}
          />
          <Route path="create-form" element={<FormPage />} />
          <Route
            path="login"
            element={<AuthProtected element={<AdminAuth page="login" />} />}
          />
          <Route
            path="signup"
            element={<AuthProtected element={<AdminAuth page="signup" />} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
