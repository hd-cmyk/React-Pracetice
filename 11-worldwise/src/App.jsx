import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CitiesProvider } from "../contexts/CitiesContext";
import { AuthProvider } from "../contexts/FakeAuthContext";
import "./App.css";
import CityList from "../components/CityList";
import CountryList from "../components/CountryList";
import City from "../components/City";
import Form from "../components/Form";
import ProtectedRoute from "../pages/ProtectedRoute";
import { lazy } from "react";
import SpinnerFullPage from "../components/SpinnerFullPage";
import { Suspense } from "react";

// import Product from "../pages/Product";
// import Homepage from "../pages/Homepage";
// import PageNotFound from "../pages/PageNotFound";
// import Pricing from "../pages/Pricing";
// import AppLayout from "../pages/AppLayout";
// import Login from "../pages/Login";

const Homepage = lazy(() => import("../pages/Homepage"));
const Product = lazy(() => import("../pages/Product"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const Pricing = lazy(() => import("../pages/Pricing"));
const AppLayout = lazy(() => import("../pages/AppLayout"));
const Login = lazy(() => import("../pages/Login"));

// dist/assets/index-77171fd6.css   47.52 kB │ gzip:  11.73 kB
// dist/assets/index-2e9b3a34.js   588.14 kB │ gzip: 170.50 kB

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              {/* index route 表示“父路由本身被访问时，默认渲染的子路由”。 */}
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="dashboard" element={<Homepage />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
