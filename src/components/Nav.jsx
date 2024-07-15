import React from 'react'

export const Nav = ({toggleModal, locations, guests}) => {
  return (
    <header>
          <figure><img src='logo.png' /></figure>
          <div className='search'  onClick={toggleModal}>
            <input className='input-location' value={locations} placeholder='Add Location' />
            <input className='input-guest' placeholder='Add Guest'  value={guests}/>
            <figure className='search-lupa'><img src='lupa.svg'></img></figure>
          </div>
        </header>
  )
}
