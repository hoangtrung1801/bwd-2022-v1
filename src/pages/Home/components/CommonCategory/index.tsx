import Button1 from '../../../../components/Button/Button1';
import Button2 from '../../../../components/Button/Button2';
import Button3 from '../../../../components/Button/Button3';
import './common-category.css';

const CommonCategory = () => {

    return (
        <div className="common-category">
            <div className="has-text-centered p-6">
                <div>
                    <p className="is-size-4 has-text-weight-bold">
                        Bright idea
                    </p>
                    <p className="is-size-7">
                        Boosts Brightness & Elasticity In 1 Use With
                        Clinical-Grade Vitamin C
                    </p>
                </div>
                <div className="columns is-flex-wrap-wrap is-justify-content-center my-4">
                    {Array(6)
                        .fill(0)
                        .map((item, id) => {
                            return (
                                <div className="common-category-item column is-3" key={id}>
                                    <div>
                                        <figure className="image is-1by1">
                                            <img
                                                src={ `https://picsum.photos/id/${Math.ceil( Math.random() * 100 + 10)}/1200` }
                                                alt="" />
                                        </figure>
                                        <div className="has-text-centered my-4">
                                            <p className="has-text-weight-bold mb-2">
                                                Bright Idea Moisturizer
                                            </p>
                                            <p className="is-size-7">
                                                Vitamin C + Tri-Peptide Collagen
                                                Protecting & Brightening Moisturizer
                                            </p>
                                        </div>
                                        <div>
                                            <Button2>ADD TO BAG</Button2>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default CommonCategory;