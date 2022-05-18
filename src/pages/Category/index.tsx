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

export default Category;
