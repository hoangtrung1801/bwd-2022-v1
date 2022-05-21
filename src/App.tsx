import "bulma-helpers/css/bulma-helpers.min.css";
import "bulma/css/bulma.css";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import ScreenLoading from "./components/ScreenLoading";
import Admin from "./pages/Admin";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";
import Donate from "./pages/Donate";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";

function App() {
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
            document.body.style.height = '100vh';
            document.body.style.overflow = 'hidden';

        if (loading) setTimeout(() => setLoading(false), 3000);
    }, []);

    return (
        <>
        <AnimatePresence>
            {
                loading && (
                    <ScreenLoading />
                )
            }

            <Routes location={location} key={location.key}>
                {/* <Route path="/" element={<Test />} /> */}
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="category" element={<Category />} />
                    <Route path="product" element={<Product />} />
                    <Route path="admin" element={<Admin />} />
                    <Route path="checkout" element={<Checkout />} />
                    <Route path="donate" element={<Donate />} />
                </Route>
            </Routes>
        </AnimatePresence>
        </>
    );
}

const Test = () => {
    const [visible, setVisible] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => setVisible(false), 2000);
    }, []);

    return (
        <>
            <AnimatePresence
                exitBeforeEnter={true}
                onExitComplete={() => console.log("exit complete")}
            >
                {visible && (
                    <motion.div
                        key={location.key}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            width: "100vw",
                            height: "100vh",
                            backgroundColor: "red",
                        }}
                    >
                        hello world
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default App;
