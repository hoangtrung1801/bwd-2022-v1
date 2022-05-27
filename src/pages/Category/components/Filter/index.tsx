import { Dispatch, SetStateAction } from 'react';
import { categories } from '../../../../utils/constant';
import CategoryItem from '../../../../utils/types/CategoryItem';
import './filter.css'

interface FilterProps {
    setCategory: (id: number, state: boolean) => void,
}

const Filter: React.FC<FilterProps> = ({setCategory}) => {

    const chooseCategory = (id: number) => {
        setCategory(id, true);
    }

    const removeCategory = (id: number) => {
        setCategory(id, false);
    }

    return (
        <div className='filter'>
            <h3 className="is-size-5 has-text-weight-bold is-uppercase block">Phân loại</h3>
            <div className=''>
                <p className="has-text-weight-medium is-uppercase mb-5">Thể loại</p>
                <ul className='is-flex is-flex-wrap-wrap'>
                    {
                        categories.map((category, id) => (
                            <li className="filter-item is-flex is-align-items-center my-2">
                                <input type="checkbox" name={`cb-${id}`} id={`cb-${id}`} className="is-size-5 mr-4 is-clickable" onClick={(e: any) => e.target.checked ? chooseCategory(id) : removeCategory(id)}/>
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