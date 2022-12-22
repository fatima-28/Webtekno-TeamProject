import { useState } from 'react';
import './CategoriesPriceRange.scss'

const CategoriesPriceRange = (props: any) => {
  const [rangeval, setRangeval] = useState(10000);
  const { setRangePrice } = props;
  const onRangeValHandler = (event: any): void => {
    setRangeval(event.target.value);
    setRangePrice(event.target.value);
  }

  return (
    <div className='range-of-categories'>
      <input type="range" className="custom-range" min="0" max="10000"
        onChange={(event: any) => onRangeValHandler(event)} defaultValue='10000' />
      <span>{`<< ${rangeval}₼`}</span>
    </div>
  )
}

export default CategoriesPriceRange
