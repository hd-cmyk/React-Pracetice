import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CitiesProvider } from "../contexts/CitiesContext";
import { AuthProvider } from "../contexts/FakeAuthContext";
import "./App.css";
import Product from "../pages/Product";
import Homepage from "../pages/Homepage";
import PageNotFound from "../pages/PageNotFound";
import Pricing from "../pages/Pricing";
import AppLayout from "../pages/AppLayout";
import Login from "../pages/Login";
import CityList from "../components/CityList";
import CountryList from "../components/CountryList";
import City from "../components/City";
import Form from "../components/Form";
import ProtectedRoute from "../pages/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
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
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
