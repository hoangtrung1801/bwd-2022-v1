import { FacebookLogo, GithubLogo, InstagramLogo } from 'phosphor-react';
import { useViewport } from '../../utils/hook/useViewport';
import './footer.css';

const Footer = () => {

    const {isMobile} = useViewport();

    return (
        <div className="footer-wrap">
            <div className="footer ">
                {
                    !isMobile && (

                    <div className='mb-5 px-6'>
                        <p className='has-text-weight-bold mb-3' style={{fontSize: '1.1rem'}}>Thành viên</p>
                        <div className='tile is-ancestor'>
                            <div className='tile is-parent is-3'>
                                <div className='tile is-child' style={{letterSpacing: '1px'}}>
                                    <p className='mb-1'>Lê Kim Hoàng Trung</p>
                                    <p className='mb-1'>MSV: 21IT052</p>
                                    <a href="https:/fb.com/trung181">
                                        <FacebookLogo size={30} className='mr-3'/>
                                    </a>
                                    <a href="https://github.com/hoangtrung1801">
                                        <GithubLogo size={30} className='mr-3'/>
                                    </a>
                                    <a href="#">
                                        <InstagramLogo size={30} className='mr-3'/>
                                    </a>
                                </div>
                            </div>
                            <div className='tile is-parent is-3'>
                                <div className='tile is-child' style={{letterSpacing: '1px'}}>
                                    <p className='mb-1'>Lê Kim Hoàng Trung</p>
                                    <p className='mb-1'>MSV: 21IT052</p>
                                    <a href="https:/fb.com/trung181">
                                        <FacebookLogo size={30} className='mr-3'/>
                                    </a>
                                    <a href="https://github.com/hoangtrung1801">
                                        <GithubLogo size={30} className='mr-3'/>
                                    </a>
                                    <a href="#">
                                        <InstagramLogo size={30} className='mr-3'/>
                                    </a>
                                </div>
                            </div>
                            <div className='tile is-parent is-3'>
                                <div className='tile is-child' style={{letterSpacing: '1px'}}>
                                    <p className='mb-1'>Lê Kim Hoàng Trung</p>
                                    <p className='mb-1'>MSV: 21IT052</p>
                                    <a href="https:/fb.com/trung181">
                                        <FacebookLogo size={30} className='mr-3'/>
                                    </a>
                                    <a href="https://github.com/hoangtrung1801">
                                        <GithubLogo size={30} className='mr-3'/>
                                    </a>
                                    <a href="#">
                                        <InstagramLogo size={30} className='mr-3'/>
                                    </a>
                                </div>
                            </div>
                            <div className='tile is-parent is-3'>
                                <div className='tile is-child' style={{letterSpacing: '1px'}}>
                                    <p className='mb-1'>Lê Kim Hoàng Trung</p>
                                    <p className='mb-1'>MSV: 21IT052</p>
                                    <a href="https:/fb.com/trung181">
                                        <FacebookLogo size={30} className='mr-3'/>
                                    </a>
                                    <a href="https://github.com/hoangtrung1801">
                                        <GithubLogo size={30} className='mr-3'/>
                                    </a>
                                    <a href="#">
                                        <InstagramLogo size={30} className='mr-3'/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }
                <div className='is-flex is-justify-content-center is-align-items-center is-flex-direction-column has-text-centered'>
                    <p>Copyright © 2022 - Trường Đại học Công nghệ Thông tin & Truyền Thông Việt - Hàn, Đại học Đà Nẵng</p>
                    <p>Địa chỉ: 470 Đường Trần Đại Nghĩa, Hoà Hải, Ngũ Hành Sơn, Đà Nẵng </p>
                    <figure className="image mt-4" style={{width: '100px'}}>
                        <img src='/assets/vku.png' alt="" />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default Footer;
