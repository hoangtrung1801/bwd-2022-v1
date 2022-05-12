import './button.css';

interface Button1Props {
    children: React.ReactNode;
}

const Button1: React.FC<Button1Props> = ({children, ...rest}) => {

    return (
        <button className='button button1' {...rest}>
            {children}
        </button>
    )
}

export default Button1;