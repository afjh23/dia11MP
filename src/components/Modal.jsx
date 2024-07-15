import React, { useRef, useEffect } from 'react';
import './modal.css';

export const Modal = ({ toggleModal }) => {
  const modalRef = useRef(null);

 const handleClickOutside = (e) =>{
    if(modalRef.current && !modalRef.current.contains(e.target))
    toggleModal()
 }


  return (
    <div className='modal' onClick={handleClickOutside}>
      <div className='modal-content' ref={modalRef} onClick={(e) => e.stopPropagation()}>
        <div className='modal-inputs'>
          <div className='modal-location'>
            <span>LOCATION</span>
            <input placeholder='Add Location' />
          </div>
          <div className='modal-guests'>
            <span>GUESTS</span>
            <input placeholder='Add Location' />
          </div>
          <button className='search-button'>
            <img src='lupa.svg' alt='search' />
            <span>Search</span>
          </button>
        </div>
        <div className='modal-values'>
          <div className='values-location'>
            <ul>
              <li>
                <figure>
                  <img src='ubi.svg' alt='location' />
                </figure>
                <span> muestra</span>
              </li>
            </ul>
          </div>
          <div className='values-guests'>
            <p className='guests-type'>Adults</p>
            <p className='guests-age'>Ages 13 or above</p>
            <div>
              <button>-</button>
              <span>0</span>
              <button>+</button>
            </div>
            <p className='guests-type'>Children</p>
            <p className='guests-age'>Ages 2 - 12</p>
            <div>
              <button>-</button>
              <span>0</span>
              <button>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};