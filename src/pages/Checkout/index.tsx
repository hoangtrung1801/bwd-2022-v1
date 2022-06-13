import { useEffect } from "react";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import Button3 from "../../components/Button/Button3";
import Layout from "../../components/Layout";
import useToken from "../../utils/hook/useToken";
import "./checkout.css";
import CheckoutCart from "./components/CheckoutCart";
import CheckoutForm from "./components/CheckoutForm";

interface CheckoutProps {}

const Checkout: React.FC<CheckoutProps> = () => {
    const products = useAppSelector(state => state.cart.items);
    const {token, setToken} = useToken();

    if(!token) {
        toast.error("Vui lòng đăng nhập!", {duration: 1000});
        return <Navigate to='/'/>
    }

    return (
        <Layout>
            <div className="container py-6 checkout">
                <div className="columns ">
                    <div className="column is-8 ">
                        <CheckoutForm />
                    </div>

                    <div className="column is-4">
                        <CheckoutCart products={products} />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Checkout;
