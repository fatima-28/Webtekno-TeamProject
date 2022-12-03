import React from 'react'
import { Link } from 'react-router-dom'
import './CategoriesList.scss'
const CategoriesList = () => {
  return (
    <div className="total-lists-in-categories">

    <ul className='categories-list-links-list'>
      <li><Link className='categories-list-links' to='/'>Smartfon</Link></li>
      <li><Link className='categories-list-links' to='/'>Qulaqlıq</Link></li>
      <li><Link className='categories-list-links' to='/'>Maus</Link></li>
      <li><Link className='categories-list-links' to='/'>Planşet</Link></li>
      <li><Link className='categories-list-links' to='/'>Komputerler və Notbuklar</Link></li>

      <li><Link className='categories-list-links' to='/'>Qələm</Link></li>
      <li><Link className='categories-list-links' to='/'>Smart Saatlar</Link></li>
      <li><Link className='categories-list-links' to='/'>Aksesuarlar</Link></li>
      <li><Link className='categories-list-links' to='/'>Televizor</Link></li>
      <li><Link className='categories-list-links' to='/'>Qaz pilitəsi</Link></li>

      <li><Link className='categories-list-links' to='/'>Aspirator</Link></li>
      <li><Link className='categories-list-links' to='/'>Çaydan</Link></li>
      <li><Link className='categories-list-links' to='/'>Əl blenderi</Link></li>
      <li><Link className='categories-list-links' to='/'>Ət çəkən</Link></li>
      <li><Link className='categories-list-links' to='/'>Fen</Link></li>

      <li><Link className='categories-list-links' to='/'>Kondisoner</Link></li>
      <li><Link className='categories-list-links' to='/'>Meyvələr üçün quruducu</Link></li>
      <li><Link className='categories-list-links' to='/'>Mətbəx Kombaynı</Link></li>
      <li><Link className='categories-list-links' to='/'>Mikrodalğalı soba</Link></li>
      <li><Link className='categories-list-links' to='/'>Mikser</Link></li>

      <li><Link className='categories-list-links' to='/'>Multibişirici</Link></li>
      <li><Link className='categories-list-links' to='/'>Partaryuyan</Link></li>
      <li><Link className='categories-list-links' to='/'>Qəhvədəmləyən</Link></li>
      <li><Link className='categories-list-links' to='/'>Saç Düzləndirici</Link></li>
      <li><Link className='categories-list-links' to='/'>Sendviç Maşını</Link></li>
      
      <li><Link className='categories-list-links' to='/'>Şirəçəkən</Link></li>
      <li><Link className='categories-list-links' to='/'>Solo Soba</Link></li>
      <li><Link className='categories-list-links' to='/'>Soyuducu</Link></li>
      <li><Link className='categories-list-links' to='/'>Toster</Link></li>
      <li><Link className='categories-list-links' to='/'>Tozsoran</Link></li>
      
      <li><Link className='categories-list-links' to='/'>Ütü</Link></li>
      <li><Link className='categories-list-links' to='/'>Buxarlı təmizləyici</Link></li>
      <li><Link className='categories-list-links' to='/'>Gril</Link></li>
      <li><Link className='categories-list-links' to='/'>Quraşdırılan soba</Link></li>
      <li><Link className='categories-list-links' to='/'>Stolüstü soba</Link></li>

      <li><Link className='categories-list-links' to='/'>PlayStation</Link></li>
      <li><Link className='categories-list-links' to='/'>Printer</Link></li>
      <li><Link className='categories-list-links' to='/'>Qabyuyan</Link></li>
    </ul>
    </div>
  )
}

export default CategoriesList
