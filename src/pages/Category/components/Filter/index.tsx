import './filter.css'

const Filter = () => {

    return (
        <div className='filter'>
            <h3 className="is-size-5 has-text-weight-bold is-uppercase mb-2">Filter by</h3>
            <div>
                <p className="has-text-weight-medium is-uppercase">Categories</p>
                <ul>
                    {
                        Array(5).fill(0).map((_, id) => (
                            <li className="is-flex is-align-items-center my-3">
                                <input type="checkbox" name={`cb-${id}`} id={`cb-${id}`} className="is-size-5 mr-4" />
                                <label htmlFor={`cb-${id}`} className="has-cursor-pointer">Filter 1</label>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Filter;