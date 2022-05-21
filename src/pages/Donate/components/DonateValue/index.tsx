import { DONATENOW, donateValueSections } from '../../../../utils/constant';
import { useViewport } from '../../../../utils/hook/useViewport';
import './donate-value.css';

interface DonateValueProps {
}

const DonateValue: React.FC<DonateValueProps> = ({}) => {

    const {isMobile, isMobileTablet} = useViewport();

    return (
        <div className={ `donate-value-wrapper ${isMobile && 'px-4'}` }>
            {/* <div className="columns donate-value is-flex-wrap-wrap"> */}
            <div className="donate-value tile is-ancestor is-flex-wrap-wrap">
                {donateValueSections.map((item, id) => (
                    // <div className="column is-4-desktop is-12-tablet is-12-mobile">
                    <div className={ `tile is-parent ${isMobileTablet && 'is-12'}` }>
                        <div className='donate-value-item p-6 tile is-child is-flex is-flex-direction-column is-justify-content-space-between'>
                            <div className="block">
                                <p className='is-size-5 has-text-weight-bold is-uppercase'>{item.title}</p>
                            </div>
                            <div className='block'>
                                <p className='has-text-grey'>
                                    {item.content}
                                </p>
                            </div>
                            <div>
                                <a href="#" className='is-uppercase is-size-7 has-text-weight-semibold'>{DONATENOW}</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DonateValue;
