import './button.css';

interface Button5Props {
    children: React.ReactNode,
    onClick?: React.MouseEventHandler,
    className ?: string,
}

const Button5: React.FC<Button5Props> = ({children, onClick, className}) => {
  return (
        <button className={ `button button5 ${className}` } onClick={onClick || undefined}>{children}</button>
  )
}

export default Button5;