import { Star } from "phosphor-react";
import { useState } from "react";
import AmountContainer from "../../../../components/AmountContainer";
import Button3 from "../../../../components/Button/Button3";
import OptionContainer from "../../../../components/OptionContainer";
import './product-view.css';

const imgSrc = Array(4).fill(0).map((_, id) => `https://picsum.photos/id/${Math.ceil( Math.random() * 100 + 10)}/1000`);

const ProductView = () => {
    const [imgId, setImgId] = useState(0);

    return (
        <div className="columns block mb-6">
            <div className="column is-1 px-0">
                <div className="product-view-images">
                    {Array(4)
                        .fill(0)
                        .map((_, id) => (
                            <div className={ `mb-1 has-cursor-pointer ${id === imgId ? 'product-view-images-show' : ''}` } onMouseOver={() => setImgId(id)}>
                                <figure className="image is-1by1">
                                    <img
                                        src={imgSrc[id]}
                                        alt=""
                                    />
                                </figure>
                            </div>
                        ))}
                </div>
            </div>
            <div className="column is-5">
                <figure className="image is-1by1">
                    <img
                        src={imgSrc[imgId]}
                        alt=""
                    />
                </figure>
            </div>
            <div className=" column is-5">
                <div className="product-view-content">
                    <h3 className="is-size-3 has-text-weight-bold">Product title</h3>
                    <div>
                        <div>
                            {Array(5)
                                .fill(0)
                                .map((_, id) => (
                                    <Star className="mr-1" />
                                ))}
                        </div>
                    </div>
                    <p className="is-size-4 has-text-weight-bold">$99.99</p>
                    <p style={{fontSize: '0.9rem'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempore mollitia ea est similique assumenda aliquam
                        totam id, adipisci quaerat aut quas atque harum vero
                        eaque asperiores recusandae excepturi facere
                        consequuntur!
                    </p>
                    <div className="product-view-variants block">
                        <div className="product-view-variants-item is-flex is-align-items-center block">
                            <p className="is-size-7 is-uppercase has-text-weight-bold">Size : </p>
                            <OptionContainer options={['S', 'M', 'L']}/>
                        </div>
                        <div className="product-view-variants-item is-flex is-align-items-center block">
                            <p className="is-size-7 is-uppercase has-text-weight-bold">Quantity : </p>
                            <AmountContainer />
                        </div>
                    </div>
                    <div>
                        <Button3>ADD TO CART</Button3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductView;
