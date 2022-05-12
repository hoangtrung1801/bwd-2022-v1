import './button.css';

interface Button3Props {
    children: React.ReactNode
}

const Button3 : React.FC<Button3Props> = ({children, ...rest}) => {

    return (
        <button className="button button3" {...rest}>{children}</button>
    )
}

export default Button3;