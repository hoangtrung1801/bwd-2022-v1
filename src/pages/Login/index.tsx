import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";
import Button4 from "../../components/Button/Button4";
import Layout from "../../components/Layout";
import { auth } from "../../firebase";
import useToken from "../../utils/hook/useToken";
import { useViewport } from "../../utils/hook/useViewport";
import "./login.css";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { token, setToken } = useToken();
    const { isMobile } = useViewport();

    if (token) {
        return <Navigate to="/" />;
    }

    const onLogin = async (body: any) => {
        try {
            const { email, password } = body;
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            setToken(userCredential.user.uid);
            return <Navigate to="/signup" />;
        } catch(e: FirebaseError | any) {
            toast.error("Tên đăng nhập hoặc mật khẩu bị sai");
        }
    };

    return (
        <Layout>
            <div className='login full-width'>
                <div className="columns full-width full-height m-0">
                    <div className="column is-6 py-0 px-4">
                        <div className="full-height is-flex is-flex-direction-column mx-auto" style={{maxWidth: '400px', marginTop: '6rem'}}>
                            <div className="block">
                                <h1 className="is-size-2 has-text-weight-bold">
                                    Chào Mừng Bạn
                                </h1>
                                <p className="is-size-7">
                                    Hãy đăng nhập vào tài khoản ! Nếu chưa có hãy đăng ký !
                                </p>
                            </div>
                            <form onSubmit={handleSubmit(onLogin)}>
                                <div className="field">
                                    <div className="control">
                                        <input
                                            type="text"
                                            className="input"
                                            placeholder="Email"
                                            {...register("email")}
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <input
                                            type="password"
                                            className="input"
                                            placeholder="Mật khẩu"
                                            {...register("password")}
                                        />
                                    </div>
                                </div>
                                <div className="my-5">
                                    <Button4 className="login-button">Đăng nhập</Button4>
                                </div>
                                <div>
                                    <Link
                                        to="/signup"
                                        className="is-italic has-text-grey"
                                        style={{textDecoration: 'underline'}}
                                    >
                                        Bạn chưa có tài khoản ? Đăng ký ngay
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                    {!isMobile && (
                        <div className="column is-6 p-0 is-relative" style={{overflow: 'hidden'}}>
                            <div className="login-background is-flex is-align-items-center">
                            </div>
                            <div className='full-width full-height has-text-centered is-flex is-flex-direction-column is-align-items-center' style={{marginTop: '6rem'}}>
                                <h1 className="is-size-2 has-text-white has-text-weight-bold ">LAVIE</h1>
                                <h1 className="is-size-6 has-text-white has-text-white mb-6">Cùng chung tay bảo vệ môi trường</h1>
                                <img src="/assets/login.svg" alt="" style={{height: '60%'}} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default Login;

// const test = () => (
//             <div
//                 className="login"
//                 // style={{ padding: isMobile ? "1rem" : "6rem 5rem" }}
//             >
//                 {/* <div
//                     className="is-flex is-align-items-center is-flex-direction-column is-justify-content-center has-text-centered"
//                     style={{background: 'white', minWidth: '600px', minHeight:'600px'}}
//                 >
//                 </div> */}
//                 <div className="columns full-height full-width">
//                     <div className="column is-7 has-background-white">
//                         <div className="login-column full-height p-6 has-text-centered">
//                             <div className="block">
//                                 <h1 className="is-size-3 has-text-weight-bold is-uppercase">
//                                     Đăng nhập
//                                 </h1>
//                                 <p className="is-size-7">
//                                     Chào mừng bạn! Hãy đăng nhập vào tài khoản
//                                 </p>
//                             </div>
//                             <form onSubmit={handleSubmit(onLogin)}>
//                                 <div className="field">
//                                     <div className="control">
//                                         <input
//                                             type="text"
//                                             className="input"
//                                             placeholder="Email"
//                                             {...register("email")}
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="field">
//                                     <div className="control">
//                                         <input
//                                             type="password"
//                                             className="input"
//                                             placeholder="Mật khẩu"
//                                             {...register("password")}
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="my-5">
//                                     <Button1>Đăng nhập</Button1>
//                                 </div>
//                                 <div>
//                                     <Link
//                                         to="/signup"
//                                         className="is-italic has-text-grey"
//                                     >
//                                         Bạn chưa có tài khoản ? Đăng ký ngay
//                                     </Link>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                     <div
//                         className="column is-5 has-background-white p-0"
//                         style={{ overflow: "hidden" }}
//                     >
//                         <div className="login-background"></div>
//                         {/* <div className="login-background is-5">

//                             </div> */}
//                         {/* <div className="login-column full-height p-6 has-text-centered">
//                                 <h1 className="is-size-3 has-text-weight-bold block is-uppercase">
//                                     hoặc
//                                 </h1>
//                                 {
//                                     isMobile ? (
//                                         <div className="social-btn-mobile">
//                                             <FacebookLogo className="btn-facebook"/>
//                                             <GoogleLogo className="btn-google"/>
//                                             <GithubLogo className='btn-github'/>
//                                         </div>
//                                     ) : (
//                                         <div>
//                                             <FacebookSocialButton />
//                                             <GoogleSocialButton />
//                                             <GithubSocialButton />
//                                         </div>
//                                     )
//                                 }
//                             </div> */}
//                     </div>
//                 </div>
//             </div>
// )