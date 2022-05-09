import Footer from "../Footer";
import Header from "../Header";

const Layout = ({children}) => {

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