import './sortby.css';

const SortBy = () => {

    return (
        <div className="sortby is-flex is-flex-direction-row-reverse block pb-4">
            <div className="is-flex is-align-items-center">
                <p className="mr-4">Sort by : </p>
                <div className="select is-small">
                    <select name="" id="">
                        {
                            Array(5).fill(0).map((_, id) => (
                                <option key={id} value="option">Option {id+1}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </div>
    )
}

export default SortBy;