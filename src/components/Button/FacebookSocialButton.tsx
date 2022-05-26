import { FacebookLogo } from 'phosphor-react';
import './button.css';

const FacebookSocialButton = () => {
  return (
      <div className='button social-btn btn-facebook block'>
          <FacebookLogo className='is-size-3 mr-2'/>
          <span className='has-text-weight-semibold'>Đăng nhập bằng Facebook</span>
      </div>
  )
}

export default FacebookSocialButton