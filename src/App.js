// import './App.css'; 
// import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
// import {Navbar} from "./components/navbar";
// import { ProductListing } from './pages/productListing/productListing';
// import {Cart} from "./pages/cart/cart";


// function App() {
//   return <div className="App">
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<ProductListing />} />
//         {/* <Route path="/cart" element={<Cart />}/> */}
//       </Routes>
//     </Router></div>
// }

// export default App;
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { ProductListing } from "./pages/productListing/productListing";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { Checkout } from "./pages/checkout/checkout";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductListing />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;