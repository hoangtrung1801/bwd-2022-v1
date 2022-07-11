import "bulma-helpers/css/bulma-helpers.min.css";
import "bulma/css/bulma.css";
import {
    AnimatePresence,
    motion,
    useReducedMotionConfig,
    Variants,
} from "framer-motion";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useCollection, useDocument } from "swr-firestore-v9";
import "./App.css";
import ScreenLoading from "./components/ScreenLoading";
import AboutMe from "./pages/AboutMe";
import Admin from "./pages/Admin";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";
import Donate from "./pages/Donate";
import DonateRanking from "./pages/DonateRanking";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import SignUp from "./pages/SignUp";
import User from "./utils/types/User";

function App() {
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        document.body.style.height = "100vh";
        document.body.style.overflow = "hidden";

        if (loading) setTimeout(() => setLoading(false), 3000);
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [location.pathname]);

    return (
        <>
            <AnimatePresence>
                {loading && <ScreenLoading />}

                <Routes location={location} key={location.key}>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="login" element={<Login />} />
                        <Route path="signup" element={<SignUp />} />
                        <Route path="category" element={<Category />} />
                        <Route path="product">
                            <Route path=":id" element={<Product />} />
                        </Route>
                        <Route path="admin" element={<Admin />} />
                        <Route path="checkout" element={<Checkout />} />
                        <Route path="donate" element={<Donate />} />
                        <Route
                            path="donate-ranking"
                            element={<DonateRanking />}
                        />
                        <Route path="about-me" element={<AboutMe />} />
                        <Route path="test" element={<Test />} />
                        <Route path="*" element={<h1>Error 404</h1>} />
                    </Route>
                </Routes>
            </AnimatePresence>
        </>
    );
}

const Test = () => {
    const { data, error } = useCollection("users");

    if (error) return <div>error</div>;
    if (!data) return <div>loading...</div>;

    return (
        <div>
            {data.map((user) => (
                <div>{user.email}</div>
            ))}
        </div>
    );
};

export default App;
