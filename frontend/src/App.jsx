import { Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <>
      <Toaster position="top-center" />

      <Routes>
        <Route index element={<SignInPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
export default App;
