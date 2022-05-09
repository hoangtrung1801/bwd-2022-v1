import './footer.css';

const Footer = () => {

    const content = [
        [ "Company", "Gift Cards", "Contact Us", "Shipping", "Returns", "Ordering & Payment", "SMS Texts and Alerts", ],
        [ "Company", "Gift Cards", "Contact Us", "Shipping", "Returns", "Ordering & Payment", "SMS Texts and Alerts", ],
        [ "Company", "Gift Cards", "Contact Us", "Shipping", "Returns", "Ordering & Payment", "SMS Texts and Alerts", ],
    ]

    return (
        <div className="footer-wrap is-flex p-0 mt-auto">
            <div className="footer is-relative">
                <figure className="image logo is-3by2">
                    <img src="https://picsum.photos/200/300" />
                </figure>
                {
                    content.map((_) => {
                        return (
                            <div className="footer-info">
                                {
                                    _.map((content, id) => (
                                        <p className={`${id === 0 ? 'footer-info-title' : ''}`}>{content}</p>
                                    ))
                                }
                            </div>
                        )
                    })
                }
                <div className="footer-copyright">
                    <p>© 2022 Da Nang</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
