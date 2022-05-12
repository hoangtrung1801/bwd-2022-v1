import { useForm } from "react-hook-form";
import axios from 'axios';
import Button1 from "../../components/Button/Button1";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import "./login.css";
import useToken from "../../utils/hook/useToken";
import { useNavigate, useRoutes } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const {register, handleSubmit} = useForm();
    const {token, setToken} = useToken();

    if(token) {
        navigate('/');
    }

    const onLogin = async (body: any) => {
        const result = await axios.post('/api/login', body);
        const {token} = result.data;

        setToken(token);
        navigate('/');
    }

    return (
        <div>
            <Header />
            <main className="main">
                <div className="login">
                    <div className="columns full-height">
                        <div className="column is-half">
                            <div className="login-column full-height pt-6 px-6 has-text-centered">
                                <h1 className="is-size-4 has-text-weight-bold">Introduce my team</h1>
                            </div>
                        </div>
                        <div className="column is-half">
                            <div className="login-column full-height pt-6 px-6 has-text-centered">
                                <div className="block">
                                    <h1 className="is-size-3 has-text-weight-bold is-uppercase">Login</h1>
                                    <p className="">Welcome back! Log in your account here:</p>
                                </div>
                                <form onSubmit={handleSubmit(onLogin)}>
                                    <div className="field">
                                        <div className="control">
                                            <input
                                                type="text"
                                                className="input"
                                                placeholder="Your email"
                                                {...register('email')}
                                            />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <input
                                                type="password"
                                                className="input"
                                                placeholder="Password"
                                                {...register('password')}
                                            />
                                        </div>
                                    </div>
                                    <div className="my-5">
                                        <Button1>Log in</Button1>
                                        {/* <button className="button">Login</button> */}
                                        {/* <button className="color-button">
                                            Log in
                                        </button> */}
                                    </div>
                                    <div>
                                        <a href="#" className="has-text-black">
                                            Forgot your password ?
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Login;
