import Footer from "../Footer";
import Header from "../Header";

interface LayoutProps {
    children: React.ReactNode
}

const Layout : React.FC<LayoutProps> = ({children}) => {

    return (
        <div>
            <Header />
            <main className="main">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;