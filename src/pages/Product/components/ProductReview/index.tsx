import { Heart, Star } from "phosphor-react";

const ProductReivews = () => {

    return (
        <div className="block">
            <div>
                <p className="is-size-3 has-text-weight-bold is-uppercase">Reviews</p>
                <hr />
            </div>
            <div>
                {
                    Array(5).fill(0).map((_, id) => (
                        <>
                            <article className="media" key={id}>
                                <figure className="media-left" >
                                    <p className="image is-64x64">
                                    <img src="https://bulma.io/images/placeholders/128x128.png"/>
                                    </p>
                                </figure>
                                <div className="media-content">
                                    <div className="">
                                        <div className="mb-1">
                                            <p><strong>John Smith</strong>   <small>12/11/2022</small></p>
                                            <div>
                                                {Array(5).fill(0).map((_, id) => (<Star key={id}/>))}
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                                    </div>
                                </div>
                            </article>
                            <hr />
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductReivews;