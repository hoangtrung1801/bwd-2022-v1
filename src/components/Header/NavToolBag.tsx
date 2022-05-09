import NavTool from './NavTool';

const NavToolBag = ({ children, icon, ...rest }) => {

    return (
        <div className='is-relative' style={{cursor: 'pointer'}} {...rest}>
            <NavTool icon={icon}>{children}</NavTool>
            <div className="cart-amount">
                <span>0</span>
            </div>
        </div>
    );
};

export default NavToolBag;