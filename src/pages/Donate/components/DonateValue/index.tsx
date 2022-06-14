import { motion } from 'framer-motion';
import { ArrowClockwise, ArrowsClockwise, Drop, Leaf } from 'phosphor-react';
import { useInView } from 'react-intersection-observer';
import { DONATENOW, donateValueSections } from '../../../../utils/constant';
import { useViewport } from '../../../../utils/hook/useViewport';
import { donateValueShow, inViewDropupShow, inViewParentShow } from '../../../../utils/variants';
import './donate-value.css';

interface DonateValueProps {
}

const DonateValue: React.FC<DonateValueProps> = ({}) => {

    const {isMobile, isMobileTablet} = useViewport();
    const {inView, ref} = useInView();

    return (
        <div className={ `donate-value-wrapper ${isMobile && 'px-4'}` }>
            <motion.div className="donate-value tile is-ancestor is-flex-wrap-wrap"
                ref={ref}
                variants={inViewParentShow}
                initial='hidden'
                whileInView='visible'
                viewport={{once: true}}
            >
                {donateValueSections.map((item, id) => (
                    <motion.div className={ `tile is-parent ${isMobileTablet && 'is-12'}` }
                        variants={donateValueShow}
                    >
                        <div className='donate-value-item p-6 tile is-child is-flex is-flex-direction-column is-justify-content-space-between'>
                            <div className='mb-2 has-text-centered'>
                                {
                                    id === 0 && <Leaf weight='bold' size={64} color='var(--green-7)'/>
                                }
                                {
                                    id === 1 && <Drop weight='bold' size={64} color='var(--green-7)'/>
                                }
                                {
                                    id === 2 && <ArrowsClockwise weight='bold' size={64} color='var(--green-7)'/>
                                }

                            </div>
                            <div className="block has-text-centered">
                                <h2 className='is-size-5 has-text-weight-bold is-uppercase' style={{color: 'var(--green-6)'}}>{item.title}</h2>
                            </div>
                            <div className='block has-text-centered'>
                                <p className='has-text-grey'>
                                    {item.content}
                                </p>
                            </div>
                            <div className='has-text-centered'>
                                <a href="#donate" className='is-uppercase is-size-7 has-text-weight-semibold font-body'>{DONATENOW}</a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default DonateValue;
