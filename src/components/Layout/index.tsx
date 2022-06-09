import { signOut } from "firebase/auth";
import { AnimatePresence, motion } from "framer-motion";
import { CSSProperties, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { auth } from "../../firebase";
import { useViewport } from "../../utils/hook/useViewport";
import Footer from "../Footer";
import Header from "../Header";
import Loading from "../Loading";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const {isMobile} = useViewport();

    useEffect(() => {
        if (loading)
            setTimeout(() => {
                setLoading(false);
            }, 2100);
    }, []);

    return (
        <div>
            <Header />
            <div>
                <Toaster position="top-center" />
            </div>
            <AnimatePresence exitBeforeEnter>
                {( loading && !isMobile ) && <Loading />}
            </AnimatePresence>
            <main className="main">{children}</main>
            <Footer />
        </div>
    );
};



export default Layout;
