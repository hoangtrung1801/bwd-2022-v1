import Layout from "../../components/Layout";
import './category.css';
import CategoryProduct from "./components/CategoryProduct";
import Filter from "./components/Filter";

const Category = () => {
    return (
        <Layout>
            <div className="container py-6 px-4">
                <div className="columns">
                    <div className="column is-4">
                        <Filter />
                    </div>

                    <div className="column is-8">
                        <CategoryProduct />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

                            {/* <nav className="pagination is-small mt-4 mb-6">
                                <ul className="pagination-list is-justify-content-center">
                                    <li>
                                        <a className="pagination-link is-current">
                                            1
                                        </a>
                                    </li>
                                    <li>
                                        <a className="pagination-link">2</a>
                                    </li>
                                    <li>
                                        <a className="pagination-link">3</a>
                                    </li>
                                    <li>
                                        <a className="pagination-link">4</a>
                                    </li>
                                    <li>
                                        <a className="pagination-link">5</a>
                                    </li>
                                </ul>
                                <a className="pagination-next">Next {">"}</a>
                            </nav> */}


export default Category;
