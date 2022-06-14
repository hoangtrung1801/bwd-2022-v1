import { useEffect } from "react";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import Button3 from "../../components/Button/Button3";
import Layout from "../../components/Layout";
import useToken from "../../utils/hook/useToken";
import "./checkout.css";
import CheckoutCart from "./components/CheckoutCart";
import CheckoutForm from "./components/CheckoutForm";

interface CheckoutProps {}

const Checkout: React.FC<CheckoutProps> = () => {
    const navigate = useNavigate();
    const products = useAppSelector(state => state.cart.items);
    const {token, setToken} = useToken();


    const onCheckout = () => {
        const fakeFetch = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(0);
            }, 1000)
        })

        toast.promise(fakeFetch, {
            loading: ( <b>Đang thanh toán...</b> ),
            success: <b>Bạn đã thanh toán thành công !</b>,
            error: <b>Lỗi</b>,
        }, {
            style: {
                padding: '2rem 2rem',
                backgroundColor: 'var(--color-1)',
                color: 'white',
                fontWeight: 'bold',
            },
            iconTheme: {
                primary: 'white',
                secondary: 'var(--dark)'
            },
            duration: 3000
        })

        setTimeout(() => navigate('/'), 3000);
    }

    useEffect(() => {
        if(!token) {
            toast.error("Vui lòng đăng nhập!", {duration: 1000});
            setTimeout(() => {
                navigate('/');
            }, 1000);
        }
    }, []);

    return (
        <Layout>
            <div className="container py-6 checkout">
                <div className="columns ">
                    <div className="column is-8 ">
                        <CheckoutForm />
                    </div>

                    <div className="column is-4">
                        <CheckoutCart products={products} onCheckout={onCheckout} />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Checkout;
