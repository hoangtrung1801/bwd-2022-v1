import './button.css';

const Button3 = ({children, ...rest}) => {

    return (
        <button className="button button3" {...rest}>{children}</button>
    )
}

export default Button3;