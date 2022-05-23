import { Toaster } from "react-hot-toast";
import Footer from "../Footer";
import Header from "../Header";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Header />
            <div>
                <Toaster position="top-center"/>
            </div>
            <main className="main">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
