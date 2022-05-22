import { DONATENOW, donateValueSections } from '../../../../utils/constant';
import { useViewport } from '../../../../utils/hook/useViewport';
import './donate-value.css';

interface DonateValueProps {
}

const DonateValue: React.FC<DonateValueProps> = ({}) => {

    const {isMobile, isMobileTablet} = useViewport();

    return (
        <div className={ `donate-value-wrapper ${isMobile && 'px-4'}` }>
            <div className="donate-value tile is-ancestor is-flex-wrap-wrap">
                {donateValueSections.map((item, id) => (
                    <div className={ `tile is-parent ${isMobileTablet && 'is-12'}` }>
                        <div className='donate-value-item p-6 tile is-child is-flex is-flex-direction-column is-justify-content-space-between'>
                            <div className="block">
                                <h2 className='is-size-5 has-text-weight-bold is-uppercase'>{item.title}</h2>
                            </div>
                            <div className='block'>
                                <p className='has-text-grey'>
                                    {item.content}
                                </p>
                            </div>
                            <div>
                                <a href="#" className='is-uppercase is-size-7 has-text-weight-semibold font-body'>{DONATENOW}</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DonateValue;
