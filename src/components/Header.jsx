import React from 'react'
import { Link,} from 'react-router-dom';

import { logo } from '../assets'

const Header = () => {
  return (
      <header className="w-full flex justify-between items-center bg-white
       sm:px-8 px-4 py-2.5 border-b border-b-[#e6ebf4]">
      <div className='flex items-center'>
        <h1 className='headline-logo'>MyPix </h1>
      <Link to='/'>
              <img src={logo } alt="Arik Alexandrov" className='w-28 object-contain ml-0.5'/>
          </Link>
      </div>

          <Link to='/create-post'
              className='font-inter font-medium bg-[#55efc4] text-white px-4 py-2 rounded-md'>
            Create
          </Link>
    </header>
  )
}

export default Header