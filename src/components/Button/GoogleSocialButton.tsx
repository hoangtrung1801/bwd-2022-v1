import { GoogleLogo } from 'phosphor-react';
import './button.css';

const GoogleSocialButton = () => {
  return (
      <div className='button social-btn btn-google '>
          <GoogleLogo className='is-size-3 mr-2'/>
          <span className='has-text-weight-semibold'>Đăng nhập bằng Google</span>
      </div>
  )
}

export default GoogleSocialButton