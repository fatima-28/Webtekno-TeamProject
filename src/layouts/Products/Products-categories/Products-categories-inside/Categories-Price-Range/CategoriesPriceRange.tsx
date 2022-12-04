import { useState } from 'react';
import './CategoriesPriceRange.scss'

const CategoriesPriceRange = () => {
  const [rangeval, setRangeval] = useState(2000);


  return (
    <div className='range-of-categories'>
      <input type="range" className="custom-range" min="0" max="3999" 
       onChange={(event: any) => setRangeval(event.target.value)} defaultValue='2000' />
      <span>{`<< ${rangeval}₼`}</span>
    </div>
  )
}

export default CategoriesPriceRange
