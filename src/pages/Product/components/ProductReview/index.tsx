import { Heart, Star } from "phosphor-react";

const ProductReivews = () => {

    return (
        <div className="" style={{marginTop: '8rem'}}>
            <div>
                <p className="is-size-3 has-text-weight-bold is-uppercase">Đánh giá</p>
                <hr />
            </div>
            <div>
                {
                    Array(6).fill(0).map((_, id) => (
                        <>
                            <article className="media" key={id} style={{border: 'none'}}>
                                <figure className="media-left" >
                                    <p className="image is-64x64">
                                    <img src="https://bulma.io/images/placeholders/128x128.png"/>
                                    </p>
                                </figure>
                                <div className="media-content">
                                    <div className="">
                                        <div className="mb-1">
                                            <p className="mb-1"><strong>John Smith</strong>   <small className="ml-2 is-italic is-size-7 has-text-grey">12/11/2022</small></p>
                                            <div>
                                                {Array(5).fill(0).map((_, id) => (<Star key={id} weight='fill' color='#ffd700'/>))}
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                                    </div>
                                </div>
                            </article>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductReivews;