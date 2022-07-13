import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "screens/HomeScreen";
import CartScreen from "screens/CartScreen";
import LoginScreen from "screens/LoginScreen";
import Navbar from "components/header/Navbar";
import Footer from "components/Footer";
import RegisterScreen from "screens/RegisterScreen";
import ProductListScreen from "screens/ProductListScreen";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="container mx-auto mt-12 md:mt-16 w-full text-slate-800 pb-12">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/products" element={<ProductListScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
