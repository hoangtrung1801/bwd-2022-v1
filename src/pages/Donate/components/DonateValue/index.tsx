import './donate-value.css';

interface DonateValueProps {
}

const donateValueSections = [
    {
        title: "save our forest",
        content:
            "lorem ipsum, dolor sit amet consectetur adipisicing elit. at ducimus quaerat itaque est tempora quis provident eligendi, nam quas assumenda nesciunt, sapiente, exercitationem neque?",
    },
    {
        title: "save our forest",
        content:
            "lorem ipsum, dolor sit amet consectetur adipisicing elit. at ducimus quaerat itaque est tempora quis provident eligendi, nam quas assumenda nesciunt, sapiente, exercitationem neque?",
    },
    {
        title: "save our forest",
        content:
            "lorem ipsum, dolor sit amet consectetur adipisicing elit. at ducimus quaerat itaque est tempora quis provident eligendi, nam quas assumenda nesciunt, sapiente, exercitationem neque?",
    },
];

const DonateValue: React.FC<DonateValueProps> = ({}) => {
    return (
        <div className="donate-value-wrapper">
            <div className="columns donate-value">
                {donateValueSections.map((item, id) => (
                    <div className="column is-4  ">
                        <div className='donate-value-item p-6'>
                            <div className="block">
                                <p className='is-size-5 has-text-weight-bold is-capitalized'>save our forest</p>
                            </div>
                            <div className='block'>
                                <p className='has-text-grey'>
                                    lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. at ducimus quaerat itaque
                                    est tempora quis provident eligendi, nam
                                    quas assumenda nesciunt, sapiente,
                                    exercitationem neque?{" "}
                                </p>
                            </div>
                            <div>
                                <a href="#" className='is-uppercase is-size-7 has-text-weight-semibold'>Donate now</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DonateValue;
