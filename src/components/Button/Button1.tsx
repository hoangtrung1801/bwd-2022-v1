import './button.css';
const Button1 = ({children}) => {

    return (
        <button className='button button1'>
            {children}
        </button>
    )
}

export default Button1;