import './button.css';

interface Button4Props {
    children: React.ReactNode,
    onClick?: React.MouseEventHandler,
    className ?: string,
}

const Button4: React.FC<Button4Props> = ({children, onClick, className}) => {
  return (
        <button className={ `button button4 ${className}` } onClick={onClick || undefined}>{children}</button>
  )
}

export default Button4;