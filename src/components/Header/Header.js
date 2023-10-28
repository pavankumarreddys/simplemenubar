import React, { useEffect,useState} from 'react';
import {FaBars,FaTimes} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'
export const Header = () => {
  const [displayMenu,setDisplayMenu] = useState(true)

  const Links = [
    {
      "id":1,
      "item":"Home"

    },
    {
      "id":2,
      "item":"About"

    },
    {
      "id":3,
      "item":"Career"

    },
    {
      "id":4,
      "item":"Blogs"

    },
    {
      "id":5,
      "item":"Contact"

    }
  ]

  return (
    <div className='header-container'>
      <div className='header-second-container'>
        <img src="https://img.freepik.com/premium-vector/sp-logo-design_731343-969.jpg?w=826" className='logo'/>
            <ul className='d-none d-md-flex navbar-items'>
              {Links.map(({id,item})=>(
                  <li key={id} className='nav-item'>{item}</li>
              ))}
            </ul>

            {!displayMenu&&
            
            <ul onClick={()=>{setDisplayMenu(!displayMenu)}} className='d-md-none navbar-items position-absolute top-0 start-0 bg-secondary w-100 h-100  text-white'>
              {Links.map(({id,item})=>(
                  <li key={id} className='nav-item'>{item}</li>
              ))}
            </ul>
            }
    
            <div  className='d-md-none cursor-pointer custom-z-index ' onClick={()=>{setDisplayMenu(!displayMenu)}}>
              {displayMenu?<FaBars size={40} /> : <FaTimes size={40} />}
            </div>
        </div>
    </div>
  )
}
