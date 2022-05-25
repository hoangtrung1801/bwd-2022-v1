// @ts-ignore
import Slider from "react-slick";
import { FacebookLogo, GithubLogo, InstagramLogo } from "phosphor-react";
import Button2 from "../../components/Button/Button2";
import Layout from "../../components/Layout";
import NextArrowCarousel from "../../components/NextArrowCarousel";
import PrevArrowCarousel from "../../components/PrevArrowCarousel";
import { useViewport } from "../../utils/hook/useViewport";
import "./about-me.css";
import { members } from "../../utils/constant";

const AboutMe = () => {
    const { isMobile } = useViewport();

    const settings = {
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrowCarousel />,
        prevArrow: <PrevArrowCarousel />,
        // autoplay: true,
        // autoplaySpeed: 5000,
        dots: true,
        customPaging: function (i: number) {
            return (
                <div className="dots">
                    <figure className="image">
                        <img src={members[i].image} alt="" />
                    </figure>
                </div>
            );
        },
    };

    return (
        <Layout>
            <div className="is-relative about-me px-6">
                <Slider {...settings}>
                    {members.map((member, id) => (
                        <div className="about-me-member" key={id}>
                            <div className="columns full-height">
                                <div className="column is-half">
                                    <div
                                        className={`full-height is-flex is-flex-direction-column is-justify-content-center has-text-right ${
                                            isMobile
                                                ? "is-align-items-center"
                                                : "is-align-items-end"
                                        }`}
                                    >
                                        <h1 className="title is-1 block is-uppercase">
                                            {member.name}
                                        </h1>
                                        <p className="block has-text-right">
                                            {member.description}
                                        </p>
                                        <div className="is-size-3 block">
                                            <a
                                                target="_blank"
                                                href={member.facebook}
                                            >
                                                <FacebookLogo
                                                    color="#0096ff"
                                                    className="mr-2 is-clickable"
                                                />
                                            </a>
                                            <a
                                                target="_blank"
                                                href={member.github}
                                            >
                                                <GithubLogo
                                                    color="#161414"
                                                    className="mr-2 is-clickable"
                                                />
                                            </a>
                                            <a
                                                target="_blank"
                                                href={member.instagram}
                                            >
                                                <InstagramLogo
                                                    color="#c22867"
                                                    className="mr-2 is-clickable"
                                                />
                                            </a>
                                        </div>
                                        {/* <Button2>Know more</Button2> */}
                                    </div>
                                </div>
                                <div className="column is-half">
                                    <div
                                        className={`full-height is-flex is-align-items-center ${
                                            isMobile
                                                ? "is-justify-content-center"
                                                : "is-justify-content-flex-start "
                                        }`}
                                    >
                                        <div
                                            className="about-me-member-image"
                                            style={{width: '70%', height: '90%'}}
                                        >
                                            <img
                                                src={member.image}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </Layout>
    );
};

export default AboutMe;
