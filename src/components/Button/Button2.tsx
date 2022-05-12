import './button.css';

interface Button2Props {
    children: React.ReactNode
}

const Button2: React.FC<Button2Props> = ({children, ...rest}) => {

    return (
        <button className="button button2" {...rest}>
            {children}
        </button>
    )
}

export default Button2;