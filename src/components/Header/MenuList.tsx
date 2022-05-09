const MenuList = ({isMenulistHovered}) => {
    return (
        <div
            className={`sub-header p-6 has-text-black has-shadow has-background-white is-flex is-align-items-center is-justify-content-center ${
                isMenulistHovered ? "sub-header-show" : ""
            }`}
        >
            <div className="columns">
                <div className="column is-half ">
                    <div className="columns m-0">
                        <div className="columnis-size-7 is-flex-direction-column">
                            <div className="list-category is-flex is-flex-direction-column">
                                <p className="has-text-weight-bold mb-2">
                                    by category
                                </p>
                                {Array(8)
                                    .fill(0)
                                    .map((item, id) => (
                                        <a
                                            href="#"
                                            className="has-text-black"
                                            key={id}
                                        >
                                            menu {id + 1}
                                        </a>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <p className="has-text-weight-bold mb-2">collections</p>
                    <div className="is-flex collections">
                        {Array(2)
                            .fill(0)
                            .map((item, id) => (
                                <figure className="image is-128x128" key={id}>
                                    <img src="https://bulma.io/images/placeholders/128x128.png" />
                                </figure>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuList;
