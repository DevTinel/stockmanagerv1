import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import ProviderProductMediumPayment from "./pages/ProductMediunPayment/ProviderProductMediumPayment";
import ProviderProductLargePayment from "./pages/ProductLargePayment/ProviderProductLargePayment";
import User from "./pages/User/User";

function App() {
    return (
        <Router>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/user" element={<User />} />
                <Route
                    path="/productMediunPayment"
                    element={<ProviderProductMediumPayment />}
                />
                <Route
                    path="/productLargePayment"
                    element={<ProviderProductLargePayment />}
                />
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;
