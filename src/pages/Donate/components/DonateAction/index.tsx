import './donate-action.css';

interface DonateActionProps {
    isLeft?: boolean
}

const donateActionSection = {
    image: '/assets/donate-2.jpg',
    title: 'Make Donation',
    content: 'We are a larhge froup of people who powered movement fighting for a '
}

const DonateAction: React.FC<DonateActionProps> = ({isLeft = false}) => {
  return (
      <div className="donate-action-wrapper is-flex is-justify-content-center is-align-items-center">
          <div className="donate-action is-relative">
              <figure className="image is-9by6">
                  <img src={donateActionSection.image} alt=""/>
              </figure>
              <div className={ `donate-action-content ${isLeft && 'donate-action-content-left'}` }>
                  <div className="block">
                    <p className='is-size-2 has-text-weight-bold'>{donateActionSection.title}</p>
                  </div>
                  <div className="block">
                      <p className=''>{donateActionSection.content}</p>
                  </div>
                  <div className="block">
                      <a href="#" className='is-uppercase is-size-6 has-text-weight-semibold'>Donate now</a>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default DonateAction