import React from 'react'
import './CategoriesList.scss'
const CategoriesList = (props: any) => {
  const { setCategory } = props;

  const handleClick = ({target}:any) => {
    setCategory(target.id);
  }

  return (
    <div className="total-lists-in-categories">
      <ul className='categories-list-links-list'>
        <li><span onClick={handleClick} className='categories-list-links' id='phone'>Smartfon</span></li>
        <li><span onClick={handleClick} className='categories-list-links' id=''>Qulaqlıq</span></li>
        <li><span onClick={handleClick} className='categories-list-links' id='mouse'>Maus</span></li>
        <li><span onClick={handleClick} className='categories-list-links' id=''>Planşet</span></li>
        <li><span onClick={handleClick} className='categories-list-links'>Komputerler və Notbuklar</span></li>

        <li><span onClick={handleClick} className='categories-list-links'>Qələm</span></li>
        <li><span onClick={handleClick} className='categories-list-links'>Smart Saatlar</span></li>
        <li><span onClick={handleClick} className='categories-list-links'>Aksesuarlar</span></li>
        <li><span onClick={handleClick} className='categories-list-links'>Televizor</span></li>
        <li><span onClick={handleClick} className='categories-list-links'>Qaz pilitəsi</span></li>

        <li><span onClick={handleClick} className='categories-list-links'>Aspirator</span></li>
        <li><span onClick={handleClick} className='categories-list-links'>Çaydan</span></li>
        <li><span onClick={handleClick} className='categories-list-links'>Əl blenderi</span></li>
        <li><span onClick={handleClick} className='categories-list-links'>Ət çəkən</span></li>
        <li><span onClick={handleClick} className='categories-list-links'>Fen</span></li>

        <li><span onClick={handleClick} className='categories-list-links'>Kondisoner</span></li>
        <li><span onClick={handleClick} className='categories-list-links'>Meyvələr üçün quruducu</span></li>
        <li><span onClick={handleClick} className='categories-list-links'>Mətbəx Kombaynı</span></li>
        <li><span onClick={handleClick} className='categories-list-links'>Mikrodalğalı soba</span></li>
        <li><span onClick={handleClick} className='categories-list-links'>Mikser</span></li>

        <li><span onClick={handleClick} className='categories-list-links'>Multibişirici</span></li>
        <li><span onClick={handleClick} className='categories-list-links'>Partaryuyan</span></li>
        <li><span onClick={handleClick} className='categories-list-links'>Qəhvədəmləyən</span></li>
        <li><span onClick={handleClick} className='categories-list-links'>Saç Düzləndirici</span></li>
        <li><span onClick={handleClick} className='categories-list-links'>Sendviç Maşını</span></li>

        <li><span onClick={handleClick} className='categories-list-links'>Şirəçəkən</span></li>
        <li><span onClick={handleClick} className='categories-list-links'>Solo Soba</span></li>
        <li><span onClick={handleClick} className='categories-list-links'>Soyuducu</span></li>
        <li><span onClick={handleClick} className='categories-list-links'>Toster</span></li>
        <li><span onClick={handleClick} className='categories-list-links'>Tozsoran</span></li>

        <li><span onClick={handleClick} className='categories-list-links'>Ütü</span></li>
        <li><span onClick={handleClick} className='categories-list-links'>Buxarlı təmizləyici</span></li>
        <li><span onClick={handleClick} className='categories-list-links'>Gril</span></li>
        <li><span onClick={handleClick} className='categories-list-links'>Quraşdırılan soba</span></li>
        <li><span onClick={handleClick} className='categories-list-links'>Stolüstü soba</span></li>

        <li><span onClick={handleClick} className='categories-list-links'>PlayStation</span></li>
        <li><span onClick={handleClick} className='categories-list-links'>Printer</span></li>
        <li><span onClick={handleClick} className='categories-list-links'>Qabyuyan</span></li>
      </ul>
    </div>
  )
}

export default CategoriesList
