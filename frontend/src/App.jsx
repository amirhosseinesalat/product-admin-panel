import { Routes, Route } from "react-router-dom";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    // <>
    //   <Toaster position="top-center" />

    //   <Routes>
    //     <Route index element={<SignInPage />} />
    //     <Route path="/signin" element={<SignInPage />} />
    //     <Route path="/signup" element={<SignUpPage />} />

    //     <Route
    //       path="/dashboard"
    //       element={
    //         <ProtectedRoute>
    //           <Dashboard />
    //         </ProtectedRoute>
    //       }
    //     />
    //   </Routes>
    // </>
    <Dashboard />
  );
}
export default App;
