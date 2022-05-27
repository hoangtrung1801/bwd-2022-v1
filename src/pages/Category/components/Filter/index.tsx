import { categories } from '../../../../utils/constant';
import './filter.css'

const Filter = () => {

    return (
        <div className='filter'>
            <h3 className="is-size-5 has-text-weight-bold is-uppercase block">Phân loại</h3>
            <div className=''>
                <p className="has-text-weight-medium is-uppercase mb-5">Thể loại</p>
                <ul className='is-flex is-flex-wrap-wrap'>
                    {
                        categories.map((category, id) => (
                            <li className="filter-item is-flex is-align-items-center my-2">
                                <input type="checkbox" name={`cb-${id}`} id={`cb-${id}`} className="is-size-5 mr-4 is-clickable" />
                                <label htmlFor={`cb-${id}`} className="has-cursor-pointer">{category.label}</label>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Filter;