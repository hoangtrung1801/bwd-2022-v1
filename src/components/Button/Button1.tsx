import './button.css';
const Button1 = ({children, ...rest}) => {

    return (
        <button className='button button1' {...rest}>
            {children}
        </button>
    )
}

export default Button1;