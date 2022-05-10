import Button1 from "../../components/Button/Button1";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import "./login.css";

const Login = () => {
    return (
        <div>
            <Header />
            <main className="main">
                <div className="login">
                    <div className="columns full-height">
                        <div className="column is-half">
                            <div className="login-column full-height pt-6 px-6 has-text-centered">
                                <h1 className="is-size-4 has-text-weight-bold">Introcue my team</h1>
                            </div>
                        </div>
                        <div className="column is-half">
                            <div className="login-column full-height pt-6 px-6 has-text-centered">
                                <div className="block">
                                    <h1 className="is-size-3 has-text-weight-bold is-uppercase">Login</h1>
                                    <p className="">Welcome back! Log in your account here:</p>
                                </div>
                                <form action="post">
                                    <div className="field">
                                        <div className="control">
                                            <input
                                                type="text"
                                                className="input"
                                                placeholder="Your email"
                                            />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <input
                                                type="text"
                                                className="input"
                                                placeholder="Password"
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
