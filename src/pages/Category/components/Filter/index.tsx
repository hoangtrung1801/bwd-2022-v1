import { CaretDown } from 'phosphor-react';
import { categories } from '../../../../utils/constant';
import './filter.css';

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
            <h3 className="is-size-4 has-text-weight-semibold block">Phân loại</h3>
            <div className='mb-3'>
                <p className="has-text-weight-semibold mb-2 is-flex is-justify-content-space-between is-align-items-center" style={{lineHeight: '2rem'}}>
                    <span className=''>Loại</span>
                    <CaretDown />
                </p>
                <ul className='is-flex is-flex-wrap-wrap'>
                    {
                        categories.map((category, id) => (
                            <li className="filter-item is-flex is-align-items-center my-2 has-text-grey" key={id}>
                                <input type="checkbox" name={`cb-${id}`} id={`cb-${id}`} className="mr-3 is-clickable" style={{borderColor: '#7a7a7a'}} onClick={(e: any) => e.target.checked ? chooseCategory(id) : removeCategory(id)}/>
                                <label htmlFor={`cb-${id}`} className="has-cursor-pointer">{category.label}</label>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='mb-3'>
                <p className="has-text-weight-semibold mb-2 is-flex is-justify-content-space-between is-align-items-center" style={{lineHeight: '2rem'}}>
                    <span className=''>Giá</span>
                    <CaretDown />
                </p>

            </div>
            <div className='mb-3'>
                <p className="has-text-weight-semibold mb-2 is-flex is-justify-content-space-between is-align-items-center" style={{lineHeight: '2rem'}}>
                    <span className=''>Nhãn hàng</span>
                    <CaretDown />
                </p>

            </div>
        </div>
    )
}

export default Filter;