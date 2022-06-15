import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
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
