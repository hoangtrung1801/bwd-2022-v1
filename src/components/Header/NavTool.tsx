const NavTool = ({ children, icon, ...rest }) => {
    return (
        <a
            className="is-flex is-align-items-center is-flex-direction-column mr-4 modal-search-btn has-text-white "
            href="#"
            {...rest}
        >
            <span className="icon mb-1 is-size-3">
                {icon}
            </span>
            <span className="is-size-7 has-text-weight-medium">{children}</span>
        </a>
    );
};

export default NavTool;