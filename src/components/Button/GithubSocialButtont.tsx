import { GithubLogo } from 'phosphor-react';
import './button.css';

const GithubSocialButton = () => {
  return (
      <div className='button social-btn btn-github block'>
          <GithubLogo className='is-size-3 mr-2'/>
          <span className='has-text-weight-semibold'>Đăng nhập bằng Github</span>
      </div>
  )
}

export default GithubSocialButton