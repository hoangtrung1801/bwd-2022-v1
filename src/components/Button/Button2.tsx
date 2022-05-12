
const Button2 = ({children, ...rest}) => {

    return (
        <button className="button button2" {...rest}>
            {children}
        </button>
    )
}

export default Button2;